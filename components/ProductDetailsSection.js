"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProductDetailsSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const products = [
     {
      image: "/images/granules.jpg",
      title: "Poly Granules",
      description: "Premium granules for high-strength packaging.",
      price: "₹120/kg",
      sizes: "5kg, 10kg, 25kg",
    },
    {
      image: "/images/thread.jpg",
      title: "Industrial Plastic Rolls",
      description: "Eco-friendly rolls for heavy industries and exports.",
      price: "₹200/kg",
      sizes: "12m, 20m, 50m",
    },
    {
      image: "/images/granules.jpg",
      title: "Poly Granules",
      description: "Premium granules for high-strength packaging.",
      price: "₹120/kg",
      sizes: "5kg, 10kg, 25kg",
    },
    
    {
      image: "/images/domestic-bag.jpg",
      title: "Carry Bags",
      description: "Eco-friendly domestic shopping bags.",
      price: "₹3/piece",
      sizes: "S, M, L, XL",
    },
    {
      image: "/images/bags.jpg",
      title: "Export Packing Bags",
      description: "Durable bags for commercial & export packaging.",
      price: "₹5/piece",
      sizes: "Medium, Large",
    },
  ];

  const toggleExpand = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.slice(0, 3).map((product, index) => (
          <motion.div
            key={index}
            layout
            className={`relative cursor-pointer bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
              selectedIndex === index ? "col-span-2 md:col-span-2 lg:col-span-3" : ""
            }`}
            onClick={() => toggleExpand(index)}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-bold text-green-900 mb-2">{product.title}</h3>

              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-green-800 mb-1">{product.description}</p>
                    <p className="font-semibold text-green-900">Price: {product.price}</p>
                    <p className="font-semibold text-green-900">Sizes: {product.sizes}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="text-center mt-10">
        <Link
          href="/products"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
        >
          Explore More Products →
        </Link>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ProductDetailsSection({ category, products = [] }) {
//   return (
//     <section className="py-16 px-6">
//       <h2 className="text-4xl font-bold text-white mb-8 text-center">
//         {category}
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: false, amount: 0.2 }}
//             className="bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg p-5"
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={400}
//               height={300}
//               className="rounded-lg object-cover"
//             />
//             <h3 className="text-2xl font-bold text-green-900 mt-4">
//               {product.title}
//             </h3>
//             <p className="text-green-800 mt-2">{product.description}</p>
//             <p className="font-semibold text-green-900 mt-1">
//               Price: {product.price}
//             </p>
//             <p className="font-semibold text-green-900">Sizes: {product.sizes}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
