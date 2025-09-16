import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

import { Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rohit",
  lastName: "Pandilwar",
  name: "Rohit Pandilwar",
  role: "Software Engineer & Tech Leader",
  avatar: "/images/avatar.jpg",
  email: "rohit.pandilwarjsr@gmail.com",
  languages: ["English", "Hindi", "Marathi"],
  location: "India/Nagpur",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Weekly thoughts on tech, innovation, and unstoppable growth</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rohitpandilwar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rohit-pandilwar/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

export const Headline = {
  headline1: "Turning raw logic",
  headline2: "into unstoppable code",
};

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my journey as a ${person.role}`,
  headline: <>Turning raw logic into unstoppable code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured Projects
        </Text>
      </Row>
    ),
    href: "/work/face-recognition-attendance-system",
  },
  subline: (
    <>
      I&apos;m Rohit, a software engineer passionate about building impactful tech, leading teams, and
      creating solutions that push boundaries.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rohit is a Nagpur-based software engineer and tech leader with a strong background in
        Computer Vision, Machine Learning, and Full-Stack Development. Having organized 20+
        large-scale events, delivered live sessions to 1000+ students, and mentored hackathon teams,
        he thrives at the intersection of technology, leadership, and community building.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance & Projects",
        timeframe: "2022 - Present",
        role: "Software Developer & Mentor",
        achievements: [
          <>Built 20+ responsive websites for events, workshops, and clients.</>,
          <>Created a Face Recognition Attendance System using Python, OpenCV, and CNNs.</>,
          <>Developed a video streaming app with React, Vite, Node.js, and Tailwind CSS.</>,
        ],
        images: [],
      },
      {
        company: "Students For Development",
        timeframe: "Jan 2024 - Feb 2024",
        role: "Social Intern",
        achievements: [
          <>Contributed to the National Environment Youth Parliament with NGOs.</>,
          <>Worked on environmental awareness initiatives under &apos;Paryavaran Chetna&apos;.</>,
        ],
        images: [],
      },
      {
        company: "Smart India Hackathon 2023",
        timeframe: "2023",
        role: "Volunteer & Mentor",
        achievements: [
          <>Mentored 20+ hackathon teams and managed logistics for 2000+ participants.</>,
          <>Ensured smooth execution of technical workflows during the 48-hour hackathon.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Bachelor of Engineering",
        description: (
          <>Pursuing Computer Science and Engineering with focus on AI, Cloud, and Systems.</>
        ),
      },
      {
        name: "Google Cloud & AI Certifications",
        description: <>Completed GenAI Jam Study, Develop GenAI Apps with Gemini and Streamlit.</>,
      },
      {
        name: "IEEE Membership",
        description: (
          <>Active IEEE Member for 1+ years, contributing to community-driven projects.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Web Development",
        description: <>Building scalable apps with React, Next.js, Node.js, and Tailwind CSS.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Tailwind", icon: "tailwind" },
        ],
        images: [],
      },
      {
        title: "Artificial Intelligence & CV",
        description: <>Expertise in Computer Vision, Machine Learning, and AI-driven apps.</>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "OpenCV", icon: "opencv" },
        ],
        images: [],
      },
      {
        title: "Programming & Systems",
        description: <>Strong foundation in C++, Java, Data Structures, and Operating Systems.</>,
        tags: [
          { name: "C++", icon: "cpp" },
          { name: "Java", icon: "java" },
          { name: "DSA", icon: "code" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech, AI, and growth...",
  description: `Read what ${person.name} has been exploring recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software, AI, and web projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A collection of moments from ${person.name}'s journey`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
