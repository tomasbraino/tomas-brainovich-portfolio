import React from 'react';
import { contactData, experiences, techStackSkills, methodologies, educationData } from '../data/portfolioData';

export const ResumeDocument: React.FC = () => {
  // Hardcoded print-friendly colors
  const colors = {
    primaryText: '#111827',
    secondaryText: '#374151',
    accentPrimary: '#2563eb', // A professional blue
    accentSecondary: '#4b5563',
    border: '#e5e7eb',
    background: '#ffffff',
  };

  return (
    <div 
      id="resume-printable-area"
      style={{ 
        width: '800px', // Fixed width for consistent PDF scale
        backgroundColor: colors.background, 
        padding: '40px',
        color: colors.primaryText,
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Header Summary */}
      <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${colors.border}` }}>
        <h2 style={{ fontSize: '32px', color: colors.primaryText, marginBottom: '0.25rem', margin: 0 }}>
          {contactData.name}
        </h2>
        <p style={{ fontSize: '20px', color: colors.accentPrimary, fontWeight: 600, marginBottom: '0.75rem', marginTop: '0.5rem' }}>
          {contactData.title}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '14px', color: colors.secondaryText, fontFamily: 'monospace' }}>
          <span>📍 {contactData.location}</span>
          <span>✉️ {contactData.email}</span>
        </div>
        <p style={{ marginTop: '0.75rem', color: colors.secondaryText, fontSize: '15px', maxWidth: '650px', margin: '0.75rem auto 0', lineHeight: '1.5' }}>
          {contactData.tagline}
        </p>
      </div>

      {/* Experience Section */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '18px', color: colors.accentPrimary, borderBottom: `1px solid ${colors.border}`, paddingBottom: '0.4rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Professional Experience
        </h3>
        {experiences.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
              <strong style={{ color: colors.primaryText, fontSize: '16px' }}>{exp.role}</strong>
              <span style={{ fontSize: '14px', color: colors.accentPrimary, fontFamily: 'monospace', fontWeight: 500 }}>{exp.period}</span>
            </div>
            <div style={{ color: colors.secondaryText, fontSize: '15px', marginBottom: '0.5rem', fontWeight: 500 }}>
              {exp.project}
            </div>
            <ul style={{ paddingLeft: '1.25rem', color: colors.secondaryText, fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: '0.3rem' }}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills & Education */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '18px', color: colors.accentPrimary, borderBottom: `1px solid ${colors.border}`, paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Technical Stack
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {techStackSkills.map((s, i) => (
              <span key={i} style={{ 
                fontSize: '13px', 
                padding: '0.25rem 0.6rem', 
                backgroundColor: '#f3f4f6', 
                color: '#1f2937', 
                borderRadius: '4px',
                border: '1px solid #d1d5db',
                fontWeight: 500
              }}>
                {s.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '18px', color: colors.accentPrimary, borderBottom: `1px solid ${colors.border}`, paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Education
          </h3>
          <strong style={{ color: colors.primaryText, display: 'block', fontSize: '15px', marginBottom: '0.25rem' }}>
            {educationData.degree}
          </strong>
          <p style={{ color: colors.secondaryText, fontSize: '14px', margin: '0 0 0.25rem 0' }}>
            {educationData.institution}
          </p>
          <p style={{ color: colors.accentSecondary, fontSize: '13px', fontFamily: 'monospace', margin: 0 }}>
            {educationData.period}
          </p>
        </div>
      </div>
    </div>
  );
};
