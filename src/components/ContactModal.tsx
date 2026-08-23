import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
      onCopyText('Message received! Thank you.', 'Success');
    }, 1500);
  };

  return (
    <div className="modal-backdrop" id="contact-modal-backdrop" onClick={onClose}>
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
            <span>Get in Touch with Tomás</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            id="close-contact-modal"
            onClick={onClose}
            aria-label="Close contact dialog"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <button
              type="button"
              className="skill-tag"
              style={{ justifyContent: 'center', gap: '0.4rem', padding: '0.6rem' }}
              onClick={() => onCopyText(contactData.email, 'Email address')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary)' }}>mail</span>
              <span>{contactData.email}</span>
            </button>
            <button
              type="button"
              className="skill-tag"
              style={{ justifyContent: 'center', gap: '0.4rem', padding: '0.6rem' }}
              onClick={() => onCopyText(contactData.phone, 'Phone number')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary)' }}>call</span>
              <span>{contactData.phone}</span>
            </button>
          </div>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                check_circle
              </span>
              <h3 style={{ fontSize: '20px', color: 'var(--on-background)', marginBottom: '0.25rem' }}>
                Message Sent
              </h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>
                Thank you for reaching out. Tomás will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. name@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-msg">Message</label>
                <textarea
                  id="contact-msg"
                  required
                  placeholder="Let's discuss automated testing, QA leadership, or upcoming opportunities..."
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
              >
                <span className="material-symbols-outlined">send</span>
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
