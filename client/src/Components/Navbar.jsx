import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [servicesOpen, setServicesOpen] = useState(false);
    const [portfolioOpen, setPortfolioOpen] = useState(false);
    const servicesTimerRef = useRef(null);
    const portfolioTimerRef = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(servicesTimerRef.current);
            clearTimeout(portfolioTimerRef.current);
        };
    }, []);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const baseText = scrolled ? "text-[#d0a688]" : "text-[#d0a688]";
    const baseBg = scrolled ? "bg-[#32213C] shadow-md" : "";


    const leftNav = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        {
            name: "Services",
            path: "/services",
            dropdown: [
                "2D & 3D Floor Plans",
                "3D Virtual Walkthroughs",
                "Augmented Reality",
                "Photorealistic 3D Views",
                "Visual Design",
                "Virtual Reality",
                "Advertising Solutions",
                "Digital Composition",
                "Live Presenter",
                "Pix Touch",
                "Print Media Design",
                "Web Development",
            ],
        },
    ];

    const rightNav = [
        {
            name: "Portfolio",
            path: "/portfolio",
            dropdown: [
                { name: "Projects", path: "/portfolio/projects" },
                { name: "Gallery", path: "/portfolio/gallery" },
            ],
        },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    const socialItems = [
        { Icon: FaTwitter, hover: "hover:text-blue-500" },
        { Icon: FaFacebookF, hover: "hover:text-blue-700" },
        { Icon: FaLinkedinIn, hover: "hover:text-blue-600" },
        { Icon: FaYoutube, hover: "hover:text-red-600" },
        { Icon: FaInstagram, hover: "hover:text-pink-500" },
    ]

    return (
        <>
            <nav className={`fixed top-0 w-full h-24 z-50 transition-colors duration-300 ${baseBg}`}>
                <div style={{ maxWidth: "107rem" }} className="relative mx-auto px-6 py-4">
                    {/* Social icons */}
                    <div className="absolute text-xl hidden left-0 top-1/2 transform -translate-y-1/2 md:flex space-x-3">
                        {socialItems.map(({ Icon, hover }, i) => (
                            <Icon
                                key={i}
                                className={`${baseText} ${hover} cursor-pointer transition-colors`}
                            />
                        ))}
                    </div>
                    {/* absolute hidden left-0 top-1/2 transform -translate-y-1/2 md:flex space-x-3 */}
                    {/* Center nav */}
                    <div className="hidden md:flex items-center justify-center space-x-12">
                        {/* Left nav */}
                        <ul className={`hidden lg:flex items-center space-x-6 text-xl font-medium ${baseText}`}>
                            {leftNav.map((item) => (
                                <li
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => {
                                        if (item.dropdown) {
                                            clearTimeout(servicesTimerRef.current);
                                            setServicesOpen(true);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (item.dropdown) {
                                            servicesTimerRef.current = setTimeout(() => setServicesOpen(false), 1000);
                                        }
                                    }}
                                >
                                    {!item.dropdown ? (
                                        <button
                                            onClick={() => navigate(item.path)}
                                            className={`inline-block pb-1 border-b-2 border-transparent ${location.pathname === item.path ? "border-white" : ""
                                                } hover:border-white`}
                                        >
                                            {item.name}
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => navigate(item.path)}
                                                className="inline-block pb-1 cursor-pointer hover:border-white border-b-2 border-transparent"
                                            >
                                                {item.name}
                                            </button>

                                            {servicesOpen && (
                                                <ul className="absolute left-0 top-full mt-2 w-64 bg-[#33213c] text-[#d0a688] rounded-md shadow-lg z-50">
                                                    {item.dropdown.map((text, i) => (
                                                        <li key={i} className="px-4 py-2 hover:bg-[#2a203c] text-base">
                                                            {text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Logo */}
                        <Link to="/">
                            <img src={Logo} alt="Logo" className="h-10 w-auto" />
                        </Link>

                        {/* Right nav */}
                        <ul className={`hidden lg:flex items-center space-x-6 text-xl font-medium ${baseText}`}>
                            {rightNav.map((item) => (
                                <li
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => {
                                        if (item.dropdown) {
                                            clearTimeout(portfolioTimerRef.current);
                                            setPortfolioOpen(true);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (item.dropdown) {
                                            portfolioTimerRef.current = setTimeout(() => setPortfolioOpen(false), 1000);
                                        }
                                    }}
                                >
                                    {!item.dropdown ? (
                                        <button
                                            onClick={() => navigate(item.path)}
                                            className={`inline-block pb-1 border-b-2 border-transparent ${location.pathname === item.path ? "border-white" : ""
                                                } hover:border-white`}
                                        >
                                            {item.name}
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => navigate(item.path)}
                                                className="inline-block pb-1 cursor-pointer hover:border-white border-b-2 border-transparent"
                                            >
                                                {item.name}
                                            </button>

                                            {portfolioOpen && (
                                                <ul className="absolute left-0 top-full mt-2 w-40 bg-[#33213c] text-[#d0a688] rounded shadow-lg z-50">
                                                    {item.dropdown.map((sub, i) => (
                                                        <li
                                                            key={i}
                                                            onClick={() => navigate(sub.path)}
                                                            className="px-4 py-2 hover:bg-[#2a203c] text-base cursor-pointer"
                                                        >
                                                            {sub.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hamburger */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden">
                        <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen((o) => !o)} />
                    </div>
                </div>
            </nav>

            {/* Sidebar Drawer */}
            <div className={`fixed inset-0 z-40 flex ${isOpen ? "" : "pointer-events-none"}`}>

                <div
                    className={`absolute inset-0 bg-black transition-opacity ${isOpen ? "opacity-50" : "opacity-0"
                        }`}
                    onClick={() => setIsOpen(false)}
                />
                <div
                    className={`
            relative ml-auto w-80 max-w-full h-full
            bg-[#32213C] text-white p-6
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
                >
                    <h2 className="text-xl font-bold mb-4">REQUEST A CALL BACK</h2>
                    <p className="text-gray-300 mb-6">
                        If you have any requirements for 3D design &amp; 3D rendering service… our team is there to guide you 24/7.
                    </p>
                    <form className="flex flex-col space-y-4">
                        <input type="text" placeholder="Full Name" className="bg-white text-gray-800 p-3 rounded" />
                        <input type="tel" placeholder="Contact Number" className="bg-white text-gray-800 p-3 rounded" />
                        <input type="email" placeholder="Email Address" className="bg-white text-gray-800 p-3 rounded" />
                        <textarea placeholder="Your Message" className="bg-white text-gray-800 p-3 rounded h-24" />
                        <button type="submit" className="bg-[#d0a688] hover:bg-[#b38b72] text-white py-2 rounded mt-2">
                            SEND MESSAGE
                        </button>
                    </form>
                    <div className="flex items-center justify-center space-x-3 mt-8">
                        {[FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, i) => (
                            <Icon key={i} className="cursor-pointer" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
