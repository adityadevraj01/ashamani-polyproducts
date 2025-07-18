// "use client";

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Link from "next/link";

// export default function StaffContactsPage() {
//   const staffList = [
//     {
//       name: "Mr. Priyaranjan Das",
//       designation: "Executive Director",
//       phone: "+91 7381210096",
//       email: "priyaranjan@ashamani.com",
//     },
//     {
//       name: "Mr. Mujibur Rahman",
//       designation: "General Manager",
//       phone: "+917978753465",
//       email: "suresh@ashamani.com",
//     },
//     {
//       name: "Mr. Montu Das",
//       designation: "Factory Manager",
//       phone: "+91 9012345678",
//       email: "deepak@ashamani.com",
//     },
    
//   ];

//   return (
//     <>
//       <Navbar />

//       <div className="pt-24 px-6">
//         <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">Contact Us</h1>

//         <div className="max-w-3xl mx-auto grid gap-6">
//           {staffList.map((staff, index) => (
//             <div
//               key={index}
//               className="p-5 border border-green-300 rounded-lg shadow-md bg-white hover:scale-105 transition-transform"
//             >
//               <h2 className="text-2xl font-semibold text-green-900 mb-2">{staff.name}</h2>
//               <p className="text-green-800 mb-1">{staff.designation}</p>
//               <p className="text-green-900 font-medium">📞 {staff.phone}</p>
//               <p className="text-green-800">📧 {staff.email}</p>
//             </div>
//           ))}
//         </div>

//         {/* Floating Contact Now Button */}
//         <Link
//           href="/#enquiry-form"
//           className="fixed bottom-6 right-6 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition-all flex items-center gap-2 z-50"
//         >
//           📞 Contact Now
//         </Link>
//       </div>
//     <Footer/>
//     </>
// );

// }
"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function StaffContactsPage() {
  const staffList = [
    {
      name: "Mr. Priyaranjan Das",
      designation: "Executive Director",
      phone: "+91 7381210096",
      email: "priyaranjan@ashamani.com",
      image: "/images/ed.png",
    },
    {
      name: "Mr. Mujibur Rahman",
      designation: "General Manager",
      phone: "+91 7978753465",
      email: "suresh@ashamani.com",
      image: "/images/gm.jpg",
    },
    {
      name: "Mr. Montu Das",
      designation: "Factory Manager",
      phone: "+91 9012345678",
      email: "deepak@ashamani.com",
      image: "/images/manager.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow pt-24 px-6">
        <h1 className="text-4xl font-bold text-green-900 mb-10 text-Left">Contact Our Team</h1>
        <p className="text-green-900">You can visit our factory or you can contact us through mail/whatsapp.</p>

        <div className="max-w-3xl mx-auto grid gap-8">
          {staffList.map((staff, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row"
              } items-center md:items-start gap-6 bg-green-300 p-6 border border-green-200 rounded-xl shadow-md hover:shadow-lg transition-all`}
            >
              <Image
                src={staff.image}
                alt={staff.name}
                width={120}
                height={120}
                className="rounded-xl object-cover border-2 border-green-300"
              />
              <div>
                <h2 className="text-2xl font-semibold text-green-900">{staff.name}</h2>
                <p className="text-green-800 mb-2">{staff.designation}</p>
                <p className="text-green-900 font-medium">📞 {staff.phone}</p>
                <p className="text-green-800">📧 {staff.email}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Contact Now Button */}
        <Link
          href="/#enquiry-form"
          className="fixed bottom-6 right-6 bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition-all flex items-center gap-2 z-50"
        >
          📞 Contact Now
        </Link>
      </main>

      <Footer />
    </div>
  );
}
