import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        showToast(`${label} copied to clipboard!`);
      },
      () => {
        showToast(`${text}`);
      }
    );
  };

  const handleSkillClick = (skillName: string) => {
    showToast(`Skill: ${skillName} selected`);
  };

  return (
    <div className="portfolio-app-root" id="portfolio-app-root">
      {/* Top Sticky Navigation */}
      <Header
        onResumeClick={() => setResumeOpen(true)}
        onContactClick={() => setContactOpen(true)}
      />

      {/* Main Sections Content Container */}
      <main className="main-content" id="main-content-wrapper">
        <Hero
          onResumeDownload={() => setResumeOpen(true)}
          onContactClick={() => setContactOpen(true)}
          onCopyText={handleCopyText}
        />

        <Experience />

        <SkillsSection onSkillClick={handleSkillClick} />
      </main>

      {/* Footer */}
      <Footer onContactClick={() => setContactOpen(true)} />

      {/* Modals & Notifications */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onCopyText={handleCopyText}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        onCopyText={handleCopyText}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
