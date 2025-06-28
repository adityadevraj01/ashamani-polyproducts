"use client";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function MachineriesPage() {
  return (
    <>
      <Navbar />

      <div className="pt-24 px-6">
        <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Machinery Setup</h1>

        <p className="text-green-800 mb-10 max-w-3xl mx-auto text-center text-lg">
          Here’s a look at the advanced machinery we use for transforming raw plastic materials into eco-friendly, degradable plastic packaging products.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Machine 1 */}
          <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <Image
              src="/images/machine1.jpg"
              alt="Granule Mixer"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Granule Mixer</h3>
              <p className="text-green-800 text-sm">
                High-speed granule mixing machine ensuring even color distribution and quality consistency.
              </p>
            </div>
          </div>

          {/* Machine 2 */}
          <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <Image
              src="/images/machine2.jpg"
              alt="Thread Extruder"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Thread Extruder</h3>
              <p className="text-green-800 text-sm">
                Converts granules into durable plastic threads used for weaving high-strength rolls and bags.
              </p>
            </div>
          </div>

          {/* Machine 3 */}
          <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <Image
              src="/images/machine3.jpg"
              alt="Bag Cutting & Sealing"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Bag Cutting & Sealing Machine</h3>
              <p className="text-green-800 text-sm">
                Fully automated bag cutting and sealing machine ensuring precise dimensions and eco-friendly material handling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
