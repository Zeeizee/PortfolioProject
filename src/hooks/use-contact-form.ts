"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { contactFormLabels } from "@/data/portfolio";

type FormStatus = {
  type: "success" | "error" | null;
  message: string;
};

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: contactFormLabels.errorRequired,
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({
        type: "error",
        message: contactFormLabels.errorEmail,
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("credentials");
      }

      if (!formRef.current) {
        throw new Error("form");
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: contactFormLabels.success,
        });
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      const isConfigError =
        error instanceof Error &&
        (error.message.includes("credentials") ||
          error.message.includes("EmailJS"));

      setStatus({
        type: "error",
        message: isConfigError
          ? contactFormLabels.errorConfig
          : contactFormLabels.errorSend,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formRef,
    formData,
    isLoading,
    status,
    handleChange,
    handleSubmit,
  };
}
