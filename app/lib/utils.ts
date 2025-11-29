/* eslint-disable @typescript-eslint/no-unused-vars */
export const SidebarCom = [
  {
    Name: "AI",
    Value: "1",
  },
  {
    Name: "Community",
    Value: "5",
  },
  {
    Name: "Compatibiliy",
    Value: "1",
  },
  {
    Name: "CSS",
    Value: "2",
  },
  {
    Name: "Design",
    Value: "1",
  },
  {
    Name: "Framework",
    Value: "2",
  },
  {
    Name: "Git",
    Value: "1",
  },
  {
    Name: "Html",
    Value: "2",
  },
  {
    Name: "Javascript",
    Value: "3",
  },
  {
    Name: "Layout",
    Value: "3",
  },
  {
    Name: "Learning",
    Value: "6",
  },
  {
    Name: "Performance",
    Value: "2",
  },
  {
    Name: "Practice",
    Value: "2",
  },
  {
    Name: "Refrence",
    Value: "4",
  },
  {
    Name: "Tips",
    Value: "4",
  },
  {
    Name: "Tools",
    Value: "4",
  },
];

export type Card = {
  logo: string;
  title: string;
  url: string;
  descPoints: string[];
  views: string;
  day: string;
  date: string;
};

export const CardInfo: Card[] = [
  {
    logo: "/assets/frontendmentor.png",
    title: "Frontend Mentor",
    url: "frontendmentor.io",
    descPoints: ["Practise", "Learning", "Comunity"],
    views: "0",
    day: "Mon",
    date: "9 Feb",
  },
  {
    logo: "/assets/mdn.png",
    title: "MDN Web Docs",
    url: "developer.mozilla.org",
    descPoints: ["Refernce", "HTML", "CSS", "Javascript"],
    views: "152",
    day: "Tue",
    date: "10 Jan",
  },
  {
    logo: "/assets/R.png",
    title: "React Docs",
    url: "react.dev",
    descPoints: ["Javascript", "Framework", "Refernce"],
    views: "0",
    day: "Wed",
    date: "4 Feb",
  },
  {
    logo: "/assets/claude.png",
    title: "Claude",
    url: "Claude.ai",
    descPoints: ["Tools", "AI", "Learning"],
    views: "73",
    day: "Thu",
    date: "18 Feb",
  },
  {
    logo: "/assets/webdev.png",
    title: "Web.dev",
    url: "Web.dev",
    descPoints: ["Performance", "Learning", "Tips"],
    views: "15",
    day: "Thu",
    date: "15 Feb",
  },
  {
    logo: "/assets/tailwind.png",
    title: "Tailwind CSS",
    url: "tailwindcss.com",
    descPoints: ["CSS", "Framework", "Tools"],
    views: "52",
    day: "Fri",
    date: "12 Feb",
  },
  {
    logo: "/assets/dev.png",
    title: "Dev.to",
    url: "dev.to",
    descPoints: ["Development", "AI", "Learning"],
    views: "13",
    day: "Sat",
    date: "8 Feb",
  },
  {
    logo: "/assets/js.png",
    title: "Javascript.info",
    url: "javascript.info",
    descPoints: ["Javascript", "Learning", "Information"],
    views: "7",
    day: "Sun",
    date: "1 Feb",
  },
  {
    logo: "/assets/freeCC.png",
    title: "freeCodeCamp",
    url: "freecodecamp.org",
    descPoints: ["Projects", "Tools", "Learning"],
    views: "100",
    day: "Mon",
    date: "18 Jan",
  },
];
