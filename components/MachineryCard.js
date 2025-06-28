"use client";

export default function MachineryCard({ title, image, description }) {
  return (
    <div className="bg-white border border-green-200 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
        <p className="text-green-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
