"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function AgriculturalUsePage() {
  const products = [
    {
      title: "Jumbo Bags",
      image: "/images/jumbo-bag.jpg",
      description:
        "Heavy-duty bags suitable for transporting agricultural produce and grains.",
    },
    {
      title: "Sponge Iron Bags",
      image: "/images/sponge-iron.avif",
      description:
        "Ideal for packing processed minerals and iron-based materials in farms.",
    },
    {
      title: "Mineral Bags",
      image: "/images/mineral-bag.jpg",
      description:
        "Durable bags for storing minerals or agricultural supplements.",
    },
    {
      title: "Animal Feed Bags",
      image: "/images/Animal-feed.jpg",
      description:
        "UV-resistant woven sacks designed to safely store animal feed.",
    },
    {
      title: "Manure Bags",
      image: "/images/manure.jpg",
      description:
        "Strong and biodegradable bags perfect for packing and transporting manure.",
    },
    {
      title: "Grow Bags",
      image: "/images/grow.jpg",
      description:
        "Strong and biodegradable bags useful for plant care.",
    },
  ];

  return (
    <div className="bg-white text-green-900 min-h-screen flex flex-col">
      {/* SEO Head */}
      <Head>
        <title>Agricultural Use | HDPE & Poly Bags for Farming | Ashamani Polyproducts</title>
        <meta
          name="description"
          content="Explore eco-friendly HDPE and poly bags for agricultural use — manure bags, grow bags, feed bags, and more. High-quality and customizable."
        />
        <meta
          name="keywords"
          content="agricultural packaging, HDPE grow bags, manure bags, poly bags for farming, animal feed sacks, eco-friendly plastic bags"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph */}
        <meta property="og:title" content="Agricultural Use Poly Bags | Ashamani Polyproducts" />
        <meta
          property="og:description"
          content="Durable, eco-conscious HDPE and woven bags for agriculture: manure, minerals, grow bags, and more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.ashamanipolyproducts.com/images/backg.jpeg"
        />
        <meta
          property="og:url"
          content="https://www.ashamanipolyproducts.com/products/agricultural-use"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agricultural HDPE Bags | Ashamani Polyproducts" />
        <meta
          name="twitter:description"
          content="UV-resistant, biodegradable, and customizable agricultural packaging solutions from Ashamani Polyproducts."
        />
        <meta
          name="twitter:image"
          content="https://www.ashamanipolyproducts.com/images/backg.jpeg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />


      {/* Hero Banner */}
     <section
  className="pt-32 pb-20 px-6 md:px-20 text-center bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/backg.jpeg')" }}
>
  <div className="absolute inset-0 bg-green-900/50"></div> {/* Dark overlay */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Agricultural Use Products</h1>
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
