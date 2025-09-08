import TEMPLATE_ONE_IMG from "../assets/template-one.png";
import TEMPLATE_TWO_IMG from "../assets/template-two.jpg";
import TEMPLATE_THREE_IMG from "../assets/template-three.jpg";

export const resumeTemplate = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],
    // ********************************
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    // ************************************
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4DF", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],
    // *******************************************
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "John Doe",
    designation: "Project Engineer",
    summary:
      "Passionate and results-driven developer with 3+ years of experience",
  },
  contactInfo: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    location: "#444 Somewhere, Some City, Some Country",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    website: "https://www.mywebsite.com",
  },
  workExperience: [
    {
      company: "ABC Solutions",
      role: "Project Engineer Intern",
      startDate: "2022-03",
      endDate: "2023-03",
      description:
        "Accompanying the project team to build scalable enterprse application",
    },
    {
      company: "XYZ Tech Solutions",
      role: "Project Engineer",
      startDate: "2023-15",
      endDate: "2024-20",
      description:
        "Accompanying the project team to build scalable enterprse application",
    },
  ],
  education: [
    {
      degree: "B.E in Information Science",
      institution: "ABC Institution",
      startDate: "2018-01",
      endDate: "2022-01",
    },
    {
      degree: "PCMC's",
      institution: "XYZ College",
      startDate: "2016-01",
      endDate: "2018-01",
    },
    {
      degree: "High School",
      institution: "MNC School",
      startDate: "2006-01",
      endDate: "2015-01",
    },
  ],
  skills: [
    { name: "JavaScript", progress: 95 },
    { name: "HTML", progress: 99 },
    { name: "CSS", progress: 90 },
    { name: "React", progress: 85 },
    { name: "Node.Js", progress: 70 },
  ],
  projects: [
    {
      title: "Project Manager App",
      description:
        "Built a task and project management application using the MERN stack with features like user authentication, task assignment, progress tracking, and deadline reminders. Designed an intuitive dashboard for team collaboration and integrated MongoDB for secure, role-based data management.",
      github: "https://www.github.com",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Developed a full-stack e-commerce website using the MERN stack, featuring user authentication, product catalog, shopping cart, and order management. Integrated secure payment gateway and built an admin panel for inventory and user management. Designed a responsive, user-friendly interface with React and Tailwind CSS to ensure smooth shopping experiences.",
      liveDemo: "https://www.github.com",
    },
  ],
  certifications: [
    {
      title: "Full Stack Web Developer",
      issuer: "Udemy",
      year: "2021",
    },
    {
      title: "FrontEnd Web Developer",
      issuer: "Coursera",
      year: "2022",
    },
    {
      title: "React Advanced Certificate",
      issuer: "Simplilearn",
      year: "2023",
    },
  ],
  languages: [
    { name: "English", progress: 100 },
    { name: "Spanish", progress: 80 },
    { name: "English", progress: 70 },
    { name: "English", progress: 60 },
    { name: "English", progress: 50 },
  ],
  interests: ["Reading", "Sleeping", "Gaming", "Eating"],
};
