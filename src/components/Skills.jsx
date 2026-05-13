import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Responsive Design", "Flexbox", "Grid"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Vite"],
    },
    {
      title: "Other",
      skills: ["API Integration", "Firebase Basics", "Deployment (Vercel/Netlify)"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Tools and technologies I use to build modern web experiences.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;