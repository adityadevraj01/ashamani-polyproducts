// "use client";

// import Link from "next/link";
// import { Menu } from "@headlessui/react";
// import { Fragment } from "react";

// export default function Navbar() {
//   // Define products per category
//   const productMap = {
//     "Agricultural Use": ["Jumbo bags","Sponge iron bags","Mineral bags","Animal feed bags","Manure bags"],
//     "Industrial Use": ["Manure packing bags","Paddy bags","Cereal bags","Pond-liner"],
//     "Domestic Use": ["Tarpauline", "Plantation Bags"],
//     "Special Products":["Jumbo Bags","Pond Liner"],
    
//   };

//   return (
//     <nav className="flex justify-between items-center bg-green-600/70 backdrop-blur text-white px-8 py-4 shadow-lg fixed w-full top-0 z-50">
//       <Link href="/" className="text-2xl font-serif">
//         Ashamani Polyproducts Pvt. Ltd.
//       </Link>

//       <div className="flex items-center gap-6">
//         <Link href="/" className="hover:underline">
//           Home
//         </Link>

//         {/* Products Dropdown */}
//         <Menu as="div" className="relative">
//           {({ open }) => (
//             <>
//               <Menu.Button className="hover:underline">Products</Menu.Button>
//               <Menu.Items className="absolute mt-2 w-60 bg-white text-green-900 border border-green-200 rounded shadow-lg z-50 p-2">
//                 {Object.keys(productMap).map((category) => (
//                   <Menu.Item key={category} as={Fragment}>
//                     {({ active }) => (
//                       <div className="group relative">
//                         <Link
//                           href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
//                           className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""}`}
//                         >
//                           {category}
//                         </Link>

//                         {/* Submenu for each category */}
//                         <div className="absolute left-full top-0 mt-0 ml-2 hidden group-hover:block w-48 bg-white border border-green-200 rounded shadow-md z-50">
//                           <div className="p-2">
//                             {productMap[category].map((product, index) => (
//                               <div
//                                 key={index}
//                                 className="px-4 py-1 text-sm text-green-800 whitespace-nowrap"
//                               >
//                                 {product}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </Menu.Item>
//                 ))}
//               </Menu.Items>
//             </>
//           )}
//         </Menu>

//         <Link href="/about" className="hover:underline">
//           About Us
//         </Link>
//         <Link href="/staff-contacts" className="hover:underline">
//           Contact Us
//         </Link>
//         <Link href="/machineries" className="hover:underline">
//           Infrastructure
//         </Link>
//       </div>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const productMap = {
    "Agricultural Use": ["Jumbo bags", "Sponge iron bags", "Mineral bags", "Animal feed bags", "Manure bags"],
    "Industrial Use": ["Manure packing bags", "Paddy bags", "Cereal bags", "Pond-liner"],
    "Domestic Use": ["Tarpauline", "Plantation Bags"],
    "Special Products": ["Jumbo Bags", "Pond Liner"],
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-green-600/85 backdrop-blur text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
        <Link href="/" className="text-2xl font-serif">
          Ashamani Polyproducts Pvt. Ltd.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:underline">Home</Link>

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
                          <div className="absolute left-full top-0 mt-0 ml-2 hidden group-hover:block w-48 bg-white border border-green-200 rounded shadow-md z-50">
                            <div className="p-2">
                              {productMap[category].map((product, index) => (
                                <div key={index} className="px-4 py-1 text-sm text-green-800 whitespace-nowrap">
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

          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/staff-contacts" className="hover:underline">Contact Us</Link>
          <Link href="/machineries" className="hover:underline">Infrastructure</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-green-700 text-white px-6 pt-20 pb-4 space-y-3 fixed top-0 left-0 right-0 z-40">
          <Link href="/" className="block hover:underline">Home</Link>
          <details>
            <summary className="cursor-pointer hover:underline">Products</summary>
            <div className="pl-4 mt-2 space-y-1 text-green-100">
              {Object.entries(productMap).map(([category, items]) => (
                <div key={category}>
                  <Link href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`} className="block font-semibold">
                    {category}
                  </Link>
                  <ul className="ml-4 text-sm list-disc">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
          <Link href="/about" className="block hover:underline">About Us</Link>
          <Link href="/staff-contacts" className="block hover:underline">Contact Us</Link>
          <Link href="/machineries" className="block hover:underline">Infrastructure</Link>
        </div>
      )}

      {/* Offset for navbar */}
      <div className="pt-24 md:pt-0" />
    </>
  );
}

