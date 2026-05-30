import img1 from "../../assets/images/img1.webp";
const heroData = {
  name: "Jawad Ghulami",
  title: "Building Scalable and Stunning Websites for Every Business",
  description:
    "Helping businesses build fast, responsive, and visually engaging websites that create better online experiences.",
  buttons: [
    { text: "My Work", href: "#portfolio", primary: true },
    { text: "Contact Me", href: "#contact", primary: false },
  ],
  socialLinks: [
    { name: "GitHub", href: "#", icon: "github" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Twitter", href: "#", icon: "twitter" },
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
  ],
  imagePath: img1,
  badges: ["React", "Tailwind CSS", "AI/ML", "Full-Stack"],
};

export default heroData;
