import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";
import Education from "../Education/Education";

const AboutPage2 = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 ">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-600 to-red-500 inline-block">
            About Me
          </h1>
          <motion.div
            className="mt-4 w-28 h-1 bg-gradient-to-r from-purple-900 to-red-500 mx-auto rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          ></motion.div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            A quick snapshot of my journey, skills, and passion for creating
            impactful software solutions.
          </p>
        </motion.div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/About_image.webp"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full md:w-2/3 mx-auto transform transition duration-500 group-hover:scale-105"
            />
            {/* Floating Badge with Fast Bounce */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 
             bg-white rounded-xl px-4 py-2 md:px-6 md:py-4 
             shadow-lg flex items-center gap-2 md:gap-3"
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2, // fast bounce
                ease: "easeInOut",
              }}
            >
              <span className="text-red-500 text-xl md:text-3xl">🚀</span>
              <span className="text-gray-900 font-semibold text-sm md:text-lg">
                80+ Successful Projects
              </span>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6 leading-snug">
              I <span className="text-red-500">design & build software</span>{" "}
              that delivers real business value
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Passionate software developer with expertise in building scalable
              web applications, automating processes, and delivering secure,
              user-friendly digital solutions.
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              At a Glance
            </h3>
            <ul className="text-gray-700 text-lg space-y-4">
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
          </motion.div>
        </div>
      </section>
      <Education />
    </>
  );
};

export default AboutPage2;
