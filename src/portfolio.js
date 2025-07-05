/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Ankush's Portfolio",
  description:
    "An AI & ML enthusiast passionate about building scalable and impactful solutions using data, code, and creativity.",
  og: {
    title: "Ankush Manchanda Portfolio",
    type: "website",
    url: "https://ankush-manchanda.github.io/",
  },
};

// Home Page
const greeting = {
  title: "Ankush Manchanda",
  logo_name: "AnkushManchanda\n",
  nickname: "ankush_codes\n",
  subTitle:
    "\nB.Tech CSE (AI & ML) student passionate about real-time analytics, AI projects, and full-stack web development.",
  resumeLink:
    "https://drive.google.com/file/d/17KEmqhGjSNzYb71yhncScvo0ffIcgSf4/view?usp=sharing",
  portfolio_repository: "https://github.com/ankush-manchanda",
  githubProfile: "https://github.com/ankush-manchanda",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ankush-manchanda",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ankush-manchanda-189349239",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ankushmanchanda111@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills
const skills = {
  data: [
    {
      title: "AI & Data Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Real-time object detection using YOLOv8 & OpenCV ",
        <br />,
        <br />,
        "⚡ Data analysis and visualization using Python, R, Streamlit",
        <br />,
        <br />,
        "⚡ Applied ML for analytics in retail and finance use cases",
        <br />,
        <br />,
        "⚡ Developed an AI-powered retail analytics system using YOLOv8",
        "and OpenCV for real-time customer tracking and zone-based insights",
        <br />,
        <br />,
        "⚡ Built and hosted projects using GitHub Pages, and managed workflows ",
        "via GitHub Actions",
        <br />,
        <br />,
        "⚡ Worked with tools like Jupyter Notebook, Google Colab, and VS Code for",
        "fast prototyping and collaboration",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: { color: "#FF4B4B" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "I design and develop responsive, user-friendly web applications using",
        " modern technologies. My focus is on performance, clean UI/UX, and functional backend logic.",
        <br />,
        <br />,
        "    What I’ve worked with:",
        <br />,
        <br />,

        "⚡ Frontend: HTML, CSS, JavaScript, React.js",
        <br />,
        <br />,

        "⚡ Data visualization: Streamlit, Plotly, Matplotlib",
        <br />,
        <br />,

        "⚡ Git-based deployment: GitHub Pages, GitHub Actions",
        <br />,
        <br />,

        "⚡ Created full-stack apps with real-time data, user interfaces, and analytics dashboards",
        <br />,
        <br />,
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "GitHub Pages",
          fontAwesomeClassname: "simple-icons:githubpages",
          style: { color: "#121013" },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Maharshi Dayanand University",
      subtitle: "B.Tech in Computer Science & Engineering (AI & ML)",
      logo_path: "mdu.jpeg",
      alt_name: "MDU",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studying AI, Machine Learning, and full-stack development.",
        "⚡ Participated in real-time object detection & analytics projects.",
        "⚡ Active in open-source, internship projects, and hackathons.",
      ],
      website_link: "https://mdu.ac.in/",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "AI For Industry",
      subtitle: "- IBM SkillsBuild & CSRBOX",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1nAH77exKWMuYSa5eD_wMttN209jwb_Jt/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Software Engineering Virtual Experience",
      subtitle: "- Walmart Global Tech (Forage)",
      logo_path: "walmart.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1bgOM3BpKDqgzhAMrCp48jXYuHnFAy2jO/view?usp=sharing",
      alt_name: "Walmart",
      color_code: "#FFD50099",
    },
    {
      title: "Technology Virtual Internship Program",
      subtitle: "- Citi (Forage)",
      logo_path: "citi.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/175ckRx9gOuNBSLiudXOFWfOCc4JyTvjW/view?usp=sharing",
      alt_name: "Citi",
      color_code: "#003B71",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships & Projects",
  description:
    "I've worked on multiple projects focused on computer vision, AI, and real-time analytics. I enjoy experimenting and building innovative systems that solve real-world problems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "AI & Data Analytics Intern",
          company: "IBM SkillsBuild + CSRBOX",
          company_url: "https://csrbox.org/IBM-SkillsBuild",
          logo_path: "ibm_logo.png",
          duration: "Feb 2024 - Apr 2024",
          location: "Remote",
          description:
            "Trained on AI foundations, problem-solving with data, and analytics using Python and IBM tools. Completed use-case based projects on business decision-making.",
          color: "#1F70C199",
        },
        {
          title: "Software Engineering Intern (Virtual)",
          company: "Walmart Global Tech - Forage",
          company_url:
            "https://www.theforage.com/virtual-internships/prototype/BLBQ8H7tTqBLWqAzJ/Walmart-Global-Tech-Software-Engineering-Virtual-Experience",
          logo_path: "walmart.jpeg",
          duration: "Jan 2024",
          location: "Virtual",
          description:
            "Gained exposure to backend and frontend systems at scale. Solved real-world tech problems in a simulated development environment.",
          color: "#FFD50099",
        },
        {
          title: "Technology Intern (Virtual)",
          company: "Citi - Forage",
          company_url:
            "https://www.theforage.com/virtual-internships/prototype/wmrjDty7GYM5tdTnM/Citi-Technology-Virtual-Internship-Program",
          logo_path: "citi.jpeg",
          duration: "Dec 2023",
          location: "Virtual",
          description:
            "Worked on fintech-related technology modules including APIs, security, and digital client engagement solutions.",
          color: "#003B71",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Retail Store Analytics",
          company: "Personal Project",
          company_url:
            "https://ankush-manchanda.github.io/retail-store-analysis.github.io/",
          logo_path: "project.jpeg",
          duration: "2024",
          location: "GitHub",
          description:
            "Built using YOLOv8, Streamlit, and OpenCV to detect footfall, analyze zone heatmaps, and visualize customer activity in real time.",
          color: "#00C853",
        },
      ],
    },
  ],
};

// Projects Page Header
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of the impactful projects I've built. These reflect my interests in AI, analytics, and web development.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I'm open to internship, freelance, or collaboration opportunities. Reach out to me via email or LinkedIn.",
  },
  blogSection: {
    title: "Portfolio Projects",
    subtitle: "Explore my work on GitHub and deployed pages.",
    link: "https://ankush-manchanda.github.io/retail-store-analysis.github.io/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Haryana, India",
    locality: "Rohtak",
    country: "India",
    region: "Haryana",
    postalCode: "124001",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/sKvAwkFiKFxACe5r6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+918218655631",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  contactPageData,
  projectsHeader,
};
