// "use client";

// import Navbar from "../../components/Navbar";
// import Image from "next/image";
// import Footer from "../../components/Footer";

// export default function MachineriesPage() {
//   return (
//     <>
//       <Navbar />

//       <div className="pt-24 px-6">
//         <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Machinery Setup</h1>

//         <p className="text-green-800 mb-10 max-w-3xl mx-auto text-center text-lg">
//           Here&apos;s a look at the advanced machinery we use for transforming raw plastic materials into eco-friendly, degradable plastic packaging products.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Machine 1 */}
//           <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
//             <Image
//               src="/images/m1.jpeg"
//               alt="Granule Mixer"
//               width={500}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-green-900 mb-2">Granule Mixer</h3>
//               <p className="text-green-800 text-sm">
//                 High-speed granule mixing machine ensuring even color distribution and quality consistency.
//               </p>
//             </div>
//           </div>

//           {/* Machine 2 */}
//           <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
//             <Image
//               src="/images/m2.jpeg"
//               alt="Thread Extruder"
//               width={500}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-green-900 mb-2">Thread Extruder</h3>
//               <p className="text-green-800 text-sm">
//                 Converts granules into durable plastic threads used for weaving high-strength rolls and bags.
//               </p>
//             </div>
//           </div>

//           {/* Machine 3 */}
//           <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
//             <Image
//               src="/images/m3.jpeg"
//               alt="Bag Cutting & Sealing"
//               width={500}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-green-900 mb-2">Bag Cutting & Sealing Machine</h3>
//               <p className="text-green-800 text-sm">
//                 Fully automated bag cutting and sealing machine ensuring precise dimensions and eco-friendly material handling.
//               </p>
//             </div>
//           </div>
//           {/* Machine 4 */}
//           <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
//             <Image
//               src="/images/m4.jpeg"
//               alt="Thread Extruder"
//               width={500}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-green-900 mb-2">Thread Extruder</h3>
//               <p className="text-green-800 text-sm">
//                 Converts granules into durable plastic threads used for weaving high-strength rolls and bags.
//               </p>
//             </div>
//           </div>
//           {/* Machine 5 */}
//           <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
//             <Image
//               src="/images/m5.jpeg"
//               alt="Thread Extruder"
//               width={500}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-green-900 mb-2">Thread Extruder</h3>
//               <p className="text-green-800 text-sm">
//                 Converts granules into durable plastic threads used for weaving high-strength rolls and bags.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }
//"use client";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function MachineriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main
        className="flex-grow bg-fixed bg-center bg-cover pt-24 px-4 sm:px-6 pb-12"
        style={{ backgroundImage: 'url("/images/hero-bg3.jpg")' }}
      >
        <div className="bg-green-500/50 backdrop-md rounded-xl p-4 md:p-15 max-w-6xl mx-auto shadow-lg">
          <h1 className="text-4xl font-mono text-black mb-8 text-center">
            Our Machineries
          </h1>

          <p className="text-black mb-10 max-w-3xl mx-auto text-center text-lg">
            Here&apos;s a look at the advanced machinery we use for transforming raw plastic materials into eco-friendly, degradable plastic packaging products.
          </p>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                src: "/images/m1.jpeg",
                title: "Granule Mixer",
                desc: "High-speed granule mixing machine ensuring even color distribution and quality consistency.",
              },
              {
                src: "/images/m2.jpeg",
                title: "Thread Extruder",
                desc: "Converts granules into durable plastic threads used for weaving high-strength rolls and bags.",
              },
              {
                src: "/images/m3.jpeg",
                title: "Printing Machine",
                desc: "Fully automated bag cutting and sealing machine ensuring precise dimensions and eco-friendly material handling.",
              },
              {
                src: "/images/m4.jpeg",
                title: "Thread Extruder",
                desc: "Converts granules into durable plastic threads used for weaving high-strength rolls and bags.",
              },
              {
                src: "/images/m5.jpeg",
                title: "Thread Extruder",
                desc: "Converts granules into durable plastic threads used for weaving high-strength rolls and bags.",
              },
            ].map((machine, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all"
              >
                <Image
                  src={machine.src}
                  alt={machine.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">{machine.title}</h3>
                  <p className="text-green-800 text-sm">{machine.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
