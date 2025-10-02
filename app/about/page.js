// "use client";

// import Navbar from "../../components/Navbar";
// import Image from "next/image";
// import Footer from "../../components/Footer";

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 bg-black text-white px-6">
//         {/* Company About Section */}
//         <section className="max-w-5xl mx-auto text-center mb-20">
//           <h1 className="text-4xl font-bold text-yellow-400 mb-4">About Us</h1>
//           <p className="text-lg leading-relaxed text-gray-300">
//             Ashamani Polyproducts Pvt. Ltd. began its journey in Balasore, Odisha with a commitment to revolutionize the plastic industry through sustainability. 
//             From humble beginnings with a small setup, we&apos;ve grown into a fully equipped factory employing over 600 skilled professionals.
//             Over the years, our dedication to eco-friendly innovation, customer trust, and quality manufacturing has made us a leading name in degradable plastic packaging.
//           </p>
//         </section>

//         {/* Our Story */}
//         <section className="bg-gray-900 text-center rounded-xl p-10 mb-16">
//           <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Story</h2>
//           <p className="text-gray-300 max-w-3xl mx-auto text-lg">
//             Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we&apos;ve expanded 
//             our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
//             us a proud contributor to environmental conservation.
//           </p>
//         </section>

//         {/* MD Message Section */}
//         <section className="bg-green-700 rounded-xl py-16 px-4 md:px-12">
//           <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
//             <div>
//               <Image
//                 src="/images/md.jpeg"
//                 alt="Managing Director"
//                 width={300}
//                 height={300}
//                 className="rounded-full object-cover mx-auto shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-semibold text-yellow-400 mb-4 text-center md:text-left">
//                 Managing Director&apos;s Message
//               </h2>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 “At Ashamani Polyproducts, our vision has always been clear — to lead with responsibility and produce plastic that respects nature. 
//                 We take immense pride in building an industry that thrives on sustainability while empowering our workers and communities.”
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className="bg-black text-white py-16">
//           <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Our Values</h2>
//           <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
//             <div>
//               <h4 className="text-xl font-bold text-white mb-2">Sustainability</h4>
//               <p className="text-gray-300">
//                 All our products are designed to degrade naturally, protecting the environment.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
//               <p className="text-gray-300">
//                 We invest in advanced machinery and methods to ensure top quality and productivity.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-xl font-bold text-white mb-2">Integrity</h4>
//               <p className="text-gray-300">
//                 We prioritize transparency and trust in all our partnerships and operations.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }
// app/about/page.js
"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black text-white">
        <section className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-yellow-400"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
            {...fadeUp}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mt-4"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
          >
            Building eco‑friendly plastics with precision engineering and a people‑first mindset—born in Balasore, Odisha, now powering customers across sectors with sustainable packaging solutions.
          </motion.p>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { k: "600+", v: "Skilled Team" },
              { k: "24/7", v: "Production Readiness" },
              { k: "3 yrs", v: "Degradable Packaging" }
            ].map((s, i) => (
              <motion.div
                key={s.v}
                className="rounded-xl bg-gray-900/60 border border-white/10 p-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="text-3xl md:text-4xl font-semibold text-yellow-400">{s.k}</div>
                <div className="text-gray-300 mt-2">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-16">
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 md:p-12"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            {...fadeIn}
          >
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4 text-center">Our Story</h2>
            <p className="text-gray-300 max-w-4xl mx-auto text-lg text-center">
              From a compact setup in Balasore to a fully equipped facility, Ashamani Polyproducts grew on the principles of sustainability, quality, and trust—serving industrial, domestic, and agricultural needs with degradable solutions that break down within 2–3 years.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { title: "Origins", desc: "Founded in Balasore with a mission to transform packaging responsibly." },
                { title: "Scale", desc: "Expanded capabilities, workforce, and sectors served with rigorous QA." },
                { title: "Today", desc: "Delivering eco‑friendly output at scale with modern machinery and skilled teams." }
              ].map((t, i) => (
                <motion.div
                  key={t.title}
                  className="rounded-xl bg-black/40 border border-white/10 p-6"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="text-yellow-400 font-semibold">{t.title}</div>
                  <div className="text-gray-300 mt-2">{t.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-16">
          <motion.div
            className="grid md:grid-cols-5 gap-10 items-center bg-green-700 rounded-2xl p-8 md:p-12"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            {...fadeIn}
          >
            <div className="md:col-span-2">
              <Image
                src="/images/md.jpeg"
                alt="Managing Director"
                width={640}
                height={640}
                className="rounded-2xl object-cover w-full h-auto shadow-xl"
                priority
              />
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-4">
                Managing Director’s Message
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                “Our vision is simple—produce plastics that respect nature while empowering the people who craft them. Sustainability, safety, and quality are non‑negotiable. We’re proud to build responsibly and serve with integrity.”
              </p>
            </div>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">
          <motion.h2
            className="text-3xl font-semibold text-yellow-400 text-center mb-10"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
            {...fadeIn}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sustainability", desc: "Products designed to degrade naturally and reduce environmental burden." },
              { title: "Innovation", desc: "Advanced machinery and methods to raise quality and efficiency." },
              { title: "Integrity", desc: "Transparency and trust across partnerships and operations." }
            ].map((v, i) => (
              <motion.div
                key={v.title}
                className="text-center rounded-2xl bg-gray-900/60 border border-white/10 p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center">
                  <div className="h-5 w-5 bg-yellow-400 rounded" />
                </div>
                <h4 className="text-xl font-bold text-white">{v.title}</h4>
                <p className="text-gray-300 mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
