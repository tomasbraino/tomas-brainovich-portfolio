import emailjs from '@emailjs/browser';

export interface EmailMessage {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export const sendContactEmail = async (
  data: EmailMessage
): Promise<{ success: boolean; message?: string }> => {
  // Silent bot trap: if the hidden honeypot is filled, return without sending
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return { success: true };
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      message: 'Email service is currently unavailable. Please reach out via direct email below.',
    };
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name.trim(),
        reply_to: data.email.trim(),
        message: data.message.trim(),
        to_name: 'Tomás Brainovich',
        to_email: 'tomasbraino@gmail.com',
      },
      publicKey
    );

    return { success: true };
  } catch (error: unknown) {
    const errText =
      error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
    return { success: false, message: errText };
  }
};
