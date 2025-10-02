
// "use client";

// import Link from "next/link";
// import { Menu } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const productMap = {
//     "Agricultural Use": ["Jumbo bags", "Sponge iron bags", "Mineral bags", "Animal feed bags", "Manure bags"],
//     "Industrial Use": ["Manure packing bags", "Paddy bags", "Cereal bags", "Pond-liner"],
//     "Domestic Use": ["Tarpauline", "Plantation Bags"],
//     "Special Products": ["Jumbo Bags", "Pond Liner"],
//   };

//   return (
//     <>
//       <nav className="flex justify-between items-center bg-green-600/85 backdrop-blur text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
//         <Link href="/" className="text-2xl font-serif">
//           Ashamani Polyproducts Pvt. Ltd.
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link href="/" className="hover:underline">Home</Link>

//           {/* Products Dropdown */}
//           <Menu as="div" className="relative">
//             {({ open }) => (
//               <>
//                 <Menu.Button className="hover:underline">Products</Menu.Button>
//                 <Menu.Items className="absolute mt-2 w-60 bg-white text-green-900 border border-green-200 rounded shadow-lg z-50 p-2">
//                   {Object.keys(productMap).map((category) => (
//                     <Menu.Item key={category} as={Fragment}>
//                       {({ active }) => (
//                         <div className="group relative">
//                           <Link
//                             href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
//                             className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""}`}
//                           >
//                             {category}
//                           </Link>
//                           <div className="absolute left-full top-0 mt-0 ml-2 hidden group-hover:block w-48 bg-white border border-green-200 rounded shadow-md z-50">
//                             <div className="p-2">
//                               {productMap[category].map((product, index) => (
//                                 <div key={index} className="px-4 py-1 text-sm text-green-800 whitespace-nowrap">
//                                   {product}
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </Menu.Item>
//                   ))}
//                 </Menu.Items>
//               </>
//             )}
//           </Menu>

//           <Link href="/about" className="hover:underline">About Us</Link>
//           <Link href="/staff-contacts" className="hover:underline">Contact Us</Link>
//           <Link href="/machineries" className="hover:underline">Infrastructure</Link>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? (
//             <XMarkIcon className="w-6 h-6 text-white" />
//           ) : (
//             <Bars3Icon className="w-6 h-6 text-white" />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Menu Links */}
//       {menuOpen && (
//         <div className="md:hidden bg-green-700 text-white px-6 pt-20 pb-4 space-y-3 fixed top-0 left-0 right-0 z-40">
//           <Link href="/" className="block hover:underline">Home</Link>
//           <details>
//             <summary className="cursor-pointer hover:underline">Products</summary>
//             <div className="pl-4 mt-2 space-y-1 text-green-100">
//               {Object.entries(productMap).map(([category, items]) => (
//                 <div key={category}>
//                   <Link href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`} className="block font-semibold">
//                     {category}
//                   </Link>
//                   <ul className="ml-4 text-sm list-disc">
//                     {items.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </details>
//           <Link href="/about" className="block hover:underline">About Us</Link>
//           <Link href="/staff-contacts" className="block hover:underline">Contact Us</Link>
//           <Link href="/machineries" className="block hover:underline">Infrastructure</Link>
//         </div>
//       )}

//       {/* Offset for navbar */}
//       <div className="pt-24 md:pt-0" />
//     </>
//   );
// }
"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const productMap = {
    "Agricultural Use": ["Jumbo bags", "Sponge iron bags", "Mineral bags", "Animal feed bags", "Manure bags"],
    "Industrial Use": ["Manure packing bags", "Paddy bags", "Cereal bags", "Pond-liner"],
    "Domestic Use": ["Tarpauline", "Plantation Bags"],
    "Special Products": ["Jumbo Bags", "Pond Liner"],
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "bg-green-700/85 shadow-lg"
    : "bg-gradient-to-r from-green-700/70 via-green-600/70 to-green-700/70";

  return (
    <>
      <nav
        // No border-bottom or inset shadow to avoid the black line
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md ${navBg}`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-yellow-300 via-yellow-200 to-white bg-clip-text text-transparent hover:from-white hover:to-yellow-300 transition-colors"
            >
              Ashamani Polyproducts Pvt. Ltd.
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>

              {/* Products */}
              <Menu as="div" className="relative">
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition group">
                      <span className="relative">
                        Products
                        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-300 to-white transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="opacity-0 scale-95 -translate-y-1"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="transition ease-in duration-120"
                      leaveFrom="opacity-100 scale-100 translate-y-0"
                      leaveTo="opacity-0 scale-95 -translate-y-1"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-[680px] max-w-[90vw] origin-top-right rounded-xl bg-white/95 backdrop-blur shadow-xl ring-1 ring-black/5 focus:outline-none p-3 grid grid-cols-2 gap-3">
                        {Object.keys(productMap).map((category) => (
                          <div key={category} className="rounded-lg border border-green-100 overflow-hidden">
                            <Menu.Item as={Fragment}>
                              {({ active }) => (
                                <Link
                                  href={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`}
                                  className={`flex items-center justify-between px-3 py-2 text-green-900 font-medium ${
                                    active ? "bg-green-50" : "bg-white"
                                  }`}
                                >
                                  <span>{category}</span>
                                  <span className="text-xs text-green-700">View</span>
                                </Link>
                              )}
                            </Menu.Item>
                            <div className="bg-white">
                              {productMap[category].map((product, index) => (
                                <div
                                  key={index}
                                  className="px-3 py-1.5 text-sm text-green-800 hover:bg-green-50 transition whitespace-nowrap"
                                >
                                  {product}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/staff-contacts">Contact Us</NavLink>
              <NavLink href="/machineries">Infrastructure</NavLink>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2.5 text-white/90 hover:bg-white/10 hover:text-white transition"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <Transition
          show={menuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div className="md:hidden px-3 sm:px-4 pb-4">
            <div className="space-y-1 rounded-lg border border-white/10 bg-green-800/80 backdrop-blur p-3">
              <MobileLink href="/" onClick={() => setMenuOpen(false)}>
                Home
              </MobileLink>

              <details className="group rounded-md">
                <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition">
                  <span className="relative">
                    Products
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-300 to-white transition-all duration-300 group-open:w-full" />
                  </span>
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="pl-3 pt-2 pb-1 space-y-2">
                  {Object.entries(productMap).map(([category, items]) => (
                    <div key={category}>
                      <MobileLink
                        href={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setMenuOpen(false)}
                        className="font-medium"
                      >
                        {category}
                      </MobileLink>
                      <ul className="ml-4 text-sm text-green-100/90 space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>

              <MobileLink href="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </MobileLink>
              <MobileLink href="/staff-contacts" onClick={() => setMenuOpen(false)}>
                Contact Us
              </MobileLink>
              <MobileLink href="/machineries" onClick={() => setMenuOpen(false)}>
                Infrastructure
              </MobileLink>
            </div>
          </div>
        </Transition>
      </nav>

      {/* No spacer; hero should overlap */}
    </>
  );
}

/* Subcomponents */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center px-3 py-2 rounded-md text-white/90 hover:text-white transition group"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-300 to-white transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

function MobileLink({ href, children, onClick, className = "" }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-md px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white transition ${className}`}
    >
      {children}
    </Link>
  );
}
