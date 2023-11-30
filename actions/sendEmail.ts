"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

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
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "wittawat.pho@ku.th",
      subject: "Message from contact form",
      reply_to: senderemail as string,
      text: message as string,
    });
  } catch (err: any) {
    getErrorMessage(err);
  }
};

export default sendMail;
