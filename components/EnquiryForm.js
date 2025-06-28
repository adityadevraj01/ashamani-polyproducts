"use client";

import { useState } from "react";

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        customerType: "New",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Enquiry submitted successfully!");
    };

    return (
        <div id="enquiry-form" className="bg-green-50 py-16 px-4">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Send Us an Enquiry</h2>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-green-300 rounded-lg placeholder-green-800 text-green-900"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-green-300 rounded-lg placeholder-green-800 bg-white text-green-900"
                />

                <select
                    name="customerType"
                    value={formData.customerType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-green-300 rounded-lg text-green-900 bg-white"
                >
                    <option value="" disabled>Select Customer Type</option>
                    <option value="New">New</option>
                    <option value="Existing">Existing</option>
                </select>

                <textarea
                    name="message"
                    placeholder="Your Message / Enquiry"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-green-300 rounded-lg h-32 placeholder-green-800 bg-white text-green-900"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition"
                >
                    Submit Enquiry
                </button>
                <p className="text-green-800 text-center mt-6">Or connect instantly on WhatsApp:</p>

                <a
                    href="https://wa.me/919337553572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition mt-4"
                >
                    📱 Chat on WhatsApp
                </a>

            </form>
        </div>
    );
}
