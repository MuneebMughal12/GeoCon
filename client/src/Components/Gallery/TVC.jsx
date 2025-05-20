// App.jsx or GallerySection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = [
    {
        title: "RETAL SQUARE | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "EWAN AL QAYRAWAN | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "SABS GROUP | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "AL-MARSA | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "SABS GROUP | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "AL-MARSA | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "AL-MARSA | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "SABS GROUP | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
    {
        title: "AL-MARSA | PIX TOUCH PRESENTATION",
        thumbnail: "/black.jpg",
        videoUrl: "https://www.youtube.com/embed/dwtyeZi1328",
    },
];

const services = [
    {
        title: 'LIVE PRESENTER',
        image: '/gallery/livepresenter.jpg',
        path: '/gallery/live-presenter',
      },
      {
        title: 'VIRTUAL WALKTHROUGH',
        image: '/gallery/walkthrough.jpg',
        path: '/gallery/virtual-walkthrough',
      },
      {
        title: '4K ULTRA HD RENDERING',
        image: '/gallery/ultra4k.jpg',
        path: '/gallery/4k-ultra-hd-rendering',
      },
];

export default function GalleryWithLightbox() {
    const navigate = useNavigate();
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div>

            <div className="relative h-[400px] bg-[#32213C]">
                {/* Blurred purple layer (optional visual effect) */}
                <div className="absolute inset-0 bg-[#32213C] opacity-80 blur-sm" />

                {/* Centered content */}
                <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">

                        TVC 
                    </h1>
                    <p className="text-lg text-white">
                       Vedio Gallery
                    </p>

                </div>
            </div>
            {/* Vedio section  */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
                    {videos.slice(0, 9).map((vid, i) => ( // 👈 Ensure max 4 items
                        <div key={i} className="text-center">
                            <div
                                className="relative cursor-pointer"
                                onClick={() => setSelectedVideo(vid.videoUrl)}
                            >
                                <img
                                    src={vid.thumbnail}
                                    alt={vid.title}
                                    className="w-full h-[220px] object-cover rounded shadow"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition">
                                    <div className="text-white text-5xl">▶</div>
                                </div>
                            </div>
                            <p className="mt-3 text-sm font-bold text-[#2a203c] uppercase">
                                {vid.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Lightbox Overlay */}
                {selectedVideo && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-[#d0a688] transition"
                        >
                            &times;
                        </button>
                        <div className="w-[90vw] h-[70vh] max-w-4xl relative">
                            <iframe
                                src={selectedVideo}
                                title="YouTube video"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                className="w-full h-full rounded"
                            />
                        </div>
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