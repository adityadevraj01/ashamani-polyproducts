"use client";

import Link from "next/link";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-800 text-white px-8 py-4 shadow-lg">
      <Link href="/" className="text-2xl font-bold">Ashamani Polyproducts</Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:underline">Home</Link>

        {/* Product Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="hover:underline">Products</Menu.Button>
          <Menu.Items className="absolute mt-2 w-48 bg-white text-green-900 border border-green-200 rounded shadow-lg z-50">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/products#industrial"
                    className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
                      }`}
                  >
                    Industrial
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/products#domestic"
                    className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
                      }`}
                  >
                    Domestic
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/products#agricultural"
                    className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
                      }`}
                  >
                    Agricultural
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/products#customised"
                    className={`block px-4 py-2 rounded ${active ? "bg-green-100" : ""
                      }`}
                  >
                    Customised
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

        <Link href="/about" className="hover:underline">About Us</Link>
        <Link href="/events" className="hover:underline">Events</Link>

        <Link href="/machineries" className="hover:underline">
          Machineries
        </Link>

      </div>
    </nav>
  );
}
