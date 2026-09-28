import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ResumeDocument } from './components/ResumeDocument';
import html2pdf from 'html2pdf.js';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownloadPDF = async () => {
    showToast('Generating PDF...');

    // Render the React component to an HTML string
    const htmlString = renderToString(<ResumeDocument />);

    const opt: any = {
      margin:       0.5, // top, left, bottom, right
      filename:     'Tomas_Brainovich_QA_Engineer_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(htmlString).save();
      showToast('Resume downloaded successfully!');
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      showToast('Failed to download PDF');
    }
  };

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
        onResumeClick={handleDownloadPDF}
        onContactClick={() => setContactOpen(true)}
      />

      {/* Main Sections Content Container */}
      <main className="main-content" id="main-content-wrapper">
        <Hero
          onResumeDownload={handleDownloadPDF}
          onContactClick={() => setContactOpen(true)}
          onCopyText={handleCopyText}
        />

        <Experience />

        <SkillsSection onSkillClick={handleSkillClick} />
      </main>

      {/* Footer */}
      <Footer onContactClick={() => setContactOpen(true)} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        onCopyText={handleCopyText}
      />

      <Toast message={toastMessage} />
    </div>
  );
}
