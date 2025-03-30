import { useState } from "react";

export default function FlippableCard({ title, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => window.innerWidth >= 1024 && setIsHovered(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-base-300 shadow-lg p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
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
