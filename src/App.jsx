import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import digitalPortrait from "./assets/digitalPortrait.png";
import touring from "./assets/touring.png";
import dog from "./assets/dog.png";

export function App() {
  const projects = [
    {
      title: "Welcome",
      image: digitalPortrait,
      links: [
        {
          url: "linkedin.com/in/bencodes-au/",
          label: "LinkedIn",
          iconName: "linkedIn",
        },
        {
          url: "https://github.com/bencodes-au",
          label: "Github",
          iconName: "github",
        },
      ],
      description:
        "Hi! I'm Ben. I'm a software developer based in Melbourne. This is a snapshot of my journey so far. I'm new in the industry and looking to network. Find me here:",
    },
    {
      title: "About Me",
      image: dog,
      // links: [{ url: "#", label: "Link 2" }],
      description:
        "I started my coding journey because I love seeing my ideas come to life. I am currently finishing my Diploma of Web Development at Coder Academy. When I'm not coding I spend my time playing music, creatively writing, tabletop gaming and chasing my dog around.",
    },
    {
      title: "Tech Skills",
      image: digitalPortrait,
      links: [
        {
          url: "https://github.com/bencodes-au/",
          label: "Check Out My Work",
          iconName: "github",
        },
      ],
      description:
        "I have experience working with Javascript, React, Express, Python, Flask, PostgreSQL, MongoDB and others. I am currently bouncing between projects trying to find what I like most, but tech is an infinite well of possibilites, and I've got lots left to try.",
    },
    {
      title: "Contact Me",
      image: digitalPortrait,
      links: [
        {
          url: "linkedin.com/in/bencodes-au/",
          label: "LinkedIn",
          iconName: "linkedIn",
        },
        {
          url: "https://github.com/bencodes-au",
          label: "Github",
          iconName: "github",
        },
      ],
      description:
        "I'm avalaible on any of these platforms. If you're here for a career opportunity in Melbourne, I'm looking right now. I'd love to hear from you:",
    },
    {
      title: "bencodes.au",
      image: digitalPortrait,
      links: [
        {
          url: "https://github.com/bencodes-au/personal-site",
          label: "bencodes.au",
          iconName: "github",
        },
      ],
      description:
        "Like what you see? Feel free to take a look under the hood. My favourite work flow right now involves JS, React, TailwindCSS and DaisyUI which this is built in. I've been limit testing React to get my head around Front End Development.",
    },
    {
      title: "Touring Artist",
      image: touring,
      links: [
        {
          url: "https://touringartist.netlify.app/",
          label: "Touring Artist",
          iconName: "guitar",
        },
        {
          url: "https://github.com/bencodes-au/Touring-Artist-Front-End",
          label: "Front End",
          iconName: "github",
        },
        {
          url: "https://github.com/bencodes-au/Touring-Artist-Back-End",
          label: "Back End",
          iconName: "github",
        },
      ],
      description:
        "Touring Artist is a booking app for artists looking for music venues. It is a Full Stack MERN project.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Grid Layout with Cards */}
      <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto gap-4 w-full px-4 sm:px-8 xl:px-16 pt-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            links={project.links}
          >
            {project.description}
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}
