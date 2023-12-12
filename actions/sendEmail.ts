"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContextFromEmail from "@/email/context-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (formData: FormData) => {
  const senderemail = formData.get("senderEmail");
  const message = formData.get("message");
  if (!validateString(senderemail, 500)) {
    return {
      error: "Invalid sender email.",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid sender email.",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "wittawat.pho@ku.th",
      subject: "Message from contact form",
      reply_to: senderemail as string,
      react: React.createElement(ContextFromEmail, {
        message: message as string,
        senderEmail: senderemail as string,
      }),
    });
  } catch (err: unknown) {
    error: getErrorMessage(err);
  }
  return { data };
};

export default sendMail;
