// "use client";
// import { Menu } from "@headlessui/react";
// import { useState, useEffect } from "react";

// export default function HeroBanner() {
//   const images = [
//     "/images/hero-bg.jpg",
//     // "/images/hero-bg2.jpg",
//     // "/images/hero-bg3.jpg",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex 
//       );
//     }, 3500); // Change image every 3.5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//  <div
//   className="relative h-[450px] bg-center bg-cover flex items-center justify-center transition-all duration-1000 ease-in-out"
//   style={{ backgroundImage: `url('${images[currentImage]}')` }}
// >
//     <div className="absolute inset-0 bg-green-400 opacity-40 mix-blend-multiply transition-opacity duration-700"></div>

//   <div className="relative z-10 text-center px-4">
//     <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
//       Eco-Friendly Plastic Bags
//     </h1>
//     <p className="text-lg text-green-100 max-w-xl mx-auto mb-6">
//       Sustainable handowen plastic that naturally degrade.
//     </p>

//     {/* Contact Now Dropdown */}
//     <Menu as="div" className="relative inline-block text-left">
//       <Menu.Button className="flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg">
//         📞 Contact Now
//       </Menu.Button>

//     <Menu.Items className="fixed-menu mt-3 w-56 origin-top bg-white border border-green-200 rounded-lg shadow-lg focus:outline-none right-0">
//         <div className="p-2">
//           <Menu.Item>
//             {({ active }) => (
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("enquiry-form")
//                     .scrollIntoView({ behavior: "smooth" })
//                 }
//                 className={`${active ? "bg-green-100" : ""
//                   } w-full text-left px-4 py-2 rounded text-green-800 font-medium`}
//               >
//                 📑 Fill Enquiry Form/Whatsapp Us
//               </button>
//             )}
//           </Menu.Item>
//           <Menu.Item>
//             {({ active }) => (
//               <a
//                 href="/staff-contacts"
//                 className={`${active ? "bg-green-100" : ""
//                   } w-full text-left px-4 py-2 block rounded text-green-800 font-medium`}
//               >
//                 📞Call Us
//               </a>
//             )}
//           </Menu.Item>
//         </div>
//       </Menu.Items>
//     </Menu>
//   </div>
// </div>

//   );
// }
"use client";
import { Menu } from "@headlessui/react";

export default function HeroBanner() {
  return (
    <div
      className="relative h-[450px] bg-center bg-cover flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: "url('/images/mithi3.jpeg')" }}
    >
      <div className="absolute inset-0 bg-green-400 opacity-40 mix-blend-multiply transition-opacity duration-700"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
          Eco-Friendly Plastic Bags
        </h1>
        <p className="text-lg text-green-100 max-w-xl mx-auto mb-6">
          Sustainable handowen plastic that naturally degrade.
        </p>

        {/* Contact Now Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg">
            📞 Contact Now
          </Menu.Button>

          <Menu.Items className="fixed-menu mt-3 w-56 origin-top bg-white border border-green-200 rounded-lg shadow-lg focus:outline-none right-0">
            <div className="p-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() =>
                      document
                        .getElementById("enquiry-form")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className={`${
                      active ? "bg-green-100" : ""
                    } w-full text-left px-4 py-2 rounded text-green-800 font-medium`}
                  >
                    📑 Fill Enquiry Form/Whatsapp Us
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/staff-contacts"
                    className={`${
                      active ? "bg-green-100" : ""
                    } w-full text-left px-4 py-2 block rounded text-green-800 font-medium`}
                  >
                    📞Call Us
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
