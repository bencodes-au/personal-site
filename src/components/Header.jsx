import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Header() {
  return (
    <div className="sticky top-0 z-10 bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">BenCodesAu</span>

        <div className="flex space-x-6">
          <a
            href="https://github.com/bencodes-au"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/bencodes-au"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
