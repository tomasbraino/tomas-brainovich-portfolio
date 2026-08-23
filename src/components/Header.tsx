import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';

interface HeaderProps {
  onResumeClick: () => void;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onResumeClick, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'contact') {
      onContactClick();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header" id="top-header">
      <nav className="nav-content" aria-label="Main Navigation">
        <a 
          href="#" 
          className="brand-logo" 
          id="brand-logo-link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {contactData.name}
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a
            href="#experience"
            className="nav-link"
            id="nav-link-experience"
            onClick={(e) => scrollToSection(e, 'experience')}
          >
            Experience
          </a>
          <a
            href="#skills"
            className="nav-link"
            id="nav-link-skills"
            onClick={(e) => scrollToSection(e, 'skills')}
          >
            Skills
          </a>
          <a
            href="#learning"
            className="nav-link"
            id="nav-link-learning"
            onClick={(e) => scrollToSection(e, 'learning')}
          >
            Learning
          </a>
          <a
            href="#contact"
            className="nav-link"
            id="nav-link-contact"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact
          </a>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="header-cta-btn"
          id="header-resume-btn"
          onClick={onResumeClick}
          aria-label="View Tomás Brainovich's Resume"
        >
          Resume
        </button>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown" id="mobile-nav-menu">
          <a
            href="#experience"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'experience')}
          >
            Experience
          </a>
          <a
            href="#skills"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'skills')}
          >
            Skills
          </a>
          <a
            href="#learning"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'learning')}
          >
            Learning
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact
          </a>
          <button
            type="button"
            className="header-cta-btn"
            style={{ width: 'fit-content', marginTop: '0.5rem' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onResumeClick();
            }}
          >
            View Resume
          </button>
        </div>
      )}
    </header>
  );
};
