"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-green-900 flex items-center justify-center z-[1000]"
        >
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-4">
            Welcome to Ashamani Polyproducts
            <br />
            <span className="text-green-300 text-xl block mt-4">Eco-Friendly Plastic Handowen Bags</span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
