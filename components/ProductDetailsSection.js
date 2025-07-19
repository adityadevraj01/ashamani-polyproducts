// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// export default function ProductDetailsSection() {
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const products = [
//      {
//       image: "/images/granules.jpg",
//       title: "Poly Granules",
//       description: "Premium granules for high-strength packaging.",
//       price: "₹120/kg",
//       sizes: "5kg, 10kg, 25kg",
//     },
//     {
//       image: "/images/thread.jpg",
//       title: "Industrial Plastic Rolls",
//       description: "Eco-friendly rolls for heavy industries and exports.",
//       price: "₹200/kg",
//       sizes: "12m, 20m, 50m",
//     },
//     {
//       image: "/images/granules.jpg",
//       title: "Poly Granules",
//       description: "Premium granules for high-strength packaging.",
//       price: "₹120/kg",
//       sizes: "5kg, 10kg, 25kg",
//     },

//     {
//       image: "/images/domestic-bag.jpg",
//       title: "Carry Bags",
//       description: "Eco-friendly domestic shopping bags.",
//       price: "₹3/piece",
//       sizes: "S, M, L, XL",
//     },
//     {
//       image: "/images/bags.jpg",
//       title: "Export Packing Bags",
//       description: "Durable bags for commercial & export packaging.",
//       price: "₹5/piece",
//       sizes: "Medium, Large",
//     },
//   ];

//   const toggleExpand = (index) => {
//     setSelectedIndex(selectedIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-white">
//       <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Explore Our Different Categories of Products</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {products.slice(0, 3).map((product, index) => (
//           <motion.div
//             key={index}
//             layout
//             className={`relative cursor-pointer bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
//               selectedIndex === index ? "col-span-2 md:col-span-2 lg:col-span-3" : ""
//             }`}
//             onClick={() => toggleExpand(index)}
//             whileHover={{ scale: 1.03 }}
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={400}
//               height={300}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-4">
//               <h3 className="text-xl font-bold text-green-900 mb-2">{product.title}</h3>

//               <AnimatePresence>
//                 {selectedIndex === index && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="overflow-hidden"
//                   >
//                     <p className="text-green-800 mb-1">{product.description}</p>
//                     <p className="font-semibold text-green-900">Price: {product.price}</p>
//                     <p className="font-semibold text-green-900">Sizes: {product.sizes}</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Explore More Button */}
//       <div className="text-center mt-10">
//         <Link
//           href="/products"
//           className="inline-block bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
//         >
//           Explore More Products →
//         </Link>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsSection() {
  const categories = [
    {
      title: "Agricultural Use",
      image: "/images/agricultural-use.avif",
      link: "/products/agricultural-use",
      description: "Bags for seeds, fertilizers, and irrigation use.",
    },
    {
      title: "Industrial Use",
      image: "/images/industrial-use.jpg",
      link: "/products/industrial-use",
      description: "Heavy-duty bags for factories, packaging & exports.",
    },
    {
      title: "Domestic Use",
      image: "/images/domestic-use.jpg",
      link: "/products/domestic-use",
      description: "Eco-friendly carry bags for home and everyday needs.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-5xl font-serif text-green-900 mb-8 text-center">
        Explore Different Kinds Of Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <Link
            href={category.link}
            key={index}
            className="group block bg-blue-300/85 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-mono text-green-900 group-hover:text-green-800 transition">
                {category.title}
              </h3>
              <p className="text-green-700 font-sans mt-2 text-sm">{category.description}</p>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
