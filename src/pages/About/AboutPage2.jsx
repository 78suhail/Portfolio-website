import React , {useState} from "react";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";
import Education from "../Education/Education";
import { ClipLoader } from "react-spinners";

const AboutPage2 = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <section className="bg-gray-50 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-600 to-red-500 inline-block">
            About Me
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            A quick snapshot of my journey, skills, and passion for creating
            impactful software solutions.
          </p>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - Image */}
          <div className="md:w-1/2 flex justify-center relative">
            {!loaded && (
              <div className="flex items-center justify-center w-full max-w-sm h-64 bg-gray-100 rounded-md">
                <ClipLoader color="#3B82F6" size={50} />
              </div>
            )}

            {/* Lazy-loaded Image */}
            <img
              src="/About_image.webp"
              alt="Profile"
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              className={`rounded-md shadow-lg w-full max-w-sm h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Right Section - Info */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
              I <span className="text-red-500">design & build software</span>{" "}
              that delivers real business value
            </h2>
            <p className="text-gray-700 mb-6">
              Passionate software developer with expertise in building scalable
              web applications, automating processes, and delivering secure,
              user-friendly digital solutions.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              At a Glance
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-pink-600" />
                <span>
                  <strong>Location:</strong> New Delhi, 110019, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaGraduationCap className="text-purple-600" />
                <span>
                  <strong>Education:</strong> MCA – IGNOU (2022–2024), BCA – DDU
                  (2018–2021)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaCode className="text-red-500" />
                <span>
                  <strong>Core Skills:</strong> Web Development, Database
                  Design, API Integration, Cloud Deployment
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaHeart className="text-pink-500" />
                <span>
                  <strong>Interests:</strong> Technology, Traveling, Reading,
                  Fitness, Open-Source Contribution
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500" />
                <span>
                  <strong>Email:</strong> Suhailansari3695@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Education />
    </>
  );
};

export default AboutPage2;
