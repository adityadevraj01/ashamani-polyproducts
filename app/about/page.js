"use client";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black text-white px-6">
        {/* Company About Section */}
        <section className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">About Us</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Ashamani Polyproducts Pvt. Ltd. began its journey in Balasore, Odisha with a commitment to revolutionize the plastic industry through sustainability. 
            From humble beginnings with a small setup, we&apos;ve grown into a fully equipped factory employing over 600 skilled professionals.
            Over the years, our dedication to eco-friendly innovation, customer trust, and quality manufacturing has made us a leading name in degradable plastic packaging.
          </p>
        </section>

        {/* Our Story */}
        <section className="bg-gray-900 text-center rounded-xl p-10 mb-16">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Story</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we&apos;ve expanded 
            our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
            us a proud contributor to environmental conservation.
          </p>
        </section>

        {/* MD Message Section */}
        <section className="bg-green-700 rounded-xl py-16 px-4 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
            <div>
              <Image
                src="/images/md.jpeg"
                alt="Managing Director"
                width={300}
                height={300}
                className="rounded-full object-cover mx-auto shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-yellow-400 mb-4 text-center md:text-left">
                Managing Director&apos;s Message
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                “At Ashamani Polyproducts, our vision has always been clear — to lead with responsibility and produce plastic that respects nature. 
                We take immense pride in building an industry that thrives on sustainability while empowering our workers and communities.”
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-black text-white py-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Our Values</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Sustainability</h4>
              <p className="text-gray-300">
                All our products are designed to degrade naturally, protecting the environment.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
              <p className="text-gray-300">
                We invest in advanced machinery and methods to ensure top quality and productivity.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Integrity</h4>
              <p className="text-gray-300">
                We prioritize transparency and trust in all our partnerships and operations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
//             From humble beginnings with a small setup, we&aposve grown into a fully equipped factory employing over 600 skilled professionals.
//             Over the years, our dedication to eco-friendly innovation, customer trust, and quality manufacturing has made us a leading name in degradable plastic packaging.
//           </p>
//         </section>

//                  {/* Our Story */}
//          <section className="bg-gray-900 text-center rounded-xl p-10 mb-16">
//            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Story</h2>
//            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
//              Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we&aposve expanded 
//              our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
//              us a proud contributor to environmental conservation.
//              Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we&aposve expanded 
//              our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
//              us a proud contributor to environmental conservation.
//            </p>
//        </section>

//         {/* MD Message Section */}
//         <section className="bg-green-700 rounded-xl py-16 px-4 md:px-12">
//           <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
//             <div>
//               <Image
//                 src="/images/ed.png"
//                 alt="Managing Director"
//                 width={300}
//                 height={300}
//                 className="rounded-full object-cover mx-auto shadow-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl font-semibold text-yellow-400 mb-4 text-center md:text-left">
//                 Managing Director's Message
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
