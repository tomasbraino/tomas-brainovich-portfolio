import emailjs from '@emailjs/browser';

export interface EmailMessage {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface EmailSendResult {
  success: boolean;
  message?: string;
}

export const isEmailServiceConfigured = (): boolean => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return Boolean(
    serviceId &&
    templateId &&
    publicKey &&
    !serviceId.includes('your_') &&
    !templateId.includes('your_') &&
    !publicKey.includes('your_')
  );
};

export const sendContactEmail = async (data: EmailMessage): Promise<EmailSendResult> => {
  // Honeypot spam protection: bots fill hidden fields, humans don't.
  // If filled, silently treat as success to waste bot resources without sending email.
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return { success: true, message: 'Message received.' };
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!isEmailServiceConfigured()) {
    throw new Error(
      'EmailJS credentials are not configured in your environment variables. Please check your .env file.'
    );
  }

  const templateParams: Record<string, unknown> = {
    from_name: data.name.trim(),
    reply_to: data.email.trim(),
    message: data.message.trim(),
    to_name: 'Tomás Brainovich',
    to_email: 'tomasbraino@gmail.com',
  };

  try {
    const response = await emailjs.send(
      serviceId!,
      templateId!,
      templateParams,
      publicKey!
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error(`Email delivery returned status ${response.status}`);
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
    return { success: false, message: errorMessage };
  }
};
