"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ProductDetailsSection() {
  return (
    <div className="py-16 px-6 bg-green-50" id="product-section">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ProductCard
          title="Plastic Granules"
          image="/images/granules.jpg"
          description="High-quality eco-friendly plastic granules used for extrusion and molding."
        />
        <ProductCard
          title="Plastic Rolls"
          image="/images/thread.jpg"
          description="Durable and recyclable plastic rolls suitable for various industries."
        />
        <ProductCard
          title="Plastic Carry Bags"
          image="/images/bags.jpg"
          description="Eco-friendly carry bags available in different sizes and designs."
        />
      </div>

      <div className="text-center">
        <Link href="/products">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition text-lg">
            Explore More →
          </button>
        </Link>
      </div>
    </div>
  );
}
