// App.jsx or GallerySection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
  { image: "/gallery/img1.jpg", path: "/gallery/virtual-walkthrough" },
  { image: "/gallery/img2.jpg", path: "/gallery/interior-renderings" },
  { image: "/gallery/img3.jpg", path: "/gallery/floor-plans" },
  { image: "/gallery/img1.jpg", path: "/gallery/virtual-walkthrough" },
  { image: "/gallery/img2.jpg", path: "/gallery/interior-renderings" },
  { image: "/gallery/img3.jpg", path: "/gallery/floor-plans" },
];

const services = [
  {
    title: "VIRTUAL WALKTHROUGH",
    image: "/gallery/walk.jpg",
    path: "/gallery/virtual-walkthrough",
  },
  {
    title: "INTERIOR RENDERINGS",
    image: "/gallery/interior.jpg",
    path: "/gallery/interior-renderings",
  },
  {
    title: '4K ULTRA HD RENDERING',
    image: '/gallery/ultra4k.jpg',
    path: '/gallery/4k-ultra-hd-rendering',
  },
];

export default function GalleryWithLightbox() {
  // const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>

      <div className="relative h-[400px] bg-[#32213C]">
        {/* Blurred purple layer (optional visual effect) */}
        <div className="absolute inset-0 bg-[#32213C] opacity-80 blur-sm" />

        {/* Centered content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          VIRTUAL WALKTHROUGH
          </h1>
          <p className="text-lg text-white">
            Gallery
          </p>

        </div>
      </div>
      <div className="relative">
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-8"
        >
          {galleryImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                onClick={() => setSelectedImg(item.image)}
                className="w-full h-[300px] object-cover rounded shadow cursor-pointer"
                alt={`Gallery ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedImg && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-[#d0a688] transition"
            >
              &times;
            </button>

            {/* Enlarged Image */}
            <img
              src={selectedImg}
              className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
              alt="Enlarged view"
            />
          </div>
        )}

      </div>

      {/* Quote Section */}
      <div className="bg-[#32213C] text-white py-16 px-6 mt-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Request A Quote</h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="p-3 bg-white text-black rounded" />
          <input type="text" placeholder="Last Name" className="p-3 bg-white text-black rounded" />
          <input type="email" placeholder="Email" className="p-3 bg-white text-black rounded col-span-2" />
          <button type="submit" className="bg-[#d0a688] text-white py-2 px-6 rounded col-span-2">
            Send Request
          </button>
        </form>
      </div>

      {/* Service Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        {services.map((service, i) => (
          <div
            key={i}
            onClick={() => navigate(service.path)}
            className="relative h-72 cursor-pointer overflow-hidden group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg font-bold uppercase text-center">{service.title}</h3>
              <p className="mt-2 text-xs tracking-wider uppercase">View Gallery →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}