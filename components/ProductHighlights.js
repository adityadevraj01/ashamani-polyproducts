import ProductCard from "./ProductCard";

export default function ProductHighlights() {
  return (
    <div className="bg-green-50 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Our Product Range
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        <ProductCard
          image="/images/granules.jpg"
          title="Plastic Granules"
          description="High-quality, eco-safe plastic granules for diverse industrial uses."
        />
        <ProductCard
          image="/images/thread.jpg"
          title="Plastic Threads"
          description="Durable plastic threads produced from premium-grade granules."
        />
        <ProductCard
          image="/images/bags.jpg"
          title="Eco-Friendly Plastic Bags"
          description="Environment-safe plastic bags that degrade naturally within 2-3 years."
        />
      </div>
    </div>
  );
}
