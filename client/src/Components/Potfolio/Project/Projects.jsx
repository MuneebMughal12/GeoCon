import { useNavigate } from "react-router-dom";

const projects = [
    {
        // 1
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",   
        path: "/projects/falcon-heights",

    },
    {
        // 2
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    { 
        // 3
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
        // 4
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
        // 5
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
        // 6

        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
        // 7

        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
        // 8

        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
        // 9

        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
        // 10
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
        // 11
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
        // 12
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
        // 13

        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
        // 14
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
         // 15
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
         // 16
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
         // 17
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
         // 18
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
         // 19
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
         // 20
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
           // 21
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
           // 22
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
           // 23
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
           // 24
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
              // 25
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
                // 26
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
                // 27
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
                // 28
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
                // 29
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
                // 30
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
                // 31
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
                // 32
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
                // 33
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
                // 34
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
                // 35
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
                // 36
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
                // 37   
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
                // 38
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
                // 39   
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
                // 40
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
        // 41
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
        // 42
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
        // 43
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
        // 44
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },
    {
        // 45
        name: "Falcon Heights",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/falcon-heights",
    },
    {
        // 46   
        name: "Blue Tower",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/blue-tower",
    },
    {
        // 47
        name: "Urban Nest",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/urban-nest",
    },
    {
        // 48   
        name: "Coastal Residency",
        image: "/Potfolio/falcon.jpg",
        path: "/projects/coastal-residency",
    },

];

export default function ProjectGallery() {
    const navigate = useNavigate();
  
    // zero-based indices
    const featuredIndices = new Set([1, 17,  24, 39]);
    const tallIndices     = new Set([20]); 


    return (
        <div className="bg-[#2a203c] text-white py-16 px-6">
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
                    Our Projects
                    </h1>
                </div>
            </div>
          {/* Heading */}
          <div className="text-center mb-40">
            <div className="w-28 h-1 bg-[#d0a688] mx-auto mt-3" />
          </div>
    
          {/* Single 4-col grid */}
          <div className="max-w-full mx-auto grid  grid-cols-4 auto-rows-[12rem] gap-4">
            {projects.map((proj, i) => {
              const isFeatured = featuredIndices.has(i);
              const isTall     = tallIndices.has(i);
              // featured wins over tall if both sets overlap
              const spanClass = isFeatured
                ? "col-span-2 row-span-2"
                : isTall
                ? "col-span-2"
                : "";
    
              return (
                <div
                  key={proj.path + i}
                  onClick={() => navigate(proj.path)}
                  className={`
                    relative overflow-hidden rounded-md cursor-pointer group
                    ${spanClass}
                  `}
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
    
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
                      {proj.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }