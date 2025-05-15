import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const services = [
    { name: "Photorealistic 3D Views", path: "/services/photo-rendering" },
    { name: "Live Presenter", path: "/services/live-presenter" },
    { name: "3D & 2D Floor Plans", path: "/services/3d-floor-plans" },
    { name: "Virtual Walkthrough", path: "/services/3d-walkthrough" },
    { name: "Augmented Reality", path: "/services/augmented-reality" },
    { name: "Visual Design", path: "/services/visual-design" },
    { name: "Virtual Reality", path: "/services/virtual-reality" },
    { name: "Pix Touch", path: "/services/pix-touch" },
    { name: "Web Design", path: "/services/web-design" },
    { name: "Print Media Designing", path: "/services/print-media" },
];


export default function Visualdesign() {
    const navigate = useNavigate();




    return (
        <div className="bg-[#32213C] text-white">
            {/* Hero Section */}
            <div className="relative h-[500px]">
                {/* 1. Blurred background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-sm"
                    style={{ backgroundImage: `url('/3dsketch.png')` }}
                />

                {/* 2. Purple overlay */}
                <div className="absolute inset-0 bg-[#32213C] opacity-70" />

                {/* 3. Your centered content */}
                <div className="relative flex items-center justify-center h-full text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Web Design & Web Development Company
                    </h1>
                </div>
            </div>

            <div
                className="bg-cover bg-center bg-no-repeat text-white py-20 px-6"
                style={{ backgroundImage: `url('/visual-design/visual.jpg')` }} // Make sure image exists in /images/
            >
                {/* Top Section */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Side Title */}
                    <div className="text-white font-extrabold text-[50px] md:text-[70px] leading-tight">
                        <p>
                            PO <span className=" text-white">BRAND</span>
                        </p>
                        <p>WER PRODECTION </p>
                    </div>

                    {/* Right Side Paragraph */}
                    <div className="flex gap-6 items-start">
                        <div className="w-1 h-full bg-[#d0a688]"></div>
                        <p className="text-lg leading-relaxed">
                            Pixarch has a full-service real estate web design & development team that offers customize web design 
                            to meet your needs. We create websites using the latest
                            development tools and modules so that the user experience you
                            are able to provide your customers will become extraordinary & memorable.
                        </p>
                    </div>
                </div>

                {/* Benefits Heading */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
                    BENEFITS OF WEB DESIGN & WEB DEVELOPMENT
                    </h3>
                    <div className="w-40 md:w-72 h-1 bg-[#d0a688] mx-auto mt-4"></div>
                </div>

                {/* Benefit Boxes */}
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto text-center">
                    {[
                        {
                            title: "INCREASED TRAFFIC",
                            desc: "Our Custom Web Design guarantees that your brand reaches a respectable position in various search engines and also captivates your audience in an experience.",
                        },
                        {
                            title: "UNRIVALLED MARKET POSITION",
                            desc: "Pixarch promises to create a website that captures user loyalty, traffic and showcase your vision to every single visitor. Pixarch guarantee that our focus is always on perfection what would work best for you in your industry. We try to understand the uniqueness of your project to achieve a greater milestone digitally.",
                        },
                        {
                            title: "CONVENIENT & COST EFFECTIVE",
                            desc: "Our prominent web interface is a great pull for generating leads and developing brand awareness. It piques your customers’ interests to go further for the ultimate purchases.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#2a203c]/90 px-6 py-8 rounded shadow text-white"
                        >
                            <h4 className="text-xl font-extrabold text-[#d0a688] mb-3 uppercase">
                                {item.title}
                            </h4>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>







            {/* Contact Us Section */}
            <div className="py-16 px-6 bg-gradient-to-t from-black to-transparent">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                    {/* Services List */}
                    <div>
                        <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
                        <p className="text-gray-300 mb-4">
                            Our team offers prompt and courteous support. You can either submit a project brief or simply drop a line.
                        </p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {services.map((s, i) => (
                                <li
                                    key={i}
                                    onClick={() => navigate(s.path)}
                                    className="cursor-pointer text-[#d0a688] hover:underline"
                                >
                                    {s.name}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact Form */}
                    <div className="bg-white rounded p-6 text-black shadow-md">
                        <h4 className="text-xl font-bold mb-4">Contact Form</h4>
                        <form className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="email" placeholder="Email Address" className="p-2 border rounded" />
                                <input type="tel" placeholder="Phone No" className="p-2 border rounded" />
                            </div>
                            <select className="w-full p-2 border rounded">
                                <option>Select one</option>
                                {services.map((s, i) => (
                                    <option key={i}>{s.name}</option>
                                ))}
                            </select>
                            <textarea placeholder="Your Message" className="w-full p-2 border rounded h-24" />
                            <button type="submit" className="w-full bg-[#d0a688] hover:bg-[#b38b72] text-white py-2 rounded">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* CTA Section */}
            <div className="bg-white py-8">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Left: text */}
                    <p className="text-lg text-black font-medium text-center md:text-left">
                        Let us know if you’ve got an interesting project and want to work together!
                    </p>

                    {/* Right: button */}
                    <div className="text-center md:text-right">
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-[#d0a688] hover:bg-[#b38b72] text-white px-6 py-3 rounded inline-flex items-center gap-2"
                        >
                            Contact Us →
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
