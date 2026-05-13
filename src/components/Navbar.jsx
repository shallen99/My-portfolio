import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Mantra */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Clean Code,{" "}
          <span className="text-blue-600 dark:text-blue-400">Clear Mind</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-3 items-center">

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 hover:scale-105 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Download CV Desktop Only */}
          <a
            href="/mwende 2.pdf"
            download
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download CV
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="md:hidden text-3xl text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5">
          <ul className="flex flex-col gap-3 bg-gray-100 dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">

            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 font-medium hover:bg-white dark:hover:bg-gray-800 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Download CV Mobile */}
            <a
              href="/mwende 2.pdf"
              download
              className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition shadow-md text-center mt-2"
            >
              Download CV
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;