import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-950 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
  Clean Code, <span className="text-blue-600 dark:text-blue-400">Clear Mind</span>
</h1>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-lg border border-gray-400 dark:border-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a href="/mwende 2.pdf" download
           
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;