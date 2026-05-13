import { motion } from "framer-motion";

import goldProjectImg from "../assets/product.jpg";

function Projects() {
  const project = {
    title: "Gold Mining Company Website",
    description:
      "A professional website built for KEM Trading, a gold mining company to showcase their operations, services, and company profile. The platform was designed to be clean, responsive, and informative for investors and clients.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: goldProjectImg,
    live: "https://trading-git-main-shallen99s-projects.vercel.app/",
    github: "https://github.com/shallen99/trading.git",
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold">
            My <span className="text-blue-600 dark:text-blue-400">Project</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A real-world project I built for a client in the mining industry.
          </p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  Live Site
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-600 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Projects Placeholder */}
        <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
          🚧 More projects coming soon as I continue building and learning.
        </div>

      </div>
    </section>
  );
}

export default Projects;