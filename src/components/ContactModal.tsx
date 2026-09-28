import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';
import { sendContactEmail } from '../services/emailService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onCopyText,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '', honeypot: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  const handleClose = () => {
    onClose();
    if (status === 'success') {
      handleReset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setStatus('success');
        onCopyText('Message sent successfully! I will reply soon.', 'Email');
      } else {
        setStatus('error');
        setErrorMessage(
          result.message || 'Unable to deliver message right now. Please try again or use direct email.'
        );
      }
    } catch (err: unknown) {
      setStatus('error');
      const errText =
        err instanceof Error ? err.message : 'An unexpected error occurred while sending your message.';
      setErrorMessage(errText);
    }
  };

  const mailtoFallback = `mailto:${contactData.email}?subject=${encodeURIComponent(
    `Contact from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="modal-backdrop" id="contact-modal-backdrop" onClick={handleClose}>
      <div
        className="modal-card"
        id="contact-modal-card"
        style={{ maxWidth: '540px' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div className="modal-header">
          <div className="modal-title" id="contact-modal-title">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>
              mail
            </span>
            <span>Get in Touch</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            id="close-contact-modal"
            onClick={handleClose}
            aria-label="Close contact dialog"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="modal-body">

          {/* Success State */}
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }} id="contact-success-state">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '52px', color: 'var(--primary)', marginBottom: '0.75rem' }}
              >
                check_circle
              </span>
              <h3 style={{ fontSize: '20px', color: 'var(--on-background)', marginBottom: '0.5rem' }}>
                Message Sent Successfully!
              </h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                Thank you for reaching out. Your message has been routed to Tomás&apos;s personal inbox and he will reply shortly.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button
                  type="button"
                  className="btn-primary-action"
                  onClick={handleClose}
                  id="contact-done-btn"
                >
                  <span className="material-symbols-outlined">check</span>
                  <span>Done</span>
                </button>
                <button
                  type="button"
                  className="skill-tag"
                  style={{ padding: '0.75rem 1.25rem' }}
                  onClick={handleReset}
                  id="contact-send-another-btn"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    edit_note
                  </span>
                  <span>Send Another</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="contact-form" noValidate={false}>
              {/* Error Banner with Mailto Fallback */}
              {status === 'error' && (
                <div className="form-error-banner" id="contact-error-banner" role="alert">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      error
                    </span>
                    <span>{errorMessage || 'Failed to send message.'}</span>
                  </div>
                  <div style={{ marginTop: '0.25rem' }}>
                    <a
                      href={mailtoFallback}
                      className="skill-tag"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '12px',
                        padding: '0.35rem 0.65rem',
                        textDecoration: 'none',
                        color: 'var(--on-background)',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                        outgoing_mail
                      </span>
                      <span>Open in your default email client instead</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Honeypot field for bot spam prevention (invisible to human visitors) */}
              <div className="honeypot-field" aria-hidden="true">
                <label htmlFor="contact-website-url">Website (leave blank)</label>
                <input
                  id="contact-website-url"
                  name="website_url"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  disabled={status === 'sending'}
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email" >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={status === 'sending'}
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-msg">
                  Message *
                </label>
                <textarea
                  id="contact-msg"
                  required
                  maxLength={1000}
                  disabled={status === 'sending'}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn-primary-action"
                style={{ width: '100%', justifyContent: 'center' }}
                id="submit-contact-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="material-symbols-outlined spinner-icon">progress_activity</span>
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
