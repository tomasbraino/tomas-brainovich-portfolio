import React from 'react';
import { techStackSkills, methodologies, educationData } from '../data/portfolioData';

interface SkillsSectionProps {
  onSkillClick?: (skillName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSkillClick }) => {
  return (
    <section className="skills-section" id="skills" aria-label="Skills & Expertise">
      <div className="section-title-wrap">
        <h2 className="section-title" id="skills-section-heading">
          Skills &amp; Expertise
        </h2>
      </div>

      <div className="skills-grid" id="skills-two-col-grid">
        {/* Tools & Tech Stack */}
        <div className="skill-panel-box" id="tech-stack-panel">
          <div className="panel-header tools-header">
            <span className="material-symbols-outlined" id="tools-icon">build</span>
            <h3 className="panel-title" id="tools-panel-title">Tools &amp; Tech Stack</h3>
          </div>

          <div className="tags-wrap-row" id="tools-tags-list">
            {techStackSkills.map((skill, index) => (
              <span
                key={index}
                id={`tech-tag-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`skill-tag ${skill.isPrimary ? 'primary-highlight' : ''}`}
                onClick={() => onSkillClick && onSkillClick(skill.name)}
                style={{ cursor: onSkillClick ? 'pointer' : 'default' }}
                title={`Technology: ${skill.name}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Methodologies & Education */}
        <div className="skill-panel-box" id="learning">
          <div className="panel-header learning-header">
            <span className="material-symbols-outlined" id="school-icon">school</span>
            <h3 className="panel-title" id="methodologies-panel-title">Methodologies &amp; Education</h3>
          </div>

          <div className="tags-wrap-row" id="methodology-tags-list" style={{ marginBottom: '1.5rem' }}>
            {methodologies.map((item, index) => (
              <span
                key={index}
                id={`methodology-tag-${index}`}
                className="skill-tag"
              >
                {item}
              </span>
            ))}
          </div>

          <hr className="education-divider" />

          <div id="education-block">
            <p className="education-degree" id="edu-degree">
              {educationData.degree}
            </p>
            <p className="education-institution" id="edu-institution">
              {educationData.institution}
            </p>
            <p className="education-period" id="edu-period">
              {educationData.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
