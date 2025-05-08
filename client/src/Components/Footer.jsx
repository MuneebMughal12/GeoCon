import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaVimeoV,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#2A1D32] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <img src="/logo.png" alt="Pixarch Logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Presenting you the world of tomorrow, today. We are determined in
            our passion for creation by creating value in prime real-estate
            since 2005. Pixarch is a multinational 3D architectural
            visualization and rendering services company.
          </p>
          <p className="mt-6 font-semibold text-[#d0a688]">STAY CONNECTED</p>
          <div className="flex space-x-4 mt-2 text-xl">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaVimeoV className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#d0a688] font-semibold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => navigate("/about")} className="hover:underline">
                Who We Are
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/careers")} className="hover:underline">
                Careers
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/projects")} className="hover:underline">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/gallery")} className="hover:underline">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/contact")} className="hover:underline">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Pakistan Offices */}
        <div>
          <h4 className="text-[#d0a688] font-semibold mb-4">PAKISTAN</h4>
          <div className="text-sm text-gray-300 space-y-3">
            <div>
              <p><strong className="text-white">Head Office (Islamabad):</strong></p>
              <p>Unit no. 5, 1st Floor, Building 16-C, 14th Stadium Commercial Street,<br />Khayaban-e-Shamsheer, Phase V, Karachi.</p>
              <p>Phone: <a href="tel:+922135856275" className="text-white">+922135856275</a></p>
              <p>Fax: <span className="text-white">+92-21-35856277</span></p>
              <p>Mobile: <a href="tel:+923248233065" className="text-white">+92-324-8233065</a></p>
              <p>Email: <a href="mailto:info@pixarch.net" className="text-white">info@pixarch.net</a></p>
            </div>

            <div>
              <p><strong className="text-white">Bahria Town Islamabad:</strong></p>
              <p>Office No. 306, 3rd Floor, Dominion Business Center 1, Jinnah Avenue.</p>
            </div>

            <div>
              <p><strong className="text-white">ISlamabad Address:</strong></p>
              <p>29-A, Block C-3, M.M. Alam Road, Gulberg III, Lahore.</p>
              <p>Phone: <a href="tel:+924235772207" className="text-white">+924235772207</a></p>
              <p>Mobile: <a href="tel:+923215664204" className="text-white">+923215664204</a></p>
              <p>Email: <a href="mailto:info@pixarch.net" className="text-white">info@geogroup.pk</a></p>
            </div>
          </div>
        </div>

        {/* UK Office */}
        <div>
          <h4 className="text-[#d0a688] font-semibold mb-4">UNITED KINGDOM (UK)</h4>
          <p className="text-sm text-gray-300">
            Email: <a href="mailto:info@pixarch.net" className="text-white">info@geogroup.pk</a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © COPYRIGHT {new Date().getFullYear()} MUneebAiz. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
