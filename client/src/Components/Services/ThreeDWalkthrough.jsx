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


const videos = [
  {
    name: "FALCON LOGISTICS PARK",
    video: "https://www.youtube.com/embed/dwtyeZi1328",
  },
  {
    name: "MALL OF WAH",
    video: "https://www.youtube.com/embed/dwtyeZi1328",
  },
  {
    name: "CANAL PALMS",
    video: "https://www.youtube.com/embed/dwtyeZi1328",
  },
];

export default function ThreeDWalkthrough() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);


  return (
    <div className="bg-[#32213C] text-white">
      {/* Hero Section */}
      <div
        className="h-[1000px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url('/3dsketch.png')` }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          3D Architectural Walkthrough Animation Services Company
        </h1>
      </div>

      {/* 3D Portal Section */}
      <div
        className="bg-cover bg-center bg-no-repeat text-white py-16 px-6"
        style={{ backgroundImage: `url('/aboutussilder.jpg')` }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20 px-6">
          {/* Left Side with 3D and stacked text */}
          <div className="flex items-center">
            <h2 className="text-[100px] leading-none font-bold mr-6 text-white">3D</h2>
            <div className="text-white font-bold text-xl leading-tight">
              <p>VIRTUAL</p>
              <p>VITUOSITY</p>
              <p>PORTAL</p>
            </div>
          </div>

          {/* Right Side with vertical line and paragraph */}
          <div className="flex items-start gap-6">
            {/* Vertical Line */}
            <div className="w-1 h-full  bg-[#d0a688]"></div>
            {/* Text */}
            <p className="text-white text-2xl leading-relaxed">
              3D Visual Virtuosity Portal is designed to provide brilliant animation effects to embellish
              the exteriors and interiors. Vivid 3D walkthrough animation service vibrates the essence
              of commercial and residential spaces.
            </p>
          </div>
        </div>


        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
            BENEFITS OF 3D ARCHITECTURAL WALKTHROUGH
          </h3>
          <div className="w-52 md:w-96 h-1 bg-[#d0a688] mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl md:h-48 h-full mx-auto px-6 text-center">
          {[
            {
              title: "ADVANCED REAL ESTATE TOOL",
              desc: "It enables the clients to take a quick and favorable decision by enhancing their interpretation of the project.",
            },
            {
              title: "COST EFFECTIVE SOLUTION",
              desc: "Aids the Real Estate marketers to save on marketing and advertising of projects.",
            },
            {
              title: "REALISTIC INTERPRETATION",
              desc: "Provides the ability to visualize the overall surrounding of the interior and exterior to get an idea of the exact layout of the project.",
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


      {/* Featured Projects */}
      <div className="bg-[#2a203c] py-16 px-6 text-white">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold uppercase mb-2">Enter Into A World Of 3D Realism</h3>
          <p className="text-[#d0a688] uppercase tracking-wider">Our Newest Featured Projects</p>
        </div>

        {/* Grid of Projects */}
        <div className="bg-[#2a203c] py-16 px-6 text-white">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videos.map((proj, i) => (
              <div key={i} className="text-center cursor-pointer" onClick={() => setSelectedVideo(proj.video)}>
                <div className="aspect-w-16 aspect-h-9 w-full rounded overflow-hidden shadow">
                  <iframe
                    src={proj.video}
                    title={proj.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-72 pointer-events-none"
                  ></iframe>
                </div>
                <p className="mt-3 font-bold uppercase text-sm tracking-wide">{proj.name}</p>
              </div>
            ))}
          </div>

          {/* Fullscreen Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <div className="relative w-full max-w-6xl aspect-video">
                <iframe
                  src={selectedVideo + "?autoplay=1"}
                  title="Fullscreen Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-16 -right-24 text-white text-3xl font-bold"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button className="border border-[#d0a688] text-[#d0a688] px-6 py-2 uppercase text-sm hover:bg-[#d0a688] hover:text-black transition">
            View More
          </button>
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
