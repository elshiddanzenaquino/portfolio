import { motion } from "framer-motion";

const projects = [
  {
    title: "HRIS Web App",
    desc: "Employee management system with login, attendance, leave, and payroll.",
    link: "#",
  },
  {
    title: "Book Showcase Site",
    desc: "Catalog website for promoting books and linking to Facebook shop.",
    link: "#",
  },
  {
    title: "Expense Tracker App",
    desc: "Track daily expenses with categories and chart visualizations.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{project.desc}</p>
            <a href={project.link} className="text-blue-600 dark:text-blue-400 underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
