import { useNavigate } from "react-router-dom";

const services = [
    {
        title: "3D ARCHITECTURAL WALKTHROUGH SERVICES",
        description:
            "A virtual 3D animation walkthrough service is the most effective and exceptional way of pre-visualizing your commercial or residential projects.",
        path: "/services/3d-walkthrough",
    },
    {
        title: "LIVE PRESENTER",
        description:
            "Live Presenter is one such architectural solution that allows us to superimpose real people onto a computer-generated background.",
        path: "/services/live-presenter",
    },
    {
        title: "VISUAL DESIGN",
        description:
            "We believe in the art of attraction. An elegantly designed video enhances curiosity by Visual Design services.",
        path: "/services/visual-design",
    },
    {
        title: "DIGITAL COMPOSITING",
        description:
            "Imagine being able to insert an artificially created architecture into real footage with physically correct lighting.",
        path: "/services/digital-compositing",
    },
    {
        title: "PRINT MEDIA DESIGNING",
        description:
            "Elegantly designed identities, brochures, catalogues, etc. about the brand and business it represents.",
        path: "/services/print-media",
    },
    {
        title: "3D PHOTO REALISTIC RENDERING SERVICES",
        description:
            "We pride ourselves on creating extremely detailed and well-oriented photorealistic interiors and exteriors.",
        path: "/services/photo-rendering",
    },
    {
        title: "ADVERTISING SOLUTIONS",
        description:
            "Advertising is the single most powerful form of communication that introduces a product to the masses.",
        path: "/services/advertising",
    },
    {
        title: "3D FLOOR PLANS SERVICE",
        description:
            "3D floor plan contains the information as 2D floor plan has and adds the height to it. A money & time saver.",
        path: "/services/3d-floor-plans",
    },
    {
        title: "WEB DESIGN",
        description:
            "Create an online presence. With increasing Internet connectivity, helps customers reach out.",
        path: "/services/web-design",
    },
    {
        title: "PIX TOUCH (TOUCH SCREEN PRESENTATION SOLUTION)",
        description:
            "Pixarch now offers touch screen presentation solutions. Captivate your audience in the most interactive manner.",
        path: "/services/pix-touch",
    },
    {
        title: "AUGMENTED REALITY",
        description:
            "Augmented Reality service has completely changed the traditional methods and techniques of visualization.",
        path: "/services/augmented-reality",
    },
    {
        title: "VIRTUAL REALITY",
        description:
            "Virtual reality is the most effective and exceptional way of pre-visualizing your commercial or residential project.",
        path: "/services/virtual-reality",
    },
];

export default function ServicesPage() {
    const navigate = useNavigate();

    return (
        <div className="text-white">
            {/* Top Section */}
            <div className="bg-[#32213C] text-center py-40">
                <h1 className="text-5xl font-bold uppercase mb-2">Our Services</h1>
                <p className=" text-3xl text-gray-300">
                    We provide a bouquet of 3D rendering, animation & design services that can be tailored to meet your company’s needs.
                </p>
            </div>

            {/* We at Pixarch Section with Background Image and Black Blur Overlay */}
            <div
                className="relative bg-cover bg-center py-20 px-6 text-white"
                style={{ backgroundImage: "url('/Services/3darchitecture.jpg')" }}
            >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-85"></div>

                {/* Content over the Overlay */}
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* left column: H2 */}
                        <div className="text-center md:text-left">
                            <h2 className="text-7xl font-bold">
                                <span className="text-[#d0a688]">WE AT</span> PIXARCH
                            </h2>
                        </div>

                        {/* right column: paragraph */}
                        <div className="text-center md:text-right">
                            <p className="text-5xl font-medium">
                                ENSURE THAT YOUR PROJECTS ARE PORTRAYED IN THE MANNER THAT IS MOST UNIQUE AND EFFECTIVE
                            </p>
                        </div>
                    </div>


                    {/* Services Grid */}
                    <div className="max-w-7xl py-44 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                onClick={() => navigate(service.path)}
                                className="border border-white p-6 hover:bg-white hover:text-black cursor-pointer transition text-center h-full flex flex-col justify-between"
                            >
                                <h3 className="text-lg font-bold mb-2 uppercase">{service.title}</h3>
                                <p className="text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* Since 2005 Section */}
                    <div className=" py-12 text-center text-[#d0a688]">
                        <h3 className="text-5xl font-semibold max-w-5xl mx-auto px-6">
                            SINCE 2005, PIXARCH HAS BROUGHT LIFE TO MANY OF THE LANDMARKS AROUND BEFORE THEY EVEN BEGAN. IT'S HOW WE WORK!
                        </h3>
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
