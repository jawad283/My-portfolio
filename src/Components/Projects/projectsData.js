// Project data - Separate from UI components
// Future customization: Add more projects by extending this array
// Future CMS/API integration: Replace this with API call to fetch projects
// Future fields: Add fields like category, date, testimonial, metrics, etc.

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration and inventory management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/ecommerce",
    featured: true,
  },
];

export default projectsData;
