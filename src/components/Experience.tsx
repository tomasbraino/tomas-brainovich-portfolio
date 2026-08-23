import React from 'react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="experience-section" id="experience" aria-label="Work Experience">
      <div className="section-title-wrap">
        <h2 className="section-title" id="experience-section-heading">
          Experience
        </h2>
      </div>

      <div className="experience-list" id="experience-cards-list">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            id={`experience-card-${exp.id}`}
            className={`experience-card ${exp.isFeatured ? 'featured-card' : ''}`}
          >
            <div className="card-header-row">
              <div>
                <h3 className="card-role-title" id={`role-title-${exp.id}`}>
                  {exp.role}
                </h3>
                <p className="card-project-name" id={`project-name-${exp.id}`}>
                  {exp.project}
                </p>
              </div>
              <span className="card-date-badge" id={`period-badge-${exp.id}`}>
                {exp.period}
              </span>
            </div>

            <ul className="card-bullets-list" id={`bullets-list-${exp.id}`}>
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} id={`bullet-${exp.id}-${idx}`}>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
