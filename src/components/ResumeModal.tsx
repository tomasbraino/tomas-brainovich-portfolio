import React from 'react';
import { contactData, experiences, techStackSkills, methodologies, educationData } from '../data/portfolioData';
import html2pdf from 'html2pdf.js';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onCopyText,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume-printable-area');
    if (!element) return;

    const opt: any = {
      margin:       0.5, // top, left, bottom, right
      filename:     'Tomas_Brainovich_QA_Engineer_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
      onCopyText('Resume downloaded as PDF', 'Notification');
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      onCopyText('Failed to download PDF', 'Error');
    }
  };

  return (
    <div className="modal-backdrop" id="resume-modal-backdrop" onClick={onClose}>
      <div 
        className="modal-card" 
        id="resume-modal-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        <div className="modal-header">
          <div className="modal-title" id="resume-modal-title">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>
              description
            </span>
            <span>{contactData.name} - Official Resume</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            id="close-resume-modal"
            onClick={onClose}
            aria-label="Close resume preview"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="modal-body" id="resume-printable-area">
          {/* Header Summary */}
          <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--outline-variant)' }}>
            <h2 style={{ fontSize: '28px', color: 'var(--on-background)', marginBottom: '0.25rem' }}>
              {contactData.name}
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
              {contactData.title}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '13px', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-mono)' }}>
              <span>📍 {contactData.location}</span>
              <span>✉️ {contactData.email}</span>
            </div>
            <p style={{ marginTop: '0.75rem', color: 'var(--on-surface-variant)', fontSize: '14px', maxWidth: '580px', margin: '0.75rem auto 0' }}>
              {contactData.tagline}
            </p>
          </div>

          {/* Experience Section in Resume */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--primary)', borderBottom: '1px solid var(--outline-variant)', paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Professional Experience
            </h3>
            {experiences.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <strong style={{ color: 'var(--on-background)', fontSize: '16px' }}>{exp.role}</strong>
                  <span style={{ fontSize: '13px', color: 'var(--secondary)', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
                </div>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: '14px', marginBottom: '0.5rem' }}>
                  {exp.project}
                </div>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--on-surface-variant)', fontSize: '14px', lineHeight: '1.5' }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills & Education */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '18px', color: 'var(--primary)', borderBottom: '1px solid var(--outline-variant)', paddingBottom: '0.4rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Technical Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {techStackSkills.map((s, i) => (
                  <span key={i} className="skill-tag" style={{ fontSize: '12px', padding: '0.2rem 0.5rem' }}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', color: 'var(--secondary)', borderBottom: '1px solid var(--outline-variant)', paddingBottom: '0.4rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Education
              </h3>
              <strong style={{ color: 'var(--on-background)', display: 'block', fontSize: '14px' }}>
                {educationData.degree}
              </strong>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '13px' }}>
                {educationData.institution}
              </p>
              <p style={{ color: 'var(--secondary)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                {educationData.period}
              </p>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="contact-chip-link"
            id="print-resume-btn"
            onClick={handlePrint}
            style={{ border: '1px solid var(--outline-variant)' }}
          >
            <span className="material-symbols-outlined">print</span>
            <span>Print</span>
          </button>

          <button
            type="button"
            className="btn-primary-action"
            id="download-resume-action-btn"
            onClick={handleDownloadPDF}
          >
            <span className="material-symbols-outlined">download</span>
            <span>Download PDF Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
};
