import { motion } from "framer-motion";
import profileImg from "../assets/african.jpeg"; 

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A little story behind the work I build and the direction I’m growing toward.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image Card */}
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative h-full"
>
  <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">

    {/* Image fills same height as right side */}
    <img
      src={profileImg}
      alt="About Me"
      className="w-full h-full object-cover"
    />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>

    {/* Card INSIDE image (no overlap outside)
    <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-xl">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Frontend Developer
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        React • Tailwind • Modern UI
      </p>
    </div> */}

  </div>

</motion.div>

          {/* Right Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              I build clean, responsive web experiences that feel simple, modern,
              and intentional.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a frontend developer with a strong interest in crafting user interfaces
              that are not only visually appealing, but also easy to use and built for real-world needs.
              I enjoy turning ideas into functional websites that communicate clearly and feel professional.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey has been shaped by hands-on learning, experimenting with design, and building
              projects that challenge me to improve. I focus mainly on <span className="font-semibold text-gray-900 dark:text-white">React</span>{" "}
              and modern styling tools like <span className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</span>{" "}
              to deliver smooth and responsive web applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Right now, I’m focused on growing into a developer who can confidently build complete
              systems from start to finish, while continuously sharpening my skills through real projects.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 hover:shadow-lg transition">
  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
    Frontend Developer
  </h4>
  <p className="text-sm text-gray-600 dark:text-gray-300">
    React • Tailwind • UI Design
  </p>
</div>
                
        

              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  1+
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Real Project Delivered
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  React
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Main Development Stack
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-md"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 dark:hover:bg-gray-900 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;