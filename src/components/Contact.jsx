import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-4 max-w-xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Let's work together or just say hi!</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:elshid@example.com" className="hover:underline">
          elshiddanzenaquino@gmail.com
        </a>
        <a href="https://www.facebook.com/elshiddanzen.aquino" target="_blank" className="hover:underline">
          Messenger
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;