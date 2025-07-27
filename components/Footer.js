"use client";

import Link from "next/link";

export default function Footer() {
  
  return (
    <footer className="bg-green-900 text-green-100 pt-10 pb-6 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ashamani Polyproducts</h2>
          <p className="text-green-200 mb-4">
            Eco-Friendly Plastic Packaging Solutions | Factory & Award-Winning Sustainable Manufacturing
          </p>
          <p className="text-green-300 text-sm">© {new Date().getFullYear()} Ashamani Polyproducts. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/machineries" className="hover:underline">Infrastructure</Link></li>
            <li><Link href="/staff-contacts" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-green-200">📍 Ashamani Polyproducts Pvt. Ltd.,<br />Balasore, Odisha, India</p>
          <p className="mt-2 text-green-200">📞 +91 9337553572</p>
          <p className="text-green-200">📧 info@ashamani.com</p>
        </div>
      </div>
    </footer>
  );
}
