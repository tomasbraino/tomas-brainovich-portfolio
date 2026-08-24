import { ExperienceItem, EducationItem, ContactInfo } from '../types';

export const contactData: ContactInfo = {
  name: "Tomás Brainovich",
  title: "QA Engineer",
  phone: "+5493813306565",
  location: "Tucumán, AR",
  email: "tomasbraino@gmail.com",
  linkedin: "https://www.linkedin.com/in/tbraino/",
  github: "https://github.com/tomasbraino",
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "QA Engineer II",
    project: "Compliance Web Application - SOVOS",
    period: "Apr 2025 - Present",
    isFeatured: true,
    bullets: [
      "Maintenance of the main product, performing manual and automated testing through different .pdf reports and Databases.",
      "Creation and maintenance of automated test based on a Playwright framework with TypeScript, following the ScreenPlay pattern design",
      "Developed E2E, Regression, Smoke, and Functional testing strategies.",
      "Monitoring and executing Azure DevOps (CI/CD) pipelines to run all the tests.",
      "Managed repositories with Azure Repos and tracked defects in Jira.",
      "API testing using Postman and SoapUI",
      "Performing SQL queries for data validation",
      "Test plans and strategy creation for new feature development",
      "Shift-left Testing with collaboration with developers"
    ],
    skills: ["TypeScript", "Playwright", "ScreenPlay", "Cursor", "Devin", "API Testing", "SQL", "AzureDevops", "Git", "Jira"],
  },
  {
    id: "exp-2",
    role: "Software Development Engineer in Test (SDET)",
    project: "Financial Web Application - ITR",
    period: "May 2024 — Apr 2025",
    isFeatured: true,
    bullets: [
      "Refactored and created automated tests using Selenium, Cucumber, JUnit, and Java.",
      "Developed E2E, Regression, Smoke, and Functional testing strategies.",
      "Monitored and executed Jenkins (CI/CD) jobs.",
      "Managed repositories with Bitbucket and tracked defects in Jira.",
      "Performing SQL queries for data validation"
    ],
    skills: ["Java", "Selenium", "Cucumber", "JUnit", "SQL", "Jenkins", "Bitbucket", "Jira"],
  },
  {
    id: "exp-3",
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
    id: "exp-4",
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
    id: "exp-5",
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
  { name: "Java", isPrimary: false },
  { name: "TypeScript", isPrimary: false },
  { name: "SQL", isPrimary: false },
  { name: "Selenium", isPrimary: false },
  { name: "Playwright", isPrimary: false },
  { name: "Cucumber", isPrimary: false },
  { name: "JUnit", isPrimary: false },
  { name: "TestNG", isPrimary: false },
  { name: "Cursor", isPrimary: false },
  { name: "Devin", isPrimary: false },
  { name: "Appium", isPrimary: false },
  { name: "Jenkins", isPrimary: false },
  { name: "Azure DevOps", isPrimary: false },
  { name: "Git", isPrimary: false },
  { name: "Jira", isPrimary: false },
  { name: "Postman", isPrimary: false },
];

export const methodologies = [
  "Agile (Scrum/Kanban)",
  "Shift-Left Testing",
  "CI/CD",
  "E2E Testing"
];

export const educationData: EducationItem = {
  degree: "Systems Analyst",
  institution: "Universidad Tecnológica Nacional (UTN-FRT)",
  period: "2017 — Present",
};
