"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    category: "Industrial",
    image: "/images/thread.jpg",
    title: "Industrial Plastic Roll",
    description: "Durable, heavy-duty rolls for industrial use.",
  },
  {
    id: 2,
    category: "Industrial",
    image: "/images/granules.jpg",
    title: "Export Packaging Bags",
    description: "High-strength biodegradable bags for exports.",
  },
  {
    id: 3,
    category: "Industrial",
    image: "/images/bags.jpg",
    title: "Heavy Poly Sheets",
    description: "Weather-resistant poly sheets for industrial floors.",
  },
  // add more for other categories similarly
];

export default function ProductGallerySection() {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleToggle = (productId) => {
    setActiveProduct((prev) => (prev === productId ? null : productId));
  };

  const categories = ["Industrial", "Agricultural", "Domestic", "Customised"];

  return (
    <div className="py-16 px-6 bg-green-50">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
        Our Products
      </h2>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">
            {category} Products
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter((prod) => prod.category === category)
              .map((product) => (
                <div
                  key={product.id}
                  className="relative cursor-pointer"
                  onClick={() => handleToggle(product.id)}
                >
                  <motion.div
                    layout
                    className="overflow-hidden rounded-xl shadow-lg bg-white"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={350}
                      className="object-cover w-full h-48"
                    />
                    <div className="p-3">
                      <p className="font-semibold text-green-900">
                        {product.title}
                      </p>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {activeProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center justify-center z-50"
                      >
                        <h4 className="text-xl font-bold text-green-900 mb-2">
                          {product.title}
                        </h4>
                        <p className="text-green-800 mb-4 text-center">
                          {product.description}
                        </p>
                        <button
                          onClick={() => setActiveProduct(null)}
                          className="mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                        >
                          Close
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
