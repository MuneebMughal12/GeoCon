import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const images = [
    "/visual-design/visual1.jpg", // 1st: col-span-2, row-span-2
    "/visual-design/visual2.jpg", // 2nd: col-span-2
    "/visual-design/visual3.jpg",
    "/visual-design/visual4.jpg",
    "/visual-design/visual7.jpg", // 7th: col-span-2, row-span-2
    "/visual-design/visual.jpg",
    "/visual-design/visual8.jpg",
    "/visual-design/visual5.jpg",
    "/visual-design/visual6.jpg",
    "/visual-design/visual9.jpg",

  ];



export default function Visualdesign() {
    const navigate = useNavigate();
    const [selectedImg, setSelectedImg] = useState(null);



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
                        Visual Design Services
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
                            BUI <span className=" text-white">PROMINENT</span>
                        </p>
                        <p>LD IDENTITY</p>
                    </div>

                    {/* Right Side Paragraph */}
                    <div className="flex gap-6 items-start">
                        <div className="w-1 h-full bg-[#d0a688]"></div>
                        <p className="text-lg leading-relaxed">
                            Visual Design services aim to shape the viewers experience through the creative mediums of user interface and graphic design. Visual design company focuses on the aesthetics of a product and its related materials by strategically implementing images, colours, fonts, and other elements for an amazing appeal.
                        </p>
                    </div>
                </div>

                {/* Benefits Heading */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
                        Benefits of Visual Design Services
                    </h3>
                    <div className="w-40 md:w-72 h-1 bg-[#d0a688] mx-auto mt-4"></div>
                </div>

                {/* Benefit Boxes */}
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto text-center">
                    {[
                        {
                            title: "CORPORATE IDENTITY",
                            desc: "We communicate the mission, vision and values of your company with our dominant visual design in the best way. We help your viewers become more aware of your extraordinary brand features which make these highly marketable.",
                        },
                        {
                            title: "BRAND RECOGNITION",
                            desc: "Our visual designs show volumes about your products or services offered. We help you to achieve this through our vibrant service range brochures, templates, ads, websites and videos for an unbeatable promotional campaign.",
                        },
                        {
                            title: "AMPLIFY CONVERSION",
                            desc: "Our visual design services lead to high visibility which is the major factor to convert your viewers into consumers which skyrocket your company’s sales.",
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
            {/* silder + image section  */}
            <div className="bg-[#2a203c] text-white py-16 px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-[#d0a688]">
                        Visual Design Views
                    </h2>
                    <div className="w-28 h-1 bg-[#d0a688] mx-auto mt-3"></div>
                </div>

                {/* Image Grid */}
                <div className="max-w-full mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[180px]">
                    {images.map((src, i) => {
                        // Conditional spans
                        const colSpan =
                            i === 0 || i === 4 ? "col-span-2" : i === 1 ? "col-span-2" : "col-span-1";
                        const rowSpan = i === 0 || i === 4 ? "row-span-2" : "row-span-1";

                        return (
                            <img
                                key={i}
                                src={src}
                                alt={`Visual design ${i + 1}`}
                                onClick={() => setSelectedImg(src)}
                                className={`w-full h-full object-cover rounded-md cursor-pointer hover:scale-105 transition-transform ${colSpan} ${rowSpan}`}
                            />
                        );
                    })}
                </div>

                {/* Fullscreen Lightbox */}
                {selectedImg && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
                        onClick={() => setSelectedImg(null)}
                    >
                        <img
                            src={selectedImg}
                            alt="Preview"
                            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
                        />
                    </div>
                )}
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
