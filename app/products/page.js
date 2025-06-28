"use client";

import Link from "next/link";



export default function ProductsPage() {
  return (
    <div className="pt-24 px-6">
      <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Products</h1>

      {/* Industrial Section */}
      <div id="industrial" className="mb-16">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Industrial Packaging</h2>
        <p className="text-green-700 mb-6">Packaging solutions tailored for industries.</p>
        {/* add product cards here */}
      </div>

      {/* Domestic Section */}
      <div id="domestic" className="mb-16">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Domestic Packaging</h2>
        <p className="text-green-700 mb-6">Convenient and safe plastic packaging for household use.</p>
        {/* add product cards here */}
      </div>

      {/* Agricultural Section */}
      <div id="agricultural" className="mb-16">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Agricultural Packaging</h2>
        <p className="text-green-700 mb-6">Reliable packaging for seeds, fertilizers, and more.</p>
        {/* add product cards here */}
      </div>

      {/* Customised Section */}
      <div id="customised" className="mb-16">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Customised Packaging</h2>
        <p className="text-green-700 mb-6">Made-to-order packaging for your unique business needs.</p>
        {/* add product cards here */}
      </div>

      {/* Back to home link */}
      <Link href="/" className="text-green-700 underline">← Back to Home</Link>
    </div>
    
  );
}
