import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import digitalPortrait from "./assets/digitalPortrait.png";

export function App() {
  const projects = [
    {
      title: "Project One",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 1" }],
      description: "Description 1",
    },
    {
      title: "Project Two",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 2" }],
      description: "Description 2",
    },
    {
      title: "Project Three",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 3" }],
      description: "Description 3",
    },
    {
      title: "Project Four",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 4" }],
      description: "Description 4",
    },
    {
      title: "Project Five",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 5" }],
      description: "Description 5",
    },
    {
      title: "Project Six",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 6" }],
      description: "Description 6",
    },
    {
      title: "Project Seven",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 7" }],
      description: "Description 7",
    },
    {
      title: "Project Eight",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 8" }],
      description: "Description 8",
    },
    {
      title: "Project Nine",
      image: digitalPortrait,
      links: [{ url: "#", label: "Link 9" }],
      description: "Description 9",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Grid Layout with Cards */}
      <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto gap-4 w-full px-4 sm:px-8 xl:px-16 pt-4">
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
