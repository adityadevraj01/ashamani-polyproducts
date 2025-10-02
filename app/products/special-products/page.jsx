"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function SpecialProductsPage() {
  const products = [
    {
      title: "Jumbo Bags",
      image: "/images/jumbo-bag.jpg",
      description:"Jumbo bags are used for storing and transporting bulk materials like grains, chemicals, and construction aggregates.",
    },
    {
      title: "Pond-liner Bags",
      image: "/images/pond-liner.JPG",
      description:
        "Pond liner bags are waterproof barriers, often made of durable materials like HDPE, used to line ponds and prevent water leakage, ensuring water conservation and long-term water storage. ",
    },
    {
      title: "Coloured Bags",
      image: "/images/Animal-feed.jpg",
      description:
        "Custom-colored woven bags for branding, easy identification, and industry-specific requirements.",
    },
  ];

  return (
    <div className="bg-white text-green-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section
        className="pt-32 pb-20 px-6 md:px-20 text-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/backg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-green-900/50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Products</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Discover our innovative range of specialty bags crafted for precision use in packaging.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="px-6 md:px-20 pb-16 py-7">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white px-6 md:px-20 py-10 mt-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-xl mb-2">Ashamani Polyproducts Pvt. Ltd.</h4>
            <p className="text-sm text-gray-200">
              Providing eco-friendly, high-quality plastic packaging solutions across industrial, agricultural, and domestic sectors.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-2">Quick Links</h5>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/staff-contacts" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/machineries" className="hover:underline">Infrastructure</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-2">Contact</h5>
            <p className="text-sm text-gray-200">📍 Balasore, Odisha, India</p>
            <p className="text-sm text-gray-200">📞 +91 7381210096</p>
            <p className="text-sm text-gray-200">✉️ info@ashamani.in</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Ashamani Polyproducts Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
