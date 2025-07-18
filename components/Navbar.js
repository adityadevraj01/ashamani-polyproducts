// // "use client";

// // import Link from "next/link";
// // import { Menu } from "@headlessui/react";

// // export default function Navbar() {
// //   return (
// //     <nav className="flex justify-between items-center bg-green-900/70 backdrop-blur text-white px-8 py-4 shadow-lg fixed w-full top-0 z-50">

// //     <Link href="/" className="text-2xl font-bold">Ashamani Polyproducts</Link>

// //       <div className="flex items-center gap-6">
// //         <Link href="/" className="hover:underline">Home</Link>

// //         {/* Product Dropdown */}
// //         <Menu as="div" className="relative">
// //           <Menu.Button className="hover:underline">Products</Menu.Button>
// //           <Menu.Items className="absolute mt-2 w-48 bg-white text-green-900 border border-green-200 rounded shadow-lg z-50">
// //             <div className="p-1">
// //               <Menu.Item>
// //                 {({ active }) => (
// //                   <Link
// //                     href="/products#industrial"
// //                     className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
// //                       }`}
// //                   >
// //                     Industrial
// //                   </Link>
// //                 )}
// //               </Menu.Item>
// //               <Menu.Item>
// //                 {({ active }) => (
// //                   <Link
// //                     href="/products#domestic"
// //                     className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
// //                       }`}
// //                   >
// //                     Domestic
// //                   </Link>
// //                 )}
// //               </Menu.Item>
// //               <Menu.Item>
// //                 {({ active }) => (
// //                   <Link
// //                     href="/products#agricultural"
// //                     className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
// //                       }`}
// //                   >
// //                     Agricultural
// //                   </Link>
// //                 )}
// //               </Menu.Item>
// //               <Menu.Item>
// //                 {({ active }) => (
// //                   <Link
// //                     href="/products#customised"
// //                     className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
// //                       }`}
// //                   >
// //                     Customised
// //                   </Link>
// //                 )}
// //               </Menu.Item>
// //             </div>
// //           </Menu.Items>
// //         </Menu>

// //         <Link href="/about" className="hover:underline">About Us</Link>
// //         <Link href="/events" className="hover:underline">Events</Link>

// //         <Link href="/machineries" className="hover:underline">
// //           Machineries
// //         </Link>

// //       </div>
// //     </nav>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-green-900/70 backdrop-blur text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
//       <div className="flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold">
//           Ashamani Polyproducts
//         </Link>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <XMarkIcon className="h-6 w-6 text-white" />
//             ) : (
//               <Bars3Icon className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link href="/" className="hover:underline">Home</Link>

//           <Menu as="div" className="relative">
//             <Menu.Button className="hover:underline">Products</Menu.Button>
//             <Menu.Items className="absolute mt-2 w-48 bg-white text-green-900 border border-green-200 rounded shadow-lg z-50">
//               <div className="p-1">
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link href="/products#industrial" className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""}`}>
//                       Industrial
//                     </Link>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link href="/products#domestic" className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""}`}>
//                       Domestic
//                     </Link>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link href="/products#agricultural" className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""}`}>
//                       Agricultural
//                     </Link>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link href="/products#customised" className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""}`}>
//                       Customised
//                     </Link>
//                   )}
//                 </Menu.Item>
//               </div>
//             </Menu.Items>
//           </Menu>

//           <Link href="/about" className="hover:underline">About Us</Link>
//           <Link href="/events" className="hover:underline">Events</Link>
//           <Link href="/machineries" className="hover:underline">Machineries</Link>
//         </div>
//       </div>

//       {/* Mobile Menu Links */}
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-2">
//           <Link href="/" className="block hover:underline">Home</Link>
//           <Link href="/products#industrial" className="block hover:underline">Industrial</Link>
//           <Link href="/products#domestic" className="block hover:underline">Domestic</Link>
//           <Link href="/products#agricultural" className="block hover:underline">Agricultural</Link>
//           <Link href="/products#customised" className="block hover:underline">Customised</Link>
//           <Link href="/about" className="block hover:underline">About Us</Link>
//           <Link href="/events" className="block hover:underline">Events</Link>
//           <Link href="/machineries" className="block hover:underline">Machineries</Link>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

export default function Navbar() {
  // Define products per category
  const productMap = {
    "Agricultural Use": ["Jumbo bags","Sponge iron bags","Mineral bags","Animal feed bags","Manure bags"],
    "Industrial Use": ["Manure packing bags","Paddy bags","Cereal bags","Pond-liner"],
    "Domestic Use": ["Tarpauline", "Plantation Bags"],
    "Special Products":["Jumbo Bags","Pond Liner"],
    
  };

  return (
    <nav className="flex justify-between items-center bg-green-900/70 backdrop-blur text-white px-8 py-4 shadow-lg fixed w-full top-0 z-50">
      <Link href="/" className="text-2xl font-bond">
        Ashamani Polyproducts Pvt. Ltd.
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        {/* Products Dropdown */}
        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <Menu.Button className="hover:underline">Products</Menu.Button>
              <Menu.Items className="absolute mt-2 w-60 bg-white text-green-900 border border-green-200 rounded shadow-lg z-50 p-2">
                {Object.keys(productMap).map((category) => (
                  <Menu.Item key={category} as={Fragment}>
                    {({ active }) => (
                      <div className="group relative">
                        <Link
                          href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""}`}
                        >
                          {category}
                        </Link>

                        {/* Submenu for each category */}
                        <div className="absolute left-full top-0 mt-0 ml-2 hidden group-hover:block w-48 bg-white border border-green-200 rounded shadow-md z-50">
                          <div className="p-2">
                            {productMap[category].map((product, index) => (
                              <div
                                key={index}
                                className="px-4 py-1 text-sm text-green-800 whitespace-nowrap"
                              >
                                {product}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </>
          )}
        </Menu>

        <Link href="/about" className="hover:underline">
          About Us
        </Link>
        <Link href="/events" className="hover:underline">
          Events
        </Link>
        <Link href="/machineries" className="hover:underline">
          Infrastructure
        </Link>
      </div>
    </nav>
  );
}
