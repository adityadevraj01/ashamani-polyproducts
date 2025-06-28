"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function StaffContactsPage() {
  const staffList = [
    {
      name: "Mr. Bhagbat Das",
      designation: "Managing Director",
      phone: "+91 9876543210",
      email: "bhagbatdas@ashamani.com",
    },
    {
      name: "Mr. Priyaranjan Das",
      designation: "Executive Director",
      phone: "+91 7381210096",
      email: "priyaranjan@ashamani.com",
    },
    {
      name: "Mr. Montu Das",
      designation: "Factory Manager",
      phone: "+91 9012345678",
      email: "deepak@ashamani.com",
    },
    {
      name: "Mr. Suresh Das",
      designation: "Sales Head",
      phone: "+91 9234567890",
      email: "suresh@ashamani.com",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pt-24 px-6">
        <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Staff Contact Numbers</h1>

        <div className="max-w-3xl mx-auto grid gap-6">
          {staffList.map((staff, index) => (
            <div
              key={index}
              className="p-5 border border-green-300 rounded-lg shadow-md bg-white hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold text-green-900 mb-2">{staff.name}</h2>
              <p className="text-green-800 mb-1">{staff.designation}</p>
              <p className="text-green-900 font-medium">📞 {staff.phone}</p>
              <p className="text-green-800">📧 {staff.email}</p>
            </div>
          ))}
        </div>

        {/* Floating Contact Now Button */}
        <link
          href="/#enquiry-form"
          className="fixed bottom-6 right-6 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition-all flex items-center gap-2 z-50"
        >
          📞 Contact Now
        </link>
      </div>
    <Footer/>
    </>
);

}
