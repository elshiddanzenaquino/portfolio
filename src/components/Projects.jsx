import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import hrisLogo from "../assets/hris-login.png";
import akibookLogo from "../assets/Aki_books.PNG";
import expensesLogo from "../assets/expenses-tracker.PNG";


const projects = [
  {
    title: "HRIS Web App",
    desc: "Employee management system with login, attendance, leave, and payroll.",
    live: "https://hris-frontend-five.vercel.app/",
    code: "https://github.com/elshiddanzenaquino/hris-frontend",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: hrisLogo,
  },
  {
    title: "Book Showcase Site",
    desc: "Catalog website for promoting books with FB link per book.",
    live: "https://aki-s-little-corner.vercel.app/",
    code: "https://github.com/elshiddanzenaquino/aki-s-little-corner",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: akibookLogo,
  },
  {
    title: "Expense Tracker App",
    desc: "Track daily expenses with category filters and charts.",
    live: "https://new-expenses-tracker.vercel.app/",
    code: "https://github.com/elshiddanzenaquino/new-expenses-tracker",
    tech: ["React", "Chart.js","Tailwind CSS"],
    image: expensesLogo,
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        🛠 Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover"
            />

            <div className="p-5 flex flex-col justify-between h-[230px]">
              <div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                  rel="noreferrer"
                >
                  Live <ExternalLink className="ml-1 w-4 h-4" />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="text-zinc-600 dark:text-zinc-300 hover:underline"
                  rel="noreferrer"
                >
                  Code →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
