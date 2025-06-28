export default function AwardsSection() {
  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Our Recognitions
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold shadow">
          ISO Certified Eco Packaging
        </div>
        <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold shadow">
          Green Product Excellence Award
        </div>
        <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold shadow">
          Environmentally Safe Product Certification
        </div>
      </div>
    </div>
  );
}
