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
                { name: "2D & 3D Floor Plans", path: "/services/3d-floor-plans" },
                { name: "3D Virtual Walkthroughs", path: "/services/virtual-walkthroughs" },
                { name: "Augmented Reality", path: "/services/augmented-reality" },
                { name: "Photorealistic 3D Views", path: "/services/3d-views" },
                { name: "Visual Design", path: "/services/visual-design" },
                { name: "Virtual Reality", path: "/services/virtual-reality" },
                { name: "Advertising Solutions", path: "/services/advertising" },
                { name: "Digital Composition", path: "/services/digital-compositing" },
                { name: "Live Presenter", path: "/services/live-presenter" },
                { name: "Pix Touch", path: "/services/pix-touch" },
                { name: "Print Media Design", path: "/services/print-media" },
                { name: "Web Development", path: "/services/web-design" },
            ],
        },
    ];

    const rightNav = [
        {
            name: "Portfolio",
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
                                                <ul className="absolute left-0 top-full mt-2 w-48 bg-[#33213c] text-[#d0a688] rounded shadow-lg z-50">
                                                    {item.dropdown.map((svc) => (
                                                        <li
                                                            key={svc.path}
                                                            onClick={() => {
                                                                navigate(svc.path);
                                                                setServicesOpen(false);
                                                            }}
                                                            className="px-4 py-2  hover:bg-[#2a203c] text-base cursor-pointer"
                                                        >
                                                            {svc.name}
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
                {/* backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity ${isOpen ? "opacity-50" : "opacity-0"
                        }`}
                    onClick={() => setIsOpen(false)}
                />

                {/* drawer panel */}
                <div
                    className={`
      relative ml-auto w-64 h-full bg-[#32213C] p-6
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
                >
                    {/* close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-white text-2xl"
                    >
                        &times;
                    </button>

                    {/* mobile nav links */}
                    <nav className="mt-12 space-y-6">
                        {[...leftNav, ...rightNav].map((item) => (
                            <div key={item.name}>
                                {/* top‐level link */}
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-xl font-medium text-[#d0a688] hover:underline"
                                >
                                    {item.name}
                                </Link>

                                {/* optional sub‐links */}
                                {/* {item.dropdown && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {item.dropdown.map((sub, i) => {
                                            const label = typeof sub === "string" ? sub : sub.name;
                                            const to =
                                                typeof sub === "string"
                                                    ? `${item.path}/${label
                                                        .toLowerCase()
                                                        .replace(/ & | /g, "-")}`
                                                    : sub.path;

                                            return (
                                                <Link
                                                    key={i}
                                                    to={to}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block text-white text-base hover:text-[#d0a688]"
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )} */}
                                {item.dropdown && (
                                    <div className="ml-4 mt-2 …">
                                        {item.dropdown.map((sub) => (
                                            <Link
                                                key={sub.path}
                                                to={sub.path}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-white text-base hover:text-[#d0a688]"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
