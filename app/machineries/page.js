
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

/* Content data */
const intro = {
  heading: "Our Machineries",
  sub:
    "A dedicated team and precision-engineered equipment power eco‑friendly plastic manufacturing—from careful mixing to extrusion, printing, and finishing.",
  body:
    "Skilled operators, safety‑first processes, and quality controls ensure consistent results at scale. This page offers a close look at the machines used daily and short clips of them operating on the floor.",
};

const machines = [
  { src: "/images/m1.jpeg", title: "Granule Mixer", desc: "High‑speed mixing for accurate color distribution and batch consistency.", w: 1280, h: 853 },
  { src: "/images/m2.jpeg", title: "Thread Extruder", desc: "Granules to durable thread with melt and die control.", w: 1280, h: 853 },
  { src: "/images/m3.jpeg", title: "Printing Machine", desc: "Automated cutting, sealing, and eco‑ink printing for clean results.", w: 1280, h: 853 },
  { src: "/images/m4.jpeg", title: "Extruder Bay", desc: "High‑strength output supported by precise thermal profiles.", w: 1280, h: 960 },

];

const videos = [
  { src: "/videos/Thread.mp4", poster: "/images/m1.jpeg", title: "Yarn Making", desc: "The machine extrudes the molten plastic through dies to form thin, flat filaments or strands of yarn" },
  { src: "/videos/loom.mp4", poster: "/images/m2.jpeg", title: "Circular Loom", desc: "A circular loom is a specialized weaving machine designed to produce seamless tubular or circular fabrics by interlacing warp and weft yarns in a continuous loop." },
  { src: "/videos/granule.mp4", poster: "/images/m3.jpeg", title: "Extrusion Machine", desc: "Advanced extrusion technology for uniform coating, robust construction for durability, and energy-efficient designs. " },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const cardHover = "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg";

export default function Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = (img) => {
    setActiveImage(img);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setActiveImage(null), 120);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />

      <main className="flex-grow">
        {/* Intro */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
          <motion.h1
            className="text-5xl md:text-6xl font-semibold text-green-900 text-center leading-tight"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            {...fadeUp}
          >
            {intro.heading}
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto mt-4 text-center text-green-900/90"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            {...fadeUp}
          >
            {intro.sub}
          </motion.p>

          <motion.p
            className="max-w-3xl mx-auto mt-3 text-center text-green-800"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            {...fadeUp}
          >
            {intro.body}
          </motion.p>
        </section>

        {/* Machines gallery */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <motion.h2
            className="text-2xl font-semibold text-green-900 mb-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            {...fadeIn}
          >
            Machines
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {machines.map((m, i) => (
              <motion.article
                key={i}
                className={`bg-white rounded-xl overflow-hidden shadow ${cardHover} cursor-pointer group`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                onClick={() => openLightbox(m)}
              >
                <div className="aspect-video bg-black">
                  <Image
                    src={m.src}
                    alt={m.title}
                    width={m.w}
                    height={m.h}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-900">{m.title}</h3>
                  <p className="text-green-800 text-sm">{m.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <motion.h2
            className="text-2xl font-semibold text-green-900 mb-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            {...fadeIn}
          >
            Machine Videos
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <motion.article
                key={i}
                className={`bg-white rounded-xl overflow-hidden shadow ${cardHover} group`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              >
                <div className="aspect-video bg-black">
                  <video
                    className="h-full w-full object-cover"
                    src={v.src}
                    poster={v.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-900">{v.title}</h3>
                  <p className="text-green-800 text-sm">{v.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white/90 hover:text-white text-2xl"
              aria-label="Close"
            >
              ×
            </button>
            <div className="rounded-2xl overflow-hidden bg-black">
              <div className="aspect-video">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  width={1920}
                  height={1080}
                  className="h-full w-full object-contain bg-black"
                  priority
                />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold">{activeImage.title}</h3>
                <p className="opacity-90">{activeImage.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
