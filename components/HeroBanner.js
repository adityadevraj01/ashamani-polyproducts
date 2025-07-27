
"use client";
import { Menu } from "@headlessui/react";
import Head from "next/head";

<Head>
  <title>Ashamani Polyproducts Pvt. Ltd. | Eco-Friendly Poly Bags Manufacturer in India</title>
  <meta
    name="description"
    content="We manufacture eco-friendly HDPE, woven, and poly bags in various sizes, shapes, colors, and custom branding — suitable for factories, agriculture, and industrial packaging needs."
  />
  <meta
    name="keywords"
    content="eco-friendly poly bags, HDPE bags, woven bags, plastic packaging, biodegradable plastic bags, India packaging manufacturers, Ashamani Polyproducts"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="UTF-8" />

  {/* Open Graph for Facebook/LinkedIn */}
  <meta property="og:title" content="Ashamani Polyproducts Pvt. Ltd." />
  <meta
    property="og:description"
    content="Eco-friendly HDPE and poly bags manufacturer in India for industrial and agricultural use. Custom sizes, quality, and branding available."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ashamanipolyproducts.com" />
  <meta property="og:image" content="https://www.ashamanipolyproducts.com/images/hero-backg.jpeg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ashamani Polyproducts Pvt. Ltd." />
  <meta
    name="twitter:description"
    content="Sustainable HDPE and poly bags crafted for every need. Woven, colorful, and biodegradable options available."
  />
  <meta name="twitter:image" content="https://www.ashamanipolyproducts.com/images/hero-backg.jpeg" />

  {/* Favicon (Optional) */}
  <link rel="icon" href="/favicon.ico" />
</Head>

export default function HeroBanner() {
  return (
    <div
      className="relative h-[450px] bg-center bg-cover flex items-center justify-start px-10 transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: "url('/images/hero-backg.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-400 opacity-40 mix-blend-multiply transition-opacity duration-700"></div>

      {/* Text Content Shifted to Left */}
      <div className="relative z-10 text-left max-w-xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
          Eco-Friendly Poly Bags
        </h1>
        <p className="text-2xl font-mono text-green-100 mb-6">
          Sustainable woven plastic that naturally degrade.
        </p>
      </div>
    </div>
  );
}
