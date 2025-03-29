import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <div className="sticky bg-base-300 top-0 z-10 px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">BenCodesAu</span>

        {/* Flex container for theme toggle and icons */}
        <div className="flex items-center space-x-6">
          <ThemeToggle />
          <a
            href="https://github.com/bencodes-au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/bencodes-au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
