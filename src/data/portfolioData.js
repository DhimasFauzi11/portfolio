import {
  Brain,
  Cpu,
  Globe
} from "lucide-react";


import pestInvasion from "../assets/pest_invasion.jpg";
import pilahin from "../assets/pilahin.png";
import minatBakat from "../assets/minatbakat.png";
import converter from "../assets/mp3converter.png";
import plantWatering from "../assets/Plant-Watering-System.jpeg";
import sitbul from "../assets/sitbulweb.png";
import robotics from "../assets/Robot.jpg";
import waste from "../assets/smartwaste.jpg";

export const skills = [
  {
    category: "Front-End & Web",
    icon: Globe,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Tailwind",
      "Streamlit",
    ],
  },
  {
    category: "AI & ML",
    icon: Brain,
    items: ["EDA", "Data Cleaning", "Statistical Analysis", "Predictive Modeling"],
  },
  {
    category: "Mechatronics & IoT",
    icon: Cpu,
    items: ["C++ / Embedded C", "ESP32 / Arduino", "Robotics", "3D Modeling"],
  },
];

export const projects = [
  {
    title: "Smart Waste Monitoring",
    description:
      "IoT-based waste sorting system using inductive/capacitive sensors. Integrated Machine Learning (Random Forest) for fullness prediction and an Expert System to determine waste transport necessity.",
    tech: ["IoT", "ESP32", "Random Forest", "Fuzzy Logic", "Streamlit", "Firebase"],
    date: "November 2025",
    github: "https://github.com/DhimasFauzi11?tab=repositories",
    image: waste,
  },
  {
    title: "Line Follower and Firefighter Robot",
    description:
      "Autonomous robot powered by Arduino Uno and ESP8266. Utilizes OpenCV for advanced fire detection and PID control for precise line tracking and fan actuation.",
    tech: ["ArduinoUNO", "ESP32", "OpenCV", "Robotics", "PID"],
    date: "November 2025",
    github: "https://github.com/DhimasFauzi11?tab=repositories",
    image: robotics,
  },
  {
    title: "Situ Buleud Food Market Website",
    description:
      "Develop a digital directory for Situ Buleud Food Market using React.js and Tailwind CSS. Integrated Supabase as the backend for menu data and authentication, enabling secure CRUD operations.",
    tech: ["ReactJS", "TailwindCSS", "Supabase"],
    date: "November 2025",
    github: "https://github.com/DhimasFauzi11?tab=repositories",
    image: sitbul,
  },
  {
    title: "Identifying Students Special Interests and Talents ",
    description:
      "Implemented an expert system based on the Certainty Factor method using Python and Flask, designing system logic to calculate confidence levels of students’ interests and talents from structured user responses, and developing a simple web-based interface with HTML and CSS to display the identification results.",
    tech: ["Certainty Factor", "Expert Systems", "Python", "JSON"],
    date: "October 2025",
    github: "https://github.com/DhimasFauzi11?tab=repositories",
    image: minatBakat,
  },
  {
    title: "CHATBOT: YT to MP3 Converter",
    description:
      "Developed a CLI-based personal assistant using Python for a YouTube to MP3 converter, featuring automatic video conversion, file renaming, and saving MP3 outputs directly to the local download directory.",
    tech: ["Python", "Command Line", "API"],
    date: "July 2025",
    github: "https://github.com/DhimasFauzi11?tab=repositories",
    image: converter,
  },
  {
    title: "Pilah.In",
    description:
      "Designed a user-centered UI/UX prototype in Figma based on research findings, creating an intuitive user flow and delivering a design solution focused on improving efficiency and organization in the waste management process.",
    tech: ["Python", "Machine Learning", "EDA"],
    date: "June 2025",
    github: "https://github.com/DhimasFauzi11?tab=repositories",
    image: pilahin,
  },
  {
    title: "Smart Plant Watering System",
    description:
      "Develop an IoT system that can automatically water plants based on the soil moisture level or pH value detected in the soil. The system uses an ESP8266 as the microcontroller and a 5V DC pump as the actuator, with a motor driver to control the pump speed.",
    tech: ["ESP8266", "PYQT", "Hardware", "Electrical Wiring"],
    date: "December 2024",
    github: "#",
    image: plantWatering,
  },
  {
    title: "Pest Invasion: Plants vs Zombies",
    description:
      "Built a mini replica of the Plant vs Zombie game using Java (OOP principles). Practiced class design, inheritance, and polymorphism concepts. Designed a decoupled User Interface (UI) using FXML to separate presentation from logic.",
    tech: ["Java", "JavaFX", "FXML", "OOP", "UI/UX"],
    date: "October 2024",
    github:
      "https://github.com/DhimasFauzi11?tab=repositories",
    image: pestInvasion,
  },
];
