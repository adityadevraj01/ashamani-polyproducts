"use client";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";


export default function EventsPage() {
  return (
    <>
      <Navbar />

      <div className="pt-24 px-6">
        <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Our Events</h1>

        <p className="text-green-800 mb-10 max-w-3xl mx-auto text-center text-lg">
          Ashamani Polyproducts takes pride in contributing to environmental awareness campaigns, factory inaugurations, employee wellness programs, and industry exhibitions. Here&apos;s a glimpse of some memorable moments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <Image
              src="/images/event1.jpg"
              alt="Event 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Plantation Drive</h3>
              <p className="text-green-700 text-sm mb-1">June 2024</p>
              <p className="text-green-800 text-sm">
                A company-wide tree plantation event held at our factory premises to promote green awareness.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <Image
              src="/images/event2.jpg"
              alt="Event 2"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Annual Awards Ceremony</h3>
              <p className="text-green-700 text-sm mb-1">December 2023</p>
              <p className="text-green-800 text-sm">
                Recognizing the hard work of our employees with awards and a festive evening celebration.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform">
            <Image
              src="/images/event3.jpg"
              alt="Event 3"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Packaging Expo Participation</h3>
              <p className="text-green-700 text-sm mb-1">March 2023</p>
              <p className="text-green-800 text-sm">
                Showcased our eco-friendly plastic solutions at the annual Packaging Industry Expo.
              </p>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}
