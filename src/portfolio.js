/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Rachit Pandey",
  title: "Hi all, I'm Rachit",
  subTitle: emoji(
    "A passionate Mechanical Engineer who thinks in terms of machines & acts on stocks.🚀"
  ),
  resumeLink: "https://",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //github: "https://github.com/drakosi99",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "rachitmic@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/rachit_p/",
  //twitter: "https://twitter.com/davidrakosi_",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Explore. Ideate. Innovate. Execute!",
  skills: [
    emoji(
      "⚡   Design & Modelling: Auto-CAD, Solid works, PLM Catia, IDEF0, IDEF3, Revit, Solid Edge (Sheet Metal, Die Casting,),Dynare"
    ),
    emoji(
      "⚡   Data Analysis & Visualization: Excel (VBA, macros, etc.), Python, ANSYS, MATLAB."
    ),
    emoji("⚡   Others: MS Office (PowerPoint, Word, Excel), MS Project, C++"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AutoCad",
      fontAwesomeClassname: "fas fa-car",
    },
    {
      skillName: "SolidWorks",
      fontAwesomeClassname: "fas fa-bezier-curve",
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "fab fa-atlassian",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dayananda Sagar College of Engineering",
      logo: require("./assets/images/collegeLogo.jpg"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "August 2012 - May 2017",
      //desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Design of Machine Elements",
        "Control Engineering",
        "Production & Inventory Control and Rapid Prototyping",
      ],
    },
    {
      schoolName: "Mont Fort College",
      logo: require("./assets/images/mont.jpg"),
      subHeader: "Graduation School",
      duration: "August 2010 - May 2012",
      //desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Statistical Methods & Research Methodology",
        "Engineering Mechanics",
        "Work Study & Ergonomics",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Precision",
      progressPercentage: "70%",
    },
    {
      Stack: "Innovation",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Control Engineering Intern",
      company: "Indian Space Research Organization (ISTRAC)",
      companylogo: require("./assets/images/isro.png"),
      date: "July 2016 – August 2016",
      //desc: "Changing lives",
      descBullets: [
        "Developed Control System for bi-axial antenna used in telemetry and tracking. (Tools used: Simulink, MATLAB.)",
        "Load-Stress-mapping upon intricate parts on antenna mount. (Tools: Catia, ANSYS)",
        "Documented survey information and organized data for review by senior engineers. (Telemetry data acquisition)",
      ],
    },
    {
      role: "CAED Drafter (Freelancing)",
      company: "Hindustan Unilever",
      companylogo: require("./assets/images/unilever.jpg"),
      date: "December 2018 – February 2019",
      //desc: "Changing lives",
      descBullets: [
        "Design Implementation Prior Manufacturing",
        "Drafting Part design",
        "Saved 1000$ by implementing cost-saving initiatives that addressed long-standing problems",
      ],
    },
    {
      role: "Engineering Co-Op",
      company: "Bhilai Steel Plant, Steel Authority of India Pvt Ltd",
      companylogo: require("./assets/images/bhilai.jpg"),
      date: "December 2018 – February 2019",
      //desc: "Changing lives",
      descBullets: [
        "Coordinated dis-assembly & WIP stock availability for all three shifts, minimizing the start-up time loss by 85%",
        "Inspection of Cranes according to (IS – 3177) for load capacity and fatigue strength calculations",
        "Analysed processes and implemented 12 Kaizen measures which led to a 7% increase in workforce productivity",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Project Work",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/simulink.jpeg"),
      projectName: "Development of Antenna Control System",
      projectDesc:
        "Designed a Simulink Model for ISRO required by satellite telemetry tracking. Assigning function values to reduce error. Open & closed feedback loop. Servo motor control through PID.",
      footerLink: [
        {
          name: "Tools used: MATLAB, Simulink.",
          url: "fa",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/solidworks.png"),
      projectName: "Design and Fabrication of Remote Operated Hydraulic Jack",
      projectDesc:
        "Design Modelling with SOLIDWORK, Load calculation (Capacity 7400lb) through ANSYS.",
      footerLink: [
        {
          name: "Tool used: SolidWorks, ANSYS etc",
          url: "",
        },
      ],
    },
    {
      image: require("./assets/images/autocad.png"),
      projectName: "Design Improvement of Compressing Unit",
      projectDesc:
        "Generated 3D Model form given AutoCAD blueprint, ran optimization model in ANSYS for viscid fluid (various meshing techniques used). Noted Notch Coefficient for improvement iterations for further use in future.",
      footerLink: [
        {
          name: "Tool used: Solidworks, AutoCAD.",
          url: "",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Marketing & Business Work"),
  subtitle: "",
  achievementsCards: [
    {
      title: "STAPLES Inc.",
      subtitle: `• Cultivated and maintained strategic alliances with key partners and vendors \n 
       \n • Used consultative sales approach to understand customer needs and recommend relevant offerings. \n`,
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Improved Strategies",
          url: "",
        },
      ],
    },
    {
      title: "Food Business Co-owner",
      subtitle:
        "• Established revenue generative model based on relationship with various hostel owner",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "Supply Chain establishment",
          url: "",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Achievements & Responsibilites",
  subtitle: "",
  blogs: [
    {
      url: "",
      title: "Award",
      description:
        "Leadership award by Centre of Innovative Learning (CIL) based on work as Management head of student body association",
    },
    {
      url: "",
      title: "Management",
      description:
        "Managed seasonal events and programmes ranging from senior farewell, graduation ceremony, And our annual Mechanical department varsity event TORQUE, now APOGEE. ",
    },
    {
      url: "",
      title: "Team Management",
      description:
        "Team Management Skills in Resource management based on tight budgeting of events.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  subtitle: "Cary, NC-27511",
  number: "(919) 434 9665",
  email_address: "rachitmic@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
