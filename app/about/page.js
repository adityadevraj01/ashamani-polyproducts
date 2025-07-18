
// "use client";

// import Navbar from "../../components/Navbar";
// import Image from "next/image";
// import Footer from "../../components/Footer";

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />

//       {/* Company History Section */}
//       <section className="pt-24 px-6 md:px-20 pb-16 bg-white text-green-900">
//         <h1 className="text-4xl font-bold mb-8 text-center">About Ashamani Polyproducts</h1>

//         <p className="text-lg max-w-4xl mx-auto mb-6 text-center">
//           Ashamani Polyproducts Pvt. Ltd. was founded in <strong>2010</strong> with a vision to create sustainable, high-quality plastic packaging solutions. Starting with a modest setup, we have grown into a full-fledged manufacturing unit with advanced machinery and a workforce of over 600 skilled professionals.
//         </p>

//         <p className="text-lg max-w-4xl mx-auto mb-6 text-center">
//           Our journey began in Nayagarh, Odisha, where we laid the foundation of our factory. Over the years, we expanded our production capabilities, developed eco-friendly plastic that degrades within 2-3 years, and gained recognition for our contribution to environmentally responsible packaging.
//         </p>

//         <p className="text-lg max-w-4xl mx-auto text-center">
//           Today, Ashamani Polyproducts serves industrial, agricultural, and domestic sectors across India. Our commitment to innovation and sustainability continues to shape our growth.
//         </p>
//       </section>

//       {/* Managing Director's Message */}
//       <section className="px-6 md:px-20 py-16 bg-green-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <Image
//             src="/images/ed.png"
//             alt="Managing Director"
//             width={500}
//             height={500}
//             className="rounded-full shadow-lg"
//           />
//           <div>
//             <h2 className="text-3xl font-semibold text-green-900 mb-4">Managing Director's Message</h2>
//             <p className="text-green-800 text-lg leading-relaxed">
//               “At Ashamani Polyproducts, our commitment to sustainability is not just a goal — it's our identity. We began with a vision to build products that protect the environment while delivering performance. Today, we proudly offer plastic solutions that decompose naturally, serving industries without harming nature.
//               <br /><br />
//               Our people are our strength. With over 600 dedicated workers, cutting-edge equipment, and a shared purpose, we’ve built a company that stands for integrity, growth, and green innovation.”
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Other Leadership Messages */}
//       <section className="px-6 md:px-20 py-16 bg-white text-green-900">
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Executive Director */}
//           <div>
//             <Image
//               src="/images/ed.png"
//               alt="Executive Director"
//               width={400}
//               height={400}
//               className="rounded-full shadow-md mb-4"
//             />
//             <h3 className="text-2xl font-semibold mb-2">Executive Director's Message</h3>
//             <p className="text-green-800">
//               “We believe innovation and responsibility go hand in hand. At Ashamani, we are constantly exploring new technologies to reduce plastic waste, and every decision we make aims to benefit both our customers and the planet.”
//             </p>
//           </div>

//           {/* Factory Manager */}
//           <div>
//             <Image
//               src="/images/manager.jpg"
//               alt="Factory Manager"
//               width={400}
//               height={400}
//               className="rounded-xl shadow-md mb-4"
//             />
//             <h3 className="text-2xl font-semibold mb-2">Factory Manager's Message</h3>
//             <p className="text-green-800">
//               “Quality, safety, and teamwork are at the heart of our operations. Our facility runs with utmost efficiency and precision — ensuring timely delivery and consistent product standards for every client.”
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// // }
"use client";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

// export default function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-black text-white min-h-screen pt-24 px-6 md:px-20">

//         {/* About Us Section */}
//         <section className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">About Us</h1>
//           <p className="max-w-2xl mx-auto text-gray-300 text-lg">
//             Ashamani Polyproducts started its journey in 2010 with a vision to revolutionize eco-friendly plastic manufacturing in India. 
//             From a small unit to a factory with 600+ skilled workers and full automation, we’ve grown consistently by adapting to innovation 
//             and sustainability.
//           </p>
//         </section>

//         {/* Our Story */}
//         <section className="bg-gray-900 text-center rounded-xl p-10 mb-16">
//           <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Story</h2>
//           <p className="text-gray-300 max-w-3xl mx-auto text-lg">
//             Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we’ve expanded 
//             our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
//             us a proud contributor to environmental conservation.
//             Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we’ve expanded 
//             our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
//             us a proud contributor to environmental conservation.
//           </p>
//         </section>

      

//         {/* Messages */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-semibold text-yellow-400 mb-10 text-center">Leadership Messages</h2>

//           <div className="grid md:grid-cols-3 gap-10 text-center">
//             {/* MD Message */}
//             <div className="flex flex-col items-center">
//               <Image src="/images/md.jpg" alt="Managing Director" width={160} height={160} className="rounded-full shadow-md mb-4 object-cover" />
//               <h3 className="text-xl font-bold text-white mb-2">Managing Director</h3>
//               <p className="text-gray-300 px-4">
//                 “At Ashamani Polyproducts, our commitment to sustainability drives every decision. 
//                 We take pride in manufacturing environment-friendly plastic packaging that contributes to a greener tomorrow.”
//               </p>
//             </div>

//             {/* ED Message */}
//             <div className="flex flex-col items-center">
//               <Image src="/images/ed.png" alt="Executive Director" width={160} height={160} className="rounded-full shadow-md mb-4 object-cover" />
//               <h3 className="text-xl font-bold text-white mb-2">Executive Director</h3>
//               <p className="text-gray-300 px-4">
//                 “We believe innovation and responsibility go hand in hand. Our skilled team and advanced machinery ensure quality and sustainability.”
//               </p>
//             </div>

//             {/* Manager Message */}
//             <div className="flex flex-col items-center">
//               <Image src="/images/manager.jpg" alt="Manager" width={160} height={160} className="rounded-full shadow-md mb-4 object-cover" />
//               <h3 className="text-xl font-bold text-white mb-2">Manager</h3>
//               <p className="text-gray-300 px-4">
//                 “Every product reflects our dedication to quality and care. We aim to deliver excellence in every order.”
//               </p>
//             </div>
//           </div>
//         </section>

//           {/* Our Values */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold text-yellow-400 mb-10 text-center">Our Values</h2>
//           <div className="grid md:grid-cols-3 gap-10 text-center">
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-white">Sustainability</h3>
//               <p className="text-gray-300">All our products are designed to degrade naturally, protecting the environment.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-white">Innovation</h3>
//               <p className="text-gray-300">We invest in advanced machinery and methods to ensure top quality and productivity.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-white">Integrity</h3>
//               <p className="text-gray-300">We prioritize transparency and trust in all our partnerships and operations.</p>
//             </div>
//           </div>
//         </section>

//       </div>
//       <Footer />
//     </>
//   );
// }

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
            From humble beginnings with a small setup, we’ve grown into a fully equipped factory employing over 600 skilled professionals.
            Over the years, our dedication to eco-friendly innovation, customer trust, and quality manufacturing has made us a leading name in degradable plastic packaging.
          </p>
        </section>

                 {/* Our Story */}
         <section className="bg-gray-900 text-center rounded-xl p-10 mb-16">
           <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Story</h2>
           <p className="text-gray-300 max-w-3xl mx-auto text-lg">
             Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we&aposve expanded 
             our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
             us a proud contributor to environmental conservation.
             Founded in Balasore, Odisha, Ashamani Polyproducts began with a mission to offer sustainable packaging. Over the years, we&aposve expanded 
             our reach into industrial, domestic, and agricultural sectors. Our biodegradable plastic solutions decompose within 2-3 years, making 
             us a proud contributor to environmental conservation.
           </p>
       </section>

        {/* MD Message Section */}
        <section className="bg-green-700 rounded-xl py-16 px-4 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
            <div>
              <Image
                src="/images/ed.png"
                alt="Managing Director"
                width={300}
                height={300}
                className="rounded-full object-cover mx-auto shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-yellow-400 mb-4 text-center md:text-left">
                Managing Director's Message
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
