"use client";

import Link from "next/link";
import MachineryCard from "./MachineryCard";

export default function MachineryDetailsSection() {
  return (
    <div className="py-16 px-6 bg-green-50" id="machinery-section">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Machinery</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MachineryCard
          title="Cutting Machine"
          image="/images/stitching-machine.jpg"
          description="Precision cutting for industrial plastic rolls."
        />
        <MachineryCard
          title="Threading Machine"
          image="/images/thread-machine.jpg"
          description="High-speed thread production for durable plastic bags."
        />
        <MachineryCard
          title="Extruder Machine"
          image="/images/printing-machine.jpg"
          description="Advanced extrusion for plastic granules and threads."
        />
      </div>

      <div className="text-center">
        <Link href="/machineries">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition text-lg">
            Learn More →
          </button>
        </Link>
      </div>
    </div>
  );
}
