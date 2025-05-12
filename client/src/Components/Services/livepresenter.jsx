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



export default function LivePresenter() {
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
                        Live Presenter
                    </h1>
                </div>
            </div>

            {/* 3D Portal Section */}
            <div
                className="bg-cover bg-center bg-no-repeat text-white py-16 px-6"
                style={{ backgroundImage: `url('/aboutussilder.jpg')` }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20 px-6">
                    {/* Left Side with 3D and stacked text */}
                    <div className="flex items-center">
                        <h2 className="text-[100px] leading-none font-bold mr-6 text-white">ART</h2>
                        <div className="text-white font-bold text-xl leading-tight">
                            <p>REAL-TIME</p>
                            <p>FOOTAGE</p>
                            <p>TECHONOLAGY</p>
                        </div>
                    </div>

                    {/* Right Side with vertical line and paragraph */}
                    <div className="flex items-start gap-6">
                        {/* Vertical Line */}
                        <div className="w-1 h-full  bg-[#d0a688]"></div>
                        {/* Text */}
                        <p className="text-white text-2xl leading-relaxed">
                            A whole new level of realism, live presenter, masters the art of combining
                            real-time footage with the artificially crafted one which appear both
                            surreal and seamless. The enticing element of human interaction in the
                            chroma key services is added and the spaces are showcased
                            with actual  activity so the viewers are able to imagine reality.
                        </p>
                    </div>
                </div>


                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
                        BENEFITS OF LIVE PRESENTER
                    </h3>
                    <div className="w-52 md:w-96 h-1 bg-[#d0a688] mx-auto mt-4"></div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl md:h-48 h-full mx-auto px-6 text-center">
                    {[
                        {
                            title: "LIMITLESS POSSIBILITIES",
                            desc: "Open endless avenues of interaction with our virtual elements which provide your audience with a wider scope for experimentation and exploration of your project.",
                        },
                        {
                            title: "ADVERTISING EASE",
                            desc: "Superimpose your company branding on our Live Presenter background which lends to constant advertising support and embeds your corporate identity in your customers’ minds.",
                        },
                        {
                            title: "LOGISTICAL SOLUTIONS",
                            desc: "Master the control of your project environment with our multipurpose application tool and adjust the location, sound plus lighting with minimal logistics.",
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
