// "use client";

// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const categories = [
//   {
//     name: "Industrial Use",
//     products: [
//       {
//         image: "/images/thread.jpg",
//         title: "Industrial Plastic Rolls",
//         description: "Durable, eco-friendly rolls for export packaging.",
//         price: "₹200/kg",
//         sizes: "12m, 20m, 50m",
//       },
//       {
//         image: "/images/granules.jpg",
//         title: "Poly Granules",
//         description: "High-quality granules for manufacturing.",
//         price: "₹120/kg",
//         sizes: "5kg, 10kg, 25kg",
//       },
//       {
//         image: "/images/thread.jpg",
//         title: "Industrial Plastic Rolls",
//         description: "Durable, eco-friendly rolls for export packaging.",
//         price: "₹200/kg",
//         sizes: "12m, 20m, 50m",
//       },
//       {
//         image: "/images/thread.jpg",
//         title: "Industrial Plastic Rolls",
//         description: "Durable, eco-friendly rolls for export packaging.",
//         price: "₹200/kg",
//         sizes: "12m, 20m, 50m",
//       },
//       {
//         image: "/images/thread.jpg",
//         title: "Industrial Plastic Rolls",
//         description: "Durable, eco-friendly rolls for export packaging.",
//         price: "₹200/kg",
//         sizes: "12m, 20m, 50m",
//       }, 
//       // Add more industrial products here
//     ],
//   },
//   {
//     name: "Domestic Use",
//     products: [
//       {
//         image: "/images/domestic-bag.jpg",
//         title: "Carry Bags",
//         description: "Lightweight carry bags for daily use.",
//         price: "₹3/piece",
//         sizes: "S, M, L, XL",
//       },
//       // Add more domestic products here
//     ],
//   },
//   {
//     name: "Agricultural Use",
//     products: [
//       {
//         image: "/images/agri-sheet.jpg",
//         title: "Greenhouse Poly Sheets",
//         description: "UV-protected sheets for agriculture.",
//         price: "₹500/sheet",
//         sizes: "20ft, 30ft, 50ft",
//       },
//       // Add more agricultural products here
//     ],
//   },
//   {
//     name: "Customised Products",
//     products: [
//       {
//         image: "/images/custom-bag.jpg",
//         title: "Custom Branded Bags",
//         description: "Tailored bags with logos and brand colors.",
//         price: "Custom Pricing",
//         sizes: "As per requirement",
//       },
//       // Add more customised products here
//     ],
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="bg-gray-100">
//       <Navbar />

//       <header className="bg-green-800 text-white py-16 text-center">
//         <h1 className="text-5xl font-bold">Our Products</h1>
//         <p className="mt-2 text-lg">Explore our diverse range of eco-friendly packaging solutions</p>
//       </header>

//       <main className="px-6 py-12 space-y-20">
//         {categories.map((category, i) => (
//           <section key={i}>
//             <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
//               {category.name}
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {category.products.map((product, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={400}
//                     height={300}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-bold text-green-900 mb-1">
//                       {product.title}
//                     </h3>
//                     <p className="text-green-800 text-sm mb-1">{product.description}</p>
//                     <p className="text-green-900 font-semibold text-sm">Price: {product.price}</p>
//                     <p className="text-green-900 font-semibold text-sm">Sizes: {product.sizes}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </main>

//       <Footer />
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const categories = [
  {
    name: "Industrial Use",
    products: [
      {
        image: "/images/thread.jpg",
        title: "Industrial Plastic Rolls",
        description: "Durable, eco-friendly rolls for export packaging.",
        price: "₹200/kg",
        sizes: "12m, 20m, 50m",
      },
      {
        image: "/images/thread.jpg",
        title: "Industrial Plastic Rolls",
        description: "Durable, eco-friendly rolls for export packaging.",
        price: "₹200/kg",
        sizes: "12m, 20m, 50m",
      },
      {
        image: "/images/thread.jpg",
        title: "Industrial Plastic Rolls",
        description: "Durable, eco-friendly rolls for export packaging.",
        price: "₹200/kg",
        sizes: "12m, 20m, 50m",
      },
      {
        image: "/images/granules.jpg",
        title: "Poly Granules",
        description: "High-quality granules for manufacturing.",
        price: "₹120/kg",
        sizes: "5kg, 10kg, 25kg",
      },
    ],
  },
  {
    name: "Domestic Use",
    products: [
      {
        image: "/images/bags.jpeg",
        title: "Carry Bags",
        description: "Lightweight carry bags for daily use.",
        price: "₹3/piece",
        sizes: "S, M, L, XL",
      },
    ],
  },
  {
    name: "Agricultural Use",
    products: [
      {
        image: "/images/bags.jpeg",
        title: "Greenhouse Poly Sheets",
        description: "UV-protected sheets for agriculture.",
        price: "₹500/sheet",
        sizes: "20ft, 30ft, 50ft",
      },
    ],
  },
  {
    name: "Customised Products",
    products: [
      {
        image: "/images/bags.jpeg",
        title: "Custom Branded Bags",
        description: "Tailored bags with logos and brand colors.",
        price: "Custom Pricing",
        sizes: "As per requirement",
      },
    ],
  },
];

// Random direction animation variants
const getDirection = () => {
  const directions = ["x", "-x", "y", "-y"];
  return directions[Math.floor(Math.random() * directions.length)];
};

const getVariants = () => {
  const dir = getDirection();
  const offset = 50;
  return {
    hidden: {
      opacity: 0,
      [dir.replace("-", "")]: dir.startsWith("-") ? -offset : offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
};

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Intro Section */}
      <section className="bg-green-800 text-white text-center py-20 px-4">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Wide Range of Products
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At Ashamani Polyproducts, we provide solutions tailored to industries, agriculture, homes, and custom needs. Quality and sustainability are at the heart of everything we offer.
        </motion.p>
      </section>

      {/* Product Sections */}
      <main className="px-6 py-16 space-y-20">
        {categories.map((category, i) => (
          <section key={i}>
            <motion.h2
              className="text-3xl font-bold text-green-800 mb-10 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {category.name}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  initial="hidden"
                  whileInView="visible"
                  variants={getVariants()}
                  viewport={{ once: true }}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-green-900 mb-1">{product.title}</h3>
                    <p className="text-green-800 text-sm mb-1">{product.description}</p>
                    <p className="text-green-900 font-semibold text-sm">Price: {product.price}</p>
                    <p className="text-green-900 font-semibold text-sm">Sizes: {product.sizes}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
