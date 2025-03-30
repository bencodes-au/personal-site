import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import FlippableCard from "./components/FlippableCard";
import digitalPortrait from "./assets/digitalPortrait.png";
import touring from "./assets/touring.png";
import dog from "./assets/dog.png";
import helloWorld from "./assets/helloWorld.png";
import door from "./assets/door.png";
import book from "./assets/book.png";
import { DisplayCard } from "./components/DisplayCard";
import { ButtonIcon } from "./components/ButtonIcon";

const projects = [
  {
    title: "Welcome",
    image: door,
    links: [
      {
        url: "https://linkedin.com/in/bencodes-au/",
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
    description:
      "I started my coding journey because I love seeing my ideas come to life. I am currently finishing my Diploma of Web Development at Coder Academy. When I'm not coding I spend my time playing music, creatively writing, tabletop gaming and chasing my dog around.",
  },
  {
    title: "Contact Me",
    image: digitalPortrait,
    links: [
      {
        url: "https://linkedin.com/in/bencodes-au/",
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
      "I'm available on any of these platforms. If you're here for a career opportunity in Melbourne, I'm looking right now. I'd love to hear from you:",
  },
  {
    title: "Tech Skills",
    image: helloWorld,
    links: [
      {
        url: "https://github.com/bencodes-au/",
        label: "My Work",
        iconName: "github",
      },
    ],
    description:
      "I have experience working with Javascript, React, Express, Python, Flask, PostgreSQL, MongoDB and others. I am currently bouncing between projects trying to find what I like most, but tech is an infinite well of possibilities, and I've got lots left to try.",
  },
  {
    title: "bencodes.au",
    image: book,
    links: [
      {
        url: "https://github.com/bencodes-au/personal-site",
        label: "bencodes.au",
        iconName: "github",
      },
    ],
    description:
      "Like what you see? Feel free to take a look under the hood. My favourite workflow right now involves JS, React, TailwindCSS and DaisyUI which this is built in. I've been limit testing React to get my head around Front End Development.",
  },
  {
    title: "Touring Artist",
    image: touring,
    links: [
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
    description: (
      <div className=" flex flex-col gap-6 items-center justify-center">
        <p>
          Touring Artist is a booking app for artists looking for music venues.
          It is a Full Stack MERN project I designed and built from scratch. The
          server and client work together without errors, it has authentication
          processes and it's styled to integrate seamlessly at all resolutions.
          I'm very proud of it.
        </p>
        <a
          href={"https://touringartist.netlify.app/"}
          target="_blank"
          className="btn btn-primary text-lg"
        >
          <ButtonIcon iconName={"guitar"} />
          See it live!
        </a>
      </div>
    ),
  },
];

export function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const updateSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Ensure tablets (even those at 1024px) show ProjectCard
  const isMobileOrTablet = screenSize <= 1080;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
        {projects.map((project, index) =>
          isMobileOrTablet ? (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              links={project.links}
            >
              {project.description}
            </ProjectCard>
          ) : (
            <FlippableCard
              key={index}
              title={project.title}
              image={project.image}
            >
              <DisplayCard
                title={project.title}
                image={<img src={project.image} alt={project.title} />}
                actions={project.links?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    className="btn btn-primary text-lg"
                  >
                    {link?.iconName && <ButtonIcon iconName={link.iconName} />}
                    {link.label}
                  </a>
                ))}
              >
                {project.description}
              </DisplayCard>
            </FlippableCard>
          )
        )}
      </div>
    </div>
  );
}
