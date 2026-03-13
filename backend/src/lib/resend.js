import { Resend } from "resend";
import { ENV } from "./env.js";

let resendClient = null;

if (ENV.RESEND_API_KEY) {
  resendClient = new Resend(ENV.RESEND_API_KEY);
} else {
  console.warn("⚠️ RESEND_API_KEY not found. Email service disabled.");
}

export const sender = {
  email: ENV.EMAIL_FROM || "no-reply@chatify.com",
  name: ENV.EMAIL_FROM_NAME || "Chatify",
};

export { resendClient };