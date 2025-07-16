"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductCategorySection({ category, products = [] }) {
  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        {category}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg p-4"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <h3 className="text-2xl font-bold text-green-900 mt-4">
              {product.title}
            </h3>
            <p className="text-green-800 mt-2">{product.description}</p>
            <p className="font-semibold text-green-900 mt-1">
              Price: {product.price}
            </p>
            <p className="font-semibold text-green-900">Sizes: {product.sizes}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
