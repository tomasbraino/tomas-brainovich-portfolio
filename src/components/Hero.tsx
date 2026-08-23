import React from 'react';
import { contactData } from '../data/portfolioData';

interface HeroProps {
  onResumeDownload: () => void;
  onContactClick: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onResumeDownload,
  onContactClick,
  onCopyText,
}) => {
  return (
    <section className="hero-section" id="hero-section" aria-label="Introduction">
      <h1 className="hero-title" id="hero-name-title">
        {contactData.name}
      </h1>
      <p className="hero-subtitle" id="hero-job-title">
        {contactData.title}
      </p>
      <p className="hero-tagline" id="hero-description">
        {contactData.tagline}
      </p>

      <div className="hero-actions-container" id="hero-actions-bar">
        {/* Download Resume Button */}
        <button
          type="button"
          className="btn-primary-action"
          id="hero-download-resume-btn"
          onClick={onResumeDownload}
        >
          <span className="material-symbols-outlined">download</span>
          Download Resume (PDF)
        </button>

        {/* Contact Info Items */}
        <div className="contact-meta-group" id="hero-contact-group">
          <button
            type="button"
            className="contact-chip-link"
            id="hero-phone-chip"
            onClick={() => onCopyText(contactData.phone, 'Phone number')}
            title="Click to copy phone number"
          >
            <span className="material-symbols-outlined">call</span>
            <span>{contactData.phone}</span>
          </button>

          <button
            type="button"
            className="contact-chip-link"
            id="hero-location-chip"
            onClick={() => onCopyText(contactData.location, 'Location')}
            title="Location"
          >
            <span className="material-symbols-outlined">location_on</span>
            <span>{contactData.location}</span>
          </button>

          {/* Social Icons */}
          <div className="social-icons-group" id="hero-social-links">
            <button
              type="button"
              className="social-icon-btn"
              id="hero-email-btn"
              aria-label="Send Email / Contact"
              onClick={onContactClick}
              title={`Email: ${contactData.email}`}
            >
              <span className="material-symbols-outlined">mail</span>
            </button>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              id="hero-linkedin-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <span className="material-symbols-outlined">link</span>
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              id="hero-github-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
