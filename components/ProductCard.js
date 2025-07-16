// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ProductCard({ image, title, description, price, sizes }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: false, amount: 0.3 }}
//       className="flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-5xl mx-auto"
//     >
//       <Image
//         src={image}
//         alt={title}
//         width={400}
//         height={300}
//         className="rounded-lg object-cover"
//       />

//       <div className="text-left">
//         <h3 className="text-2xl font-bold text-green-900 mb-2">{title}</h3>
//         <p className="text-green-800 mb-2">{description}</p>
//         <p className="font-semibold text-green-900 mb-1">Price: {price}</p>
//         <p className="font-semibold text-green-900">Sizes: {sizes}</p>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductCard({ image, title, description, price, sizes }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={220}
        className="rounded-lg object-cover mb-4"
      />

      <h3 className="text-2xl font-bold text-green-900 mb-2 text-center">{title}</h3>
      <p className="text-green-800 mb-2 text-center">{description}</p>
      <p className="font-semibold text-green-900 mb-1">Price: {price}</p>
      <p className="font-semibold text-green-900">Sizes: {sizes}</p>
    </motion.div>
  );
}
