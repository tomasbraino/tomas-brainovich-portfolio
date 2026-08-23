import { ExperienceItem, EducationItem, ContactInfo } from '../types';

export const contactData: ContactInfo = {
  name: "Tomás Brainovich",
  title: "QA Engineer",
  tagline: "Ensuring software excellence through rigorous automation, reliability, and precision.",
  phone: "+5493813306565",
  location: "Tucumán, AR",
  email: "tomasbraino@gmail.com",
  linkedin: "https://linkedin.com/in/tomasbrainovich",
  github: "https://github.com/tomasbraino",
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Development Engineer in Test (SDET)",
    project: "Financial Web Application",
    period: "May 2024 — Apr 2025",
    isFeatured: true,
    bullets: [
      "Refactored and created automated tests using Selenium, Cucumber, JUnit, and Java.",
      "Developed E2E, Regression, Smoke, and Functional testing strategies.",
      "Configured and maintained Jenkins (CI) and monitored jobs.",
      "Managed repositories with Git/Bitbucket and tracked defects in Jira.",
    ],
    skills: ["Java", "Selenium", "Cucumber", "JUnit", "Jenkins", "Git", "Jira"],
  },
  {
    id: "exp-2",
    role: "Software Development Engineer in Test (SDET)",
    project: "Fintech CRM & Web Services",
    period: "Aug 2022 — Apr 2024",
    isFeatured: false,
    bullets: [
      "Automated web tests using Selenium, TestNG, and Java.",
      "Performed manual testing across browsers and executed comprehensive test plans.",
      "Maintained Jenkins CI pipelines and reported regression analysis results.",
    ],
    skills: ["Java", "Selenium", "TestNG", "Jenkins", "Web Services", "Manual Testing"],
  },
  {
    id: "exp-3",
    role: "Software Development Engineer in Test (SDET)",
    project: "Solvd",
    period: "May 2022 — Aug 2022",
    isFeatured: false,
    bullets: [
      "Designed and automated test cases with BrowserStack and Java.",
      "Performed mobile automation with Appium and Android Studio.",
      "Troubleshot issues during regression using application log extracts.",
    ],
    skills: ["Java", "BrowserStack", "Appium", "Android Studio", "Log Analysis"],
  },
  {
    id: "exp-4",
    role: "Software Development Engineer in Test (SDET)",
    project: "Solvd",
    period: "Dec 2021 — May 2022",
    isFeatured: false,
    bullets: [
      "Automated web tests for an e-commerce site using Selenium and Java.",
      "Developed testing strategies and maintained Jenkins CI/CD integration.",
    ],
    skills: ["Selenium", "Java", "CI/CD", "Jenkins", "E-commerce Testing"],
  },
];

export const techStackSkills = [
  { name: "Java", isPrimary: true },
  { name: "TypeScript", isPrimary: false },
  { name: "SQL", isPrimary: false },
  { name: "Selenium", isPrimary: false },
  { name: "TestNG", isPrimary: false },
  { name: "Cucumber", isPrimary: false },
  { name: "Appium", isPrimary: false },
  { name: "Jenkins", isPrimary: false },
  { name: "Git", isPrimary: false },
  { name: "Jira", isPrimary: false },
  { name: "Postman", isPrimary: false },
];

export const methodologies = [
  "Agile (Scrum/Kanban)",
  "CI/CD",
  "E2E Testing",
];

export const educationData: EducationItem = {
  degree: "Systems Analysis",
  institution: "Universidad Tecnológica Nacional (UTN-FRT)",
  period: "2017 — Present",
};
