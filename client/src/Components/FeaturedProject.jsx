import { useState } from "react"
import { FaArrowRight, FaPlay } from "react-icons/fa"
import ReactPlayer from "react-player/youtube"

export default function FeaturedProject() {
  const slide = {
    title:    "The Court Skyscraper",
    button:   "EXPLORE PROJECT",
    thumb:    "/heroimg/slider1.jpg",                   
    videoUrl: "https://www.youtube.com/embed/dwtyeZi1328", 
  }

  const [playing, setPlaying] = useState(false)

  return (
    <div>
    <section className="bg-[#32213C] text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Text Column */}
        <div className="space-y-6">
          <p className="uppercase text-sm font-semibold text-gray-400">
            Featured Project
          </p>
          <h2 className="text-4xl font-bold tracking-tight">
            {slide.title.toUpperCase()}
          </h2>
          <div className="w-16 border-t-2 border-gray-600"></div>
          <p className="text-gray-200 leading-relaxed">
            We at Pixarch, are the leaders in architectural animation, longest-serving
            and the most trusted company of the country, a powerhouse elevating your
            brand to the highest pedestal with our contemporary 360-degree campaigns.
            Recently, we have designed a 360-degree campaign for a high-end edifice of
            the metropolitan city, The Court Skyscraper. After burrowing deep with our
            team of master crafters, we emulated reality through every ray of light,
            surface texture, and finish and delivered an impeccable result. Using the
            holistic marketing philosophy, we have positioned the brand perfectly.
            After burrowing deep into insights, we have created a systematic
            customer touchpoint array starting from Brand Identity to Realistic
            3D Views, 2D and 3D Floor Plans, Print and Outdoor Design to Realistic
            3D Architectural Walkthrough for both social and electronic media.
          </p>
          <p className="text-gray-200">
            We have created an ultimate brand, <span className="font-semibold">{slide.title}</span>.
          </p>
          <button className="inline-flex items-center space-x-2 text-[#d0a688] font-semibold hover:underline">
            <span>{slide.button}</span>
            <FaArrowRight />
          </button>
        </div>

          {/* Video Column */}
                <div className="relative group overflow-hidden rounded-lg">
                  {!playing ? (
                    <>
                      <img
                        src={slide.thumb}
                        alt={slide.title}
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-black/40 flex items-center justify-center
                                   opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <button
                          onClick={() => setPlaying(true)}
                          className="p-4 bg-[#d0a688]/80 rounded-full"
                        >
                          <FaPlay className="text-white text-2xl" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <ReactPlayer
                      url={slide.videoUrl}
                      playing
                      controls
                      width="100%"
                      height="100%"
                      className="aspect-video"
                    />
                  )}
                </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-[#32213C] leading-tight">
            Pioneers of Architectural Visualization
            <br />
            & 3D Rendering
          </h2>

          <p className="text-gray-700">
            Pixarch brings your designs to life.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Pixarch is a one-stop-destination for all your Architectural
            Visualization, 3D animation, 3D Rendering & 3D home design
            service needs. We value your project & aim to bring out
            the true colours & breathe life in it.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Operating since 2005, Pixarch holds an outclass creative
            edge in 3D architectural rendering services with
            operations in Pakistan, Saudi Arabia & UK. Completed
            successful projects from clients all across the globe. We
            provide numerous other services as well to enhance your
            output, save time, money and offer value at every step.
            Have a look at offered services & portfolio or connect
            with us for consultation.
          </p>

          <button className="inline-flex items-center space-x-2 border border-[#32213C] text-[#32213C] px-6 py-2 rounded hover:bg-[#32213C] hover:text-white transition">
            <span>Read More</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Right: Illustration/Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/3dsketch.png"  
            alt="Architectural Sketch"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
    </div>
  )
}
