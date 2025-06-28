"use client";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";


export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="pt-24 px-6">
        <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">About Ashamani Polyproducts</h1>

        <p className="text-green-800 mb-10 max-w-3xl mx-auto text-center text-lg">
          We are a leading manufacturer of eco-friendly plastic packaging products, producing degradable plastic granules, rolls, threads, and bags for industrial, domestic, and agricultural uses.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* MD Message */}
          <div>
            <Image
              src="/images/md.jpg"
              alt="Managing Director"
              width={400}
              height={400}
              className="rounded-xl shadow-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-green-900 mb-3">Managing Director&apos;s Message</h2>
            <p className="text-green-800 leading-relaxed">
              “At Ashamani Polyproducts, our commitment to sustainability drives every decision. We take pride in manufacturing environment-friendly plastic packaging that not only meets market demands but also contributes to a greener tomorrow.”
            </p>
          </div>

          {/* ED Message */}
          <div>
            <Image
              src="/images/ed.png"
              alt="Executive Director"
              width={400}
              height={400}
              className="rounded-xl shadow-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-green-900 mb-3">Executive Director&apos;s Message</h2>
            <p className="text-green-800 leading-relaxed">
              “We believe innovation and responsibility go hand in hand. Our team of 600+ skilled professionals and advanced machinery ensures quality, consistency, and a better future for our customers and the environment alike.”
            </p>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}
