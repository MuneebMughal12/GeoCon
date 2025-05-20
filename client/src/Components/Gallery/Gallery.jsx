import { useNavigate } from 'react-router-dom';

const galleryItems = [
  {
    title: 'VIRTUAL WALKTHROUGH',
    image: '/gallery/walkthrough.jpg',
    path: '/gallery/virtual-walkthrough',
  },
  {
    title: 'EXTERIOR RENDERINGS',
    image: '/gallery/exterior.jpg',
    path: '/gallery/exterior-renderings',
  },
  {
    title: 'INTERIOR RENDERINGS',
    image: '/gallery/interior.jpg',
    path: '/gallery/interior-renderings',
  },
  {
    title: '3D FLOOR PLANS',
    image: '/gallery/floorplans.jpg',
    path: '/gallery/3d-floor-plans',
  },
  {
    title: 'WEB DESIGN',
    image: '/gallery/webdesign.jpg',
    path: '/gallery/web-design',
  },
  {
    title: 'PIX TOUCH',
    image: '/gallery/pixtouch.jpg',
    path: '/gallery/pix-touch',
  },
  {
    title: 'VISUAL DESIGN',
    image: '/gallery/visual.jpg',
    path: '/gallery/visual-design',
  },
  {
    title: 'TVC',
    image: '/gallery/tvc.jpg',
    path: '/gallery/tvc',
  },
  {
    title: 'LIVE PRESENTER',
    image: '/gallery/livepresenter.jpg',
    path: '/gallery/live-presenter',
  },
  {
    title: '4K ULTRA HD RENDERING',
    image: '/gallery/ultra4k.jpg',
    path: '/gallery/4k-ultra-hd-rendering',
  },
];

export default function GalleryGrid() {
  const navigate = useNavigate();

  return (
    <div>

<div className="relative h-[400px] bg-[#32213C]">
                {/* Blurred purple layer (optional visual effect) */}
                <div className="absolute inset-0 bg-[#32213C] opacity-80 blur-sm" />

                {/* Centered content */}
                <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Gallery
                    </h1>
                   
                </div>
            </div>
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="relative cursor-pointer group overflow-hidden h-72"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition duration-300 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl text-white font-bold tracking-wide mb-2 px-2">
                {item.title}
              </h3>
              <span className="text-sm text-white border border-white px-4 py-1 rounded-full">
                VIEW GALLERY →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
