import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // React Icons

export const ThemeToggle = () => {
  // Check for saved theme in localStorage or detect system preference
  const savedTheme = localStorage.getItem("theme");

  // Get the system preference (dark or light) from media query
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "luxury"
    : "gorman-light";

  // Use saved theme if exists or fallback to system preference if no saved theme
  const [theme, setTheme] = useState(savedTheme || systemPreference);

  useEffect(() => {
    // Apply the theme to the document's data-theme attribute
    document.documentElement.setAttribute("data-theme", theme);

    // Save the theme to localStorage so it persists
    localStorage.setItem("theme", theme);

    // Force a reflow to ensure styles are applied correctly
    document.documentElement.offsetHeight;
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between 'luxury' (dark mode) and 'gorman-light' (light mode)
    setTheme((prevTheme) =>
      prevTheme === "luxury" ? "gorman-light" : "luxury"
    );
  };

  return (
    <button
      className="btn btn-ghost flex items-center gap-2"
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
