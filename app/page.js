"use client";
import { useState } from "react";
import { Phone, Mail, Wrench, Image as ImageIcon } from "lucide-react";

export default function MeltingMetal() {
  const [formData, setFormData] = useState({ name: "", phone: "", details: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted! We will contact you soon.");
    setFormData({ name: "", phone: "", details: "" });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Melting Metal</h1>
        <p className="text-lg md:text-2xl mb-6">Mobile Welding Repair Service</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg text-lg">
          Get a Quote
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg">
          At Melting Metal, we specialize in reliable mobile welding repair services. Whether it’s equipment, vehicles, or structural repairs, we come to you and get the job done fast and right.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "General Welding Repairs", desc: "From machinery to tools, we repair it all with precision." },
            { title: "Mobile On-Site Service", desc: "We come to your location, saving you time and hassle." },
            { title: "Emergency Repairs", desc: "24/7 emergency welding repairs when you need it most." },
          ].map((service, i) => (
            <div key={i} className="shadow-lg p-6 text-center bg-white rounded-2xl">
              <Wrench className="w-10 h-10 mx-auto text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={\`https://via.placeholder.com/400x300?text=Project+\${item}\`}
                alt={\`Project \${item}\`}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon className="w-10 h-10 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Request a Quote</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          />
          <textarea
            name="details"
            placeholder="Describe your repair needs..."
            value={formData.details}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">Need a repair? Get in touch today.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="tel:1234567890" className="flex items-center gap-2 text-lg text-yellow-600 font-semibold">
            <Phone className="w-5 h-5" /> (123) 456-7890
          </a>
          <a href="mailto:info@meltingmetal.com" className="flex items-center gap-2 text-lg text-yellow-600 font-semibold">
            <Mail className="w-5 h-5" /> info@meltingmetal.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Melting Metal. All rights reserved.</p>
      </footer>
    </div>
  );
}