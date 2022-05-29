// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Adarsha",
  middleName: "",
  lastName: "Nepal",
  message: "Tech enthusiast with a passion for everything tech. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/adars47",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/adars47",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/adars47/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/adarsha-nepal-9021bb160",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/adarsha.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/adarsha.png"),
  imageSize: 375,
  message:
    "Hello, my name is Adarsha Nepal. I graduated from Tribhuwan University with a degree in Information Management. I work as a backend-engineer but find myself to be equally involved in DEVOPS. My hobbies include tinkering with IOT devices and working on my automation projects.",
  resume: "https://drive.google.com/file/d/1xu6ARJnSZLTLoB982joM0e0KrVO5C5Ii/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "adars47", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/adarsha.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/adarsha.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "PHP", value: 100 },
    { name: "SQL", value: 100 },
    { name: "Data Structures", value: 85 },
    { name: "AWS and Terraform", value: 80 },
    { name: "Serverless", value: 80 },
    { name: "No-Sql databases", value: 75 },
    { name: "Networking and protocols", value: 80 },
    { name: "Node JS", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 100 },
    { name: "Collaboration", value: 90 },
    { name: "Focused", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "perseverance", value: 90 }
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you feel like you have a opportunity which i would be perfect for. Leave me a message.",
  email: "adars.nepal@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Back-End Engineer',// Here Add Company Name
      companylogo: require('../assets/img/tekkon.jpg'),
      date: 'SEPT 2019 – OCT 2020'
    },
    {
      role: 'Back-End Engineer',
      companylogo: require('../assets/img/fritsgo.png'),
      date: 'OCT 2020 – Present'    
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };