import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const savedTheme = localStorage.getItem("theme");

  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "luxury"
    : "gorman-light";

  const [theme, setTheme] = useState(savedTheme || systemPreference);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);

    document.documentElement.offsetHeight;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "luxury" ? "gorman-light" : "luxury"
    );
  };

  return (
    <button
      className="btn btn-ghost flex items-center gap-2 rounded-md"
      onClick={toggleTheme}
    >
      {theme === "gorman-light" ? (
        <FaMoon className="w-6 h-6 text-gray-700" />
      ) : (
        <FaSun className="w-6 h-6 text-yellow-400" />
      )}
      <span>{theme === "gorman-light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
};
