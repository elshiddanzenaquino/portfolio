import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Adventure Book 1",
    author: "Jane Doe",
    description: "A thrilling story of courage and discovery.",
    image: "https://source.unsplash.com/400x500/?book,adventure",
    link: "https://facebook.com/yourbookpage",
    featured: true,
  },
  {
    id: 2,
    title: "Mystery Novel",
    author: "John Smith",
    description: "Unravel the secrets in this gripping mystery tale.",
    image: "https://source.unsplash.com/400x500/?book,mystery",
    link: "https://facebook.com/yourbookpage",
    featured: false,
  },
  {
    id: 3,
    title: "Children's Story",
    author: "Ella Bright",
    description: "A fun and colorful journey for young readers.",
    image: "https://source.unsplash.com/400x500/?book,children",
    link: "https://facebook.com/yourbookpage",
    featured: false,
  },
];

const BookShowcase = () => {
  return (
    <section className="min-h-screen py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        📚 Bookstore Catalog
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            className="relative bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {book.featured && (
              <span className="absolute top-3 left-3 z-10 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded shadow">
                🌟 Featured
              </span>
            )}
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-[300px] object-cover rounded-t-xl"
            />
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-zinc-500">by {book.author}</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 line-clamp-3">
                {book.description}
              </p>
              <a
                href={book.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View on Facebook <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BookShowcase;
