import { CodeXml, TextSearch, BriefcaseBusiness, Database, Component, ToolCase } from "lucide-react";
import fundamentalPython from "../assets/fundamental-python.png"
import fundamentalDataScience from "../assets/fundamental-data-science.png"
import dataScienceIntermediate from "../assets/data-science-intermediate.png"
import visualisiData from "../assets/visualisasi-data.png"
import customerChurn from "../assets/customer-churn.png"
import expertSystem from "../assets/expert-system-malaria.png"
import landingPage from "../assets/ekraf.png";
import plantWatering from "../assets/Plant-Watering-System.jpeg"
import vgsales from "../assets/videogames-sales.png"
import agentAi from "../assets/agent-ai.png"

export const skills = [
  {
    category: "Programming",
    icon: CodeXml,
    items: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Tailwind",
      "Bootstrap",
      "React.Js",
    ],
  },
  {
    category: "Data Analytics",
    icon: TextSearch,
    items: ["EDA", "Data Cleaning", "Statistical Analysis"],
  },
  {
    category: "Business Intelligence",
    icon: BriefcaseBusiness,
    items: ["Power BI", "Tableau"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["SQL", "MySQL"],
  },
  {
    category: "Design & UI/UX",
    icon: Component,
    items: ["Figma"],
  },
  {
    category: "Tools",
    icon: ToolCase,
    items: ["Excel", "Git", "VS Code"],
  },
];

export const certifications = [
  {
    title: "Fundamental Python",
    issuer: "Coding Studio",
    date: "2025",
    image: fundamentalPython,
    credentialUrl: "https://member.codingstudio.id/certificate/CeBs870Gzb",
  },
  {
    title: "Fundamental Data Science",
    issuer: "Coding Studio",
    date: "2025",
    image: fundamentalDataScience,
    credentialUrl: "https://member.codingstudio.id/certificate/ZWxqN6jB6y",
  },
  {
    title: "Data Science Intermediate",
    issuer: "Coding Studio",
    date: "2025",
    image: dataScienceIntermediate,
    credentialUrl: "https://member.codingstudio.id/certificate/LokhcoReiw",
  },
  {
    title: "Visualisasi Data",
    issuer: "Dicoding",
    date: "2025",
    image: visualisiData,
    credentialUrl: "https://www.dicoding.com/certificates/07Z6378LYZQR",
  },
];


export const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Performed EDA and derived business insights on the Telco Customer Churn dataset of 7,000+ customers. Trained Random Forest Classifier and Logistic Regression models.",
    tech: ["Python", "Machine Learning", "EDA"],
    date: "November 2025",
    github: "https://github.com/hikambdwh/customer_churn",
    image: customerChurn,
  },
  {
    title: "Video Game Sales – Dashboard & Predictive Analytics",
    description:
      "Performed data cleaning and EDA to understand sales distribution, outliers, and trends. Designed interactive dashboards using Streamlit and Tableau.",
    tech: ["Python", "Streamlit", "Tableau"],
    date: "October 2025",
    github: "https://github.com/hikambdwh/video_games_sales",
    image: vgsales,
  },
  {
    title: "Expert System for Malaria Detection",
    description:
      "Built a web-based expert system with Python Flask backend. Implemented certainty factor method for diagnostic confidence.",
    tech: ["HTML", "CSS", "JavaScript", "Flask"],
    date: "July 2025",
    github: "https://github.com/hikambdwh/Sistem-Pakar",
    image: expertSystem,
  },
  {
    title: "Landing Page Ekraf Purwakarta",
    description:
      "Develop a landing page website for the Purwakarta Creative Economy Committee using HTML, CSS, JavaScript, and the Tailwind framework for front-end design.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    date: "July 2025",
    github: "https://github.com/hikambdwh/website-ekraf-1",
    image: landingPage,
  },
  {
    title: "Plant Watering System",
    description:
      "Develop an IoT system that can automatically water plants based on the soil moisture level or pH value detected in the soil. The system uses an ESP8266 as the microcontroller and a 5V DC pump as the actuator, with a motor driver to control the pump speed.",
    tech: ["ESP8266", "PYQT", "Hardware", "Electrical Wiring"],
    date: "July 2025",
    github: "#",
    image: plantWatering,
  },
  {
    title: "CLI AI Agent: Smart Folder Sorter + PDF Summarizer",
    description:
      "I built a CLI-based AI Agent in Python to automate file and document workflows. The app can tidy up an assignment/work folder by sorting files into categories (Word, Worksheet, PDF, Image), and it also includes a PDF Summarizer that extracts text from PDFs and generates summaries using an LLM via the OpenRouter API.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    date: "July 2025",
    github:
      "https://github.com/hikambdwh/CLI-AI-Agent-Smart-Folder-Sorter-PDF-Summarizer",
    image: agentAi,
  },
];
