import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    title: "6 Best Ways Of Marketing To Sell Real Estate Projects",
    date: "July 10, 2023",
    category: "Real Estate Marketing",
    image: "/blog/marketing.jpg",
    path: "/blog/marketing-tips",
    height: 10,
  },
  {
    title: "Reasons Why Invest in 3D Architectural Rendering Services?",
    date: "July 4, 2023",
    category: "Architectural Visualization",
    image: "/blog/invest3d.jpg",
    path: "/blog/invest-3d-rendering",
  },
  {
    title: "Importance Of Light and Shadow in Architectural Visualization",
    date: "June 29, 2023",
    category: "Architectural Visualization",
    image: "/blog/light-shadow.jpg",
    path: "/blog/light-shadow-visualization",
  },  {
    title: "6 Best Ways Of Marketing To Sell Real Estate Projects",
    date: "July 10, 2023",
    category: "Real Estate Marketing",
    image: "/blog/marketing.jpg",
    path: "/blog/marketing-tips",
  },
  {
    title: "Reasons Why Invest in 3D Architectural Rendering Services?",
    date: "July 4, 2023",
    category: "Architectural Visualization",
    image: "/blog/invest3d.jpg",
    path: "/blog/invest-3d-rendering",
  },
  {
    title: "Importance Of Light and Shadow in Architectural Visualization",
    date: "June 29, 2023",
    category: "Architectural Visualization",
    image: "/blog/light-shadow.jpg",
    path: "/blog/light-shadow-visualization",
  },  {
    title: "6 Best Ways Of Marketing To Sell Real Estate Projects",
    date: "July 10, 2023",
    category: "Real Estate Marketing",
    image: "/blog/marketing.jpg",
    path: "/blog/marketing-tips",
  },
  {
    title: "Reasons Why Invest in 3D Architectural Rendering Services?",
    date: "July 4, 2023",
    category: "Architectural Visualization",
    image: "/blog/invest3d.jpg",
    path: "/blog/invest-3d-rendering",
  },
  {
    title: "Importance Of Light and Shadow in Architectural Visualization",
    date: "June 29, 2023",
    category: "Architectural Visualization",
    image: "/blog/light-shadow.jpg",
    path: "/blog/light-shadow-visualization",
  },  {
    title: "6 Best Ways Of Marketing To Sell Real Estate Projects",
    date: "July 10, 2023",
    category: "Real Estate Marketing",
    image: "/blog/marketing.jpg",
    path: "/blog/marketing-tips",
  },
  {
    title: "Reasons Why Invest in 3D Architectural Rendering Services?",
    date: "July 4, 2023",
    category: "Architectural Visualization",
    image: "/blog/invest3d.jpg",
    path: "/blog/invest-3d-rendering",
  },
  {
    title: "Importance Of Light and Shadow in Architectural Visualization",
    date: "June 29, 2023",
    category: "Architectural Visualization",
    image: "/blog/light-shadow.jpg",
    path: "/blog/light-shadow-visualization",
  },  {
    title: "6 Best Ways Of Marketing To Sell Real Estate Projects",
    date: "July 10, 2023",
    category: "Real Estate Marketing",
    image: "/blog/marketing.jpg",
    path: "/blog/marketing-tips",
  },
  {
    title: "Reasons Why Invest in 3D Architectural Rendering Services?",
    date: "July 4, 2023",
    category: "Architectural Visualization",
    image: "/blog/invest3d.jpg",
    path: "/blog/invest-3d-rendering",
  },
  {
    title: "Importance Of Light and Shadow in Architectural Visualization",
    date: "June 29, 2023",
    category: "Architectural Visualization",
    image: "/blog/light-shadow.jpg",
    path: "/blog/light-shadow-visualization",
  },  {
    title: "6 Best Ways Of Marketing To Sell Real Estate Projects",
    date: "July 10, 2023",
    category: "Real Estate Marketing",
    image: "/blog/marketing.jpg",
    path: "/blog/marketing-tips",
  },
  {
    title: "Reasons Why Invest in 3D Architectural Rendering Services?",
    date: "July 4, 2023",
    category: "Architectural Visualization",
    image: "/blog/invest3d.jpg",
    path: "/blog/invest-3d-rendering",
  },
  {
    title: "Importance Of Light and Shadow in Architectural Visualization",
    date: "June 29, 2023",
    category: "Architectural Visualization",
    image: "/blog/light-shadow.jpg",
    path: "/blog/light-shadow-visualization",
  },

];

export default function BlogGrid() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative h-[300px] bg-[#32213C]">
        <div className="absolute inset-0 bg-[#32213C] opacity-80 blur-sm" />
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Latest Blogs
          </h1>
          <p className="text-white text-sm">Explore industry insights and tips</p>
        </div>
      </div>

      <section className="bg-white py-16 px-4">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                onClick={() => navigate(post.path)}
                style={{ height: `${post.height}rem` }} // ⬅ manual height in rem
                className="cursor-pointer bg-white shadow-sm hover:shadow-md transition rounded overflow-hidden border border-gray-100 flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover h-[50%]" // image takes 50% of card height
                />
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <p className="text-[11px] uppercase text-[#d0a688] font-semibold">
                    {post.category}
                  </p>
                  <h3 className="text-[13px] font-bold mt-1 text-[#2a203c] leading-tight line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-auto">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
