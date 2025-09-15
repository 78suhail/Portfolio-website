import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Footer() {

    const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 mt-6">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Suhail</h2>
            <p className="text-gray-400 leading-relaxed">
              MERN Stack Developer focused on building modern, scalable, and
              user-friendly web applications. Passionate about solving
              real-world problems with clean, maintainable code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
            
              <li>
                <Link to="/projects" className="hover:text-pink-500" onClick={scrollToTop} >
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-pink-500" onClick={scrollToTop}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="blog" className="hover:text-pink-500" onClick={scrollToTop}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-500" onClick={scrollToTop} >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources / Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
         
              <li>
                <Link to="/#services" className="hover:text-pink-500" >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="hover:text-pink-500">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-pink-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:suhailrana@gmail.com"
                className="hover:text-pink-500"
              >
                suhailansari3695@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Location:</span> New Delhi, India
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-pink-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Suhail. All Rights Reserved. |{" "}
            <Link to="/privacy" className="hover:text-pink-500">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="hover:text-pink-500">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
