"use client";

import Link from "next/link";
import MachineryCard from "./MachineryCard";

export default function MachineryDetailsSection() {
  return (
    <div className="py-16 px-6 bg-green-50" id="machinery-section">
      <h2 className="text-5xl font-bold text-green-900 mb-8 text-center">Our Infrastructure</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MachineryCard
          title="Rolling Machine"
          image="/images/m1.jpeg"
          description="Creating industrial plastic rolls."
        />
        <MachineryCard
          title="Threading Machine"
          image="/images/m2.jpeg"
          description="High-speed thread production for durable plastic bags."
        />
        <MachineryCard
          title="Extruder Machine"
          image="/images/m3.jpeg"
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
