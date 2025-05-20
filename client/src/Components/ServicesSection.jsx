// src/components/ServicesAndProjects.jsx
import {
    FaCube,
    FaCameraRetro,
    FaDiceD6,
    FaVrCardboard,
    FaArrowRight,
  } from "react-icons/fa"
  import { useNavigate } from "react-router-dom"
  
  export default function ServicesAndProjects() {
    const navigate = useNavigate()
  
    const services = [
      {
        title: "3D Architectural Walkthrough Services",
        desc:  "A virtual 3D animation walkthrough service is the most effective and exceptional way of pre-visualizing your commercial or residential projects.",
        icon:  FaCube,
        path:  "/services/walkthrough",
      },
      {
        title: "3D Photo Realistic Rendering Services",
        desc:  "We pride ourselves on creating extremely detailed and well-defined photorealistic interiors and exteriors.",
        icon:  FaCameraRetro,
        path:  "/services/rendering",
      },
      {
        title: "3D Floor Plans Service",
        desc:  "3D floor plans contain all the information a 2D floor plan has and adds height to it. It conveys a lot more detail.",
        icon:  FaDiceD6,
        path:  "/services/floor-plans",
      },
      {
        title: "Virtual Reality",
        desc:  "Virtual reality is the most effective and exceptional way of pre-visualizing your commercial or residential project.",
        icon:  FaVrCardboard,
        path:  "/services/vr",
      },
    ]
  
    const projects = [
      { title: "Court Skyscraper", thumb: "/projects/roof-garden-lakeview07.jpg", path: "/projects/court-skyscraper" },
      { title: "The Walk",         thumb: "/projects/roof-garden-lakeview09.jpg", path: "/projects/the-walk" },
      { title: "Valor View",       thumb: "/projects/roof-garden-lakeview10.jpg", path: "/projects/valor-view" },
      { title: "Sky Towers",       thumb: "/projects/roof-garden-lakeview11.jpg", path: "/projects/sky-towers" },
      { title: "Green Acres",      thumb: "/projects/roof-garden-lakeview13.jpg", path: "/projects/green-acres" },
      { title: "Mehran Icon",      thumb: "/projects/roof-garden-lakeview09.jpg", path: "/projects/mehran-icon" },
      { title: "Arena Mall",       thumb: "/projects/roof-garden-lakeview10.jpg", path: "/projects/arena-mall" },
      { title: "Urban Oasis",      thumb: "/projects/roof-garden-lakeview11.jpg", path: "/projects/urban-oasis" },
      { title: "Vista Heights",    thumb: "/projects/roof-garden-lakeview13.jpg", path: "/projects/vista-heights" },
      { title: "PixArch Residence",thumb: "/projects/roof-garden-lakeview07.jpg", path: "/projects/pixarch-residence" },
      { title: "Court Mall",       thumb: "/projects/roof-garden-lakeview10.jpg", path: "/projects/court-mall" },
      { title: "Diamond Block",    thumb: "/projects/roof-garden-lakeview09.jpg", path: "/projects/diamond-block" },
      { title: "Golden Gardens",   thumb: "/projects/roof-garden-lakeview13.jpg", path: "/projects/golden-gardens" },
      { title: "Tower One",        thumb: "/projects/roof-garden-lakeview11.jpg", path: "/projects/tower-one" },
      { title: "Palm Vista",       thumb: "/projects/roof-garden-lakeview10.jpg", path: "/projects/palm-vista" },
      { title: "The Peaks",        thumb: "/projects/roof-garden-lakeview07.jpg", path: "/projects/the-peaks" },
    ]
  
    return (
      <>
        {/* --- OUR SERVICES --- */}
        <section className="bg-[#2a203e] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="md:flex md:justify-between md:items-end mb-12">
              <div>
                <h2 className="text-6xl font-bold text-[#d0a688]">OUR SERVICES</h2>
                <div className="w-20 border-t-2 border-gray-600 mt-2"></div>
              </div>
              <p className="mt-6 text-2xl md:mt-0 text-white italic max-w-md">
                We at Pixarch ensure that your projects are portrayed in the manner that is most unique and effective.
              </p>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {services.map(({ title, desc, icon: Icon, path }) => (
                <div
                  key={title}
                  onClick={() => navigate(path)}
                  className="border border-white p-6 space-y-4 hover:bg-white/10 cursor-pointer transition-colors duration-200"
                >
                  <Icon className="text-4xl text-white mx-auto" />
                  <h3 className="text-lg font-semibold text-center text-white">{title}</h3>
                  <p className="text-sm text-center text-white/90">{desc}</p>
                </div>
              ))}
            </div>
  
            <div className="text-center">
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center space-x-2 px-6 py-2 border border-[#d0a688] text-[#d0a688] font-medium rounded hover:bg-[#d0a688] hover:text-white transition-colors duration-200"
              >
                <span>View More Services</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
  
        {/* --- OUR PROJECTS --- */}
        <section className="bg-[#2a203e] py-20">
          <div className=" mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold text-[#d0a688]">OUR PROJECTS</h2>
              <div className="mt-2 w-20 border-t-2 border-gray-600 mx-auto"></div>
            </div>
  
            <div 

             className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 h-[70rem]">
              {projects.map(({ title, thumb, path }, i) => (
                <div
                  key={i}
                  onClick={() => navigate(path)}
                  className="group relative cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={thumb}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 text-center text-lg font-semibold text-white">
                      {title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="text-center">
              <button
                onClick={() => navigate("/portfolio/projects")}
                className="inline-flex items-center space-x-2 px-6 py-2 border border-[#d0a688] text-[#d0a688] font-medium rounded hover:bg-[#d0a688] hover:text-white transition-colors duration-200"
              >
                <span>View More Projects</span>
                <FaArrowRight />
              </button>
            </div>
          </div>ee
        </section>
      </>
    )
  }
  