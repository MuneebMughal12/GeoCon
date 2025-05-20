import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export default function ContactSection() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        source: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        /* Hero Section */
        <div>
            <div className="relative h-[500px] bg-[#32213C]">
                {/* Blurred purple layer (optional visual effect) */}
                <div className="absolute inset-0 bg-[#32213C] opacity-80 blur-sm" />

                {/* Centered content */}
                <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Projects
                    </h1>
                    <p className="text-white text-lg md:text-xl">
                        Do you have some questions?
                    </p>
                </div>
            </div>

            <section className="bg-white py-16 px-6">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">


                    {/* Left Column */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#2a203c] mb-2 uppercase">
                            Get In Touch With Us
                        </h3>
                        <div className="w-20 h-1 bg-[#d0a688] mb-6" />
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any requirements for 3D design & 3D rendering service,
                            look forward to get your <span className="text-[#d0a688]">3D house design</span> or 3D home
                            designing done, or any other CGI animation, our team of architectural visualizers, 3D max experts & animators are there to guide you 24/7.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Also please share feedback about our work and design services...
                        </p>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#2a203c] mb-2 uppercase">
                            Fill Up The Form If You Have Any Question
                        </h3>
                        <div className="w-20 h-1 bg-[#d0a688] mb-6" />

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="border rounded w-full p-3 bg-gray-100"
                                    required
                                    value={form.firstName}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="border rounded w-full p-3 bg-gray-100"
                                    required
                                    value={form.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="border rounded w-full p-1 bg-gray-100"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <PhoneInput
                                    country={'pk'}
                                    value={form.phone}
                                    onChange={(phone) => setForm({ ...form, phone })}
                                    inputClass="!w-[270px] !m-7 !p-3 !bg-gray-100 !border !rounded"
                                    inputStyle={{ width: '100%' }}
                                />
                            </div>

                            <select
                                name="source"
                                className="border rounded w-full p-3 bg-gray-100"
                                required
                                value={form.source}
                                onChange={handleChange}
                            >
                                <option value="">-- Where did you find us? --</option>
                                <option value="google">Google</option>
                                <option value="social">Social Media</option>
                                <option value="referral">Referral</option>
                                <option value="other">Other</option>
                            </select>

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                className="border rounded w-full p-3 bg-gray-100"
                                required
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
