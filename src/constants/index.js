import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  c,
  cpp,
  python,
  nextjs,
  numpy,
  opencv,
  pandas,
  pytorch,
  tensorflow,
  huggingface,
  vscode,
  yarn,
  sevaKendra,
  kneeOsteoarthritis,
  glaucomaDetection,
  sevaKendraSystem,
} from "../assets";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
  {
    name: "Yarn",
    icon: yarn,
  },
];

const experiences = [
  {
    title: "Software Developer & UI Designer",
    company_name: "TakeIT Ideas Innovate Solution Pvt. Ltd.",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2025 - Jun 2025",
    points: [
      " Designed and developed UI for a trainer module, increasing user engagement by 20% based on client feedback.",
      " Collaborated with backend developers in an Agile environment to ensure seamless integration of UI/UX with system functionality.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Pristine IT Code",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jul 2025 - Nov 2025",
    points: [
      "•Built responsive web apps using React, HTML5, CSS3, and JavaScript with cross-browser compatibility.",
      " Integrated REST APIs and optimized load times, improving performance by 30%.",
      " Enhanced UI/UX via reusable React components and collaborated with team members using Git & Agile workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Knee Osteoarthritis Severity Detection",
    description:
      "Developed an end-to-end deep learning system using a Swin Transformer V2 to classify knee X-ray images into five severity grades (0–4).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: kneeOsteoarthritis,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI-Based Seva Kendra Form Automation System",
    description:
      "Built an AI-powered government form automation platform using OCR, multilingual speech-to-text, and intelligent field mapping to auto-fill services like Birth Certificate, Caste Certificate, and PM SVANidhi. Developed a React frontend with editable auto-filled forms and PDF generation, and a FastAPI backend to reduce manual effort and form errors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: sevaKendraSystem,
    source_code_link: "https://github.com/",
  },
  {
    name: "Glaucoma Detection Using Transformers",
    description:
      " Fine-tuned a SwinV2 Transformer on 1,000+ retinal images, achieving an AUC of 0.96 for glaucoma classification; built a Streamlit-based live diagnostic tool with OpenCV preprocessing for image normalization and resizing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: glaucomaDetection,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
