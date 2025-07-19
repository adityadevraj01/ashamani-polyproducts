"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // Adjust path if needed

export default function IndustrialUsePage() {
  const products = [
    {
      title: "Manure Packing Bags",
      description: "Durable and eco-friendly bags designed to store and transport manure safely.",
      image: "/images/manure-bags.avif",
    },
    {
      title: "Paddy Bags",
      description: "Woven sacks ideal for bulk paddy storage, moisture-resistant and customizable.",
      image: "/images/paddy-bags.avif",
    },
    {
      title: "Cereal Bags",
      description: "Protect your grains with our high-strength, tamper-proof woven bags.",
      image: "/images/cereal-bags.avif",
    },
    {
      title: "Pond-liner",
      description: "Heavy-duty pond liners made for long-lasting water retention in agricultural and industrial ponds.",
      image: "/images/pond-liner.JPG",
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
  <div className="absolute inset-0 bg-green-900/50"></div> {/* Dark overlay */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Use Products</h1>
    <p className="max-w-3xl mx-auto text-lg">
      Explore our range of durable and eco-friendly packaging products specially designed for industrial use cases.
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
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/machineries" className="hover:underline">Infrastructure</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-2">Contact</h5>
            <p className="text-sm text-gray-200">📍 Nayagarh, Odisha, India</p>
            <p className="text-sm text-gray-200">📞 +91 93375 53572</p>
            <p className="text-sm text-gray-200">✉️ devrajaditya123@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Ashamani Polyproducts Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
