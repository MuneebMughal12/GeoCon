// src/components/ContactSection.jsx
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+92",
    source: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting", form)
  }

  const servicesList = [
    ["Photorealistic 3d Views", "Live Presenter", "3d & 2d Floor Plans", "Virtual Walkthrough", "Augmented Reality"],
    ["Visual Design", "Virtual Reality", "Pix Touch", "Web Design", "Print Media Designing"],
  ]

  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/black.jpg')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 text-white">
        {/* Left: Contact Us */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">CONTACT US</h2>
          <div className="w-16 border-t-2 border-[#d0a688]"></div>
          <p className="text-gray-200">
            Our team offers prompt and courteous support. You can either submit a project brief or simply drop us a line! You will be replied within one business day.
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-6">
            {servicesList.map((col, ci) => (
              <ul key={ci} className="space-y-2">
                {col.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-1 mr-2">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold">CONTACT FORM</h2>
          <div className="w-16 border-t-2 border-[#d0a688] mt-2 mb-6"></div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 placeholder-gray-400 text-white px-4 py-2 rounded focus:outline-none"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 placeholder-gray-400 text-white px-4 py-2 rounded focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 placeholder-gray-400 text-white px-4 py-2 rounded focus:outline-none"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone/Mobile <span className="text-red-500">*</span>
                </label>
                <div className="flex ">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    required
                    className="bg-white/10 text-white px-2 py-2 rounded focus:outline-none w-20 appearance-none"
                  >
                    <option className="text-black" value="+92">🇵🇰  +92</option>
                    <option className="text-black"  value="+1">🇺🇸  +1</option>
                    <option className="text-black" value="+44">🇬🇧  +44</option>
                    <option className="text-black" value="+971">🇦🇪  +971</option>
                    <option className="text-black" value="+61">🇦🇺  +61</option>
                    <option className="text-black" value="+91">🇮🇳  +91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 bg-white/10 placeholder-gray-400 text-white px-4 py-2 rounded focus:outline-none"
                    placeholder="3001234567"
                  />
                </div>
              </div>

            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Where did you find us? <span className="text-red-500">*</span>
              </label>
              <select
                name="source"
                value={form.source}
                onChange={handleChange}
                required
                className="w-full bg-white/10 placeholder-gray-400 text-white px-4 py-2 rounded focus:outline-none"
              >
                <option className="text-black" value="">– Select –</option>
                <option className="text-black">Google</option>
                <option className="text-black">Referral</option>
                <option className="text-black">Social Media</option>
                <option className="text-black">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/10 placeholder-gray-400 text-white px-4 py-2 rounded focus:outline-none"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
