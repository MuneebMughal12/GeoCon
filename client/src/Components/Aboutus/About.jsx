import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function IntroSection() {
    return (
        <div>
        <section>
        {/* Top Heading Section */}
        <div className="bg-[#2A1D32] text-white py-52 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide uppercase">
            Pioneers of Architectural 3D Rendering Services
          </h2>
        </div>
  
        {/* Description Paragraph */}
        <div className="bg-white py-16 px-6 text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Pixarch began its journey as a hobby in February 2005 and gradually formulated into a business unit in September 2005. <br />
            During this journey, Pixarch enjoyed its work and created sense of motivation and improved standards for its clients by providing them superior state-of-the-art quality work. <br />
            The beginning of the turning point of the Architectural 3d Rendering was the result of firm devotion to its mission statement and beliefs.
          </p>
        </div>
          
      </section>
{/* slider section  */}
<section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/aboutussilder.jpg')" }}
    >
      {/* Overlay for readability (optional) */}
      <div className="bg-black/70 w-full h-full">
        {/* Our Approach Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20 items-center text-white">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold uppercase mb-6">
              Our Approach
            </h2>
            <p className="text-2xl  text-gray-300 leading-relaxed mb-3">
              We at Pixarch, before inception, spread out to search for the best.
              Not just in terms of what we do but how we do it. We have in store
              the best tools and are constantly in search of upgrades.
            </p>
            <p className= " text-2xl text-gray-300 leading-relaxed">
              This is done so to provide our clients the best possible outcomes to
              cater to their needs as well as doing it effectively and efficiently.
            </p>
          </div>
        </div>

        {/* Why Pixarch Swiper */}
        <div className="py-12">
          <h3 className="text-center text-2xl font-semibold uppercase text-white mb-8">
            <span className="border-b-2 border-[#d0a688] pb-1">Why Pixarch</span>
          </h3>

          <div className="max-w-7xl mx-auto px-6">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              pagination={{ clickable: true }}
            >
              {[
                { title: "VALUE ADDED", subtitle: "APPROACH" },
                { title: "1000+", subtitle: "SUCCESSFULLY DELIVERED PROJECTS" },
                { title: "360", subtitle: "MARKETING & BRANDING SOLUTIONS" },
                { title: "ALL FACILITIES", subtitle: "UNDER ONE ROOF" },
                { title: "2000+", subtitle: "RENDERING CORES" },
              ].map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="border border-white text-center py-6 px-4 text-white hover:bg-white hover:text-black transition flex flex-col justify-center items-center h-56">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-sm mt-1 uppercase">{item.subtitle}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>

<section   className=" text-white">
      {/* OUR VALUES */}
      <div className="bg-[#f5f5f5] py-16 text-center">
        <h3 className="text-2xl font-bold uppercase text-[#2A1D32] mb-8">
          Our Values
        </h3>
        <div className="max-w-5xl mx-auto  h:full md:h-36  grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {[
            "RESPONSIBILITY & RELIABILITY",
            "HONESTY & INTEGRITY",
            "COMMITMENT PASSION FOR EXCELLENCE",
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white flex justify-center items-center py-6 px-4 border-b-4  border-[#d0a688] text-[#2A1D32] font-semibold uppercase text-sm tracking-wide shadow-md"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* “WE PROMISE TO DELIVER THE BEST QUALITY WORK ON TIME AND WITHIN YOUR BUDGET” section  */}
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/aboutussilder.jpg')" }} // Adjust image path
    >
      <div className="text-center text-white max-w-4xl">
        <div className="w-20 h-[2px] bg-[#d0a688] mx-auto mb-4" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-relaxed">
          “We promise to deliver the best quality work on time and within your budget”
        </h2>
        <div className="w-20 h-[2px] bg-[#d0a688] mx-auto mt-4" />
      </div>
    </section>
      </div>
    );
  }
  