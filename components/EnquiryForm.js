
"use client";

import { useState } from "react";
import { CheckCircleIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    customerType: "New",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate API/SMTP here
    setSubmitted(true);
  };

  return (
    <section id="enquiry-form" className="relative overflow-hidden py-16 sm:py-20">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            Send Us an Enquiry
          </h2>
          <p className="mt-3 text-green-800/80">
            A team member will get back shortly. Prefer WhatsApp? Use the quick link.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-green-100 p-6 sm:p-8"
          >
            <div className="space-y-5">
              {/* Name */}
              <label className="block">
                <span className="block text-sm font-medium text-green-900 mb-1">Your Name</span>
                <div className="relative">
                  <UserIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-700/50" />
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g., Rakesh Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-green-300 pl-10 pr-3 py-3 text-green-900 placeholder-green-700/70 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
                  />
                </div>
              </label>

              {/* Phone */}
              <label className="block">
                <span className="block text-sm font-medium text-green-900 mb-1">Phone Number</span>
                <div className="relative">
                  <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-700/50" />
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    placeholder="+91 9XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-green-300 pl-10 pr-3 py-3 text-green-900 placeholder-green-700/70 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
                  />
                </div>
                <span className="mt-1 block text-xs text-green-800/70">We’ll only use this to contact about your enquiry.</span>
              </label>

              {/* Customer Type */}
              <label className="block">
                <span className="block text-sm font-medium text-green-900 mb-1">Customer Type</span>
                <select
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-green-300 px-3 py-3 text-green-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
                >
                  <option value="New">New</option>
                  <option value="Existing">Existing</option>
                </select>
              </label>

              {/* Message */}
              <label className="block">
                <span className="block text-sm font-medium text-green-900 mb-1">Your Message</span>
                <textarea
                  name="message"
                  placeholder="Tell us what you need (e.g., product type, quantity, timeline)…"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg border border-green-300 px-3 py-3 text-green-900 placeholder-green-700/70 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-700 text-white py-3 font-medium shadow hover:bg-green-800 active:bg-green-900 transition"
              >
                Submit Enquiry
              </button>

              {submitted && (
                <p className="flex items-center gap-2 text-green-800 text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  Enquiry submitted successfully!
                </p>
              )}
            </div>
          </form>

          {/* WhatsApp card */}
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl shadow-lg border border-green-100 p-6 sm:p-8 flex flex-col justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-green-900">Prefer WhatsApp?</p>
              <p className="mt-2 text-green-800/80">
                Get quick responses from the team during business hours.
              </p>

              <a
                href="https://wa.me/917381210096"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3 text-white font-medium shadow hover:bg-green-800 active:bg-green-900 transition"
              >
                <span className="text-xl">💬</span>
                Chat on WhatsApp
              </a>

              <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-green-900/80">
                <div className="rounded-lg bg-white/70 border border-green-200 p-3">Bulk Orders</div>
                <div className="rounded-lg bg-white/70 border border-green-200 p-3">Custom Sizes</div>
                <div className="rounded-lg bg-white/70 border border-green-200 p-3">Price Quotes</div>
              </div>

              <p className="mt-6 text-xs text-green-800/70">
                By contacting us, consent is given to be reached back via phone or WhatsApp regarding this enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
