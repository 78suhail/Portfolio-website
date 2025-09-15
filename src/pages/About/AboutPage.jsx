import React ,{useEffect} from "react";
import { FaCode, FaServer, FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {

   const navigate = useNavigate();
 
   // Scroll to top on component mount
   useEffect(() => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   }, []);


  const services = [
    {
      icon: <FaCode size={40} className="text-purple-500" />,
      title: "Front-end Development",
      description:
        "Building responsive and interactive UIs with React, TailwindCSS, and modern JavaScript.",
      projects: "190+ Projects",
    },
    {
      icon: <FaServer size={40} className="text-purple-500" />,
      title: "Back-end Development",
      description:
        "Creating scalable APIs and backend systems using Node.js, Express.js, and MongoDB.",
      projects: "220+ Projects",
    },
    {
      icon: <FaProjectDiagram size={40} className="text-purple-500" />,
      title: "Full-stack Solutions",
      description:
        "Delivering complete MERN applications from database to frontend with optimized performance.",
      projects: "100+ Projects",
    },
  ];

  return (
    <section className="bg-[#f9fbff] py-16 lg:py-20 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-purple-500 font-medium flex items-center gap-2">
            <span>✨</span> About Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-3 leading-tight text-gray-900">
            Why you should{" "}
            <span className="text-pink-500">hire me</span> for your{" "}
            <span className="text-purple-700">next project?</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-lg">
            I’m a passionate <span className="font-semibold">MERN Stack Developer</span> 
            with experience in building modern, scalable web applications.  
            From designing interactive frontends with React and TailwindCSS,  
            to developing robust backends using Node.js, Express, and MongoDB —  
            I create full-stack solutions that are clean, fast, and reliable. 🚀
          </p>
          <button onClick={() => navigate('/contact')}  className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
            Hire Me
          </button>
        </div>

        {/* Right Services */}
        <div className="flex-1 flex flex-col gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                {service.icon}
                <div>
                  <h3 className="text-xl font-bold text-purple-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">
                    {service.projects}
                  </p>
                </div>
              </div>
              <div className="text-purple-500 border border-purple-300 rounded-full p-2 hover:bg-purple-50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
