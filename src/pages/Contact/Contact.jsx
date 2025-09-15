import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import Testimonials from "../Testimonials/Testimonials";


export default function Contact() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6 lg:px-20 ">
        {/* Unique Heading */}
        <div className="text-center mb-12">
          <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-800 to-red-500 inline-block">
            Contact Me
          </h3>
          <div className="mt-3 w-28 h-1 bg-gradient-to-r from-pink-600 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Let’s connect! Whether you have a project idea, collaboration
            proposal, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl">
          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-pink-100 rounded-lg p-6 text-center">
              <FaMapMarkerAlt className="text-pink-600 text-3xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800">
                OUR OFFICE LOCATION
              </h3>
              <p className="text-gray-600">110019 New Delhi</p>
            </div>
            <div className="bg-pink-100 rounded-lg p-6 text-center">
              <FaPhoneAlt className="text-pink-600 text-3xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800">
                HAVE A QUESTION?
              </h3>
              <p className="text-gray-600">+91 7460902506</p>
            </div>
            <div className="bg-pink-100 rounded-lg p-6 text-center">
              <FaEnvelope className="text-pink-600 text-3xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800">
                EMAIL US ON
              </h3>
              <p className="text-gray-600">Suhailansari3695@gmail.com</p>
            </div>
          </div>

          {/* Map and Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.490234!2d-0.127647!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333b3333%3A0x3333333333333333!2sLondon!5e0!3m2!1sen!2suk!4v1633333333333"
                width="100%"
                height="400"
                className="rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="flex justify-center gap-12 py-16 text-2xl ">
                <a href="#" className="hover:text-pink-600">
                  <FaInstagram className="text-[35px] text-pink-600" />
                </a>
                <a href="#" className="hover:text-green-600">
                  <FaWhatsapp className="text-[35px] text-green-600" />
                </a>
                <a href="#" className="hover:text-blue-600">
                  <FaFacebook className="text-[35px] text-blue-600" />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Get A Quote
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your Number"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Your Message"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Testimonials />
        
      </div>
    </>
  );
}
