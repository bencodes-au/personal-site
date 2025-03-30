import { useState } from "react";

export default function FlippableCard({ title, children, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => window.innerWidth >= 1024 && setIsHovered(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setIsHovered(false)}
    >
      <div
        style={{ backgroundImage: `url(${image})` }} // Directly using the image URL here
        className={`absolute inset-0 flex flex-col justify-end bg-cover bg-center items-end shadow-lg p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-2xl font-bold p-3 bg-base-300 rounded-md">
          {title}
        </h2>
      </div>

      <div
        className={`relative transition-opacity duration-300 ${
          window.innerWidth < 1024 || isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
