import { motion } from "framer-motion";

const techStack = [
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "JWT Auth",
  "Framer Motion",
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
        I'm Elshid, a passionate full-stack web developer based in the Philippines.
        I started my journey in tech from the IT support world, where I learned the value
        of solving real problems, staying patient under pressure, and delivering reliable solutions.
      </p>

      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
        Today, I focus on building clean, responsive, and scalable applications using modern
        web technologies like{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">React</span>,{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">Node.js</span>,{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">PostgreSQL</span>, and{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">Tailwind CSS</span>.
      </p>

      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
        My mission is to turn ideas into intuitive user experiences. Whether it's a dashboard,
        a booking system, or a personal catalog site — I love building tools that work and feel good to use.
        I’m always learning, always improving.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech, index) => (
          <motion.span
            key={tech}
            className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white rounded-full shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
