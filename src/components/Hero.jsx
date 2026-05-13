import { motion } from "framer-motion";
import profile from "../assets/me.jpg";

function Hero() {
  return (
    <section id="home" className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Shallen Mwende
            </span>
          </h2>

          <h3 className="mt-3 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Software Engineer | Frontend Web Developer
          </h3>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a passionate and dedicated software engineering enthusiast with a strong focus
            on modern web development. I specialize in building clean, responsive, and interactive
            user interfaces using <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">JavaScript</span>.
          </p>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I enjoy turning ideas into real applications that solve problems, improve user experience,
            and deliver real value. My goal is to grow into a professional full-stack developer
            while working on impactful projects.
          </p>

          <div className="mt-7 flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
  className="flex-1 flex justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <div className="relative w-full flex items-center justify-center">
    <div className="w-72 sm:w-80 md:w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600 dark:border-blue-400">
      <img
        src={profile}
        alt="Shallen Mwende"
        className="w-full h-full object-cover object-top"
      />
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}

export default Hero;