import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/yourprofile", label: "Facebook" },
    { icon: FaGithub, href: "https://github.com/yourprofile", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:youremail@gmail.com", label: "Email" },
    { icon: FaYoutube, href: "https://youtube.com/@yourchannel", label: "YouTube" },
  ];

  return (
    <div className="bg-gray-50 flex items-center justify-center px-4 sm:px-8 md:px-12 py-16">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <div
          className={`flex-1 flex justify-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-40 sm:w-56 md:w-72 lg:w-96 aspect-square rounded-full overflow-hidden shadow-lg">
            <img
              src="/suhail.webp"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-purple-700 text-base sm:text-lg">👋 Hi! I’m</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Suhail
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mt-2">
            MERN Stack Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto lg:mx-0">
            I specialize in building dynamic and scalable web applications using{" "}
            <span className="font-semibold">MongoDB, Express.js, React</span>,
            and <span className="font-semibold">Node.js</span>. I craft modern,
            responsive, and high-performance websites and applications that help
            businesses thrive. Currently, I’m based in{" "}
            <span className="font-semibold">New Delhi</span>.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-purple-700 hover:shadow-lg transition"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            {/* Download CV */}
            <a
              href="/Suhail_CV.pdf"       
              download="Suhail_CV.pdf"    
              className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition text-center"
            >
              📄 Download CV
            </a>

            {/* Navigate to Contact */}
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-6 py-3 border-2 border-purple-500 rounded-xl hover:bg-purple-50 text-purple-700 transition"
            >
              💬 Let’s Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
