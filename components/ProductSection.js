"use client";

import { motion } from "framer-motion";

export default function ProductSection({ image, title, description }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto text-white px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="space-y-4 md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </motion.div>
    </motion.div>
  );
}
