import { FaLeaf, FaUsers, FaIndustry } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <div className="bg-green-50 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Why Choose Ashamani Polyproducts?
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center text-center max-w-xs">
          <FaLeaf className="text-green-700 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Eco-Friendly</h3>
          <p className="text-green-700">
            Our plastic bags naturally degrade into soil within 2-3 years — safe for the environment.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <FaIndustry className="text-green-700 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-green-800 mb-2">State-of-the-Art Factory</h3>
          <p className="text-green-700">
            Fully equipped with advanced machinery and a dedicated workforce of 600+ employees.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <FaUsers className="text-green-700 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Trusted by Industry</h3>
          <p className="text-green-700">
            Award-winning packaging solutions trusted by industries and eco-conscious clients.
          </p>
        </div>
      </div>
    </div>
  );
}
