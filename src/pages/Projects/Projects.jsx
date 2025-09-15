import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Testimonials from "../Testimonials/Testimonials";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      desc: "Full-featured MERN stack e-commerce app with payment gateway, cart & admin dashboard.",
      img: "/Images/project_img/Ecommrace_img.webp",
      demo: "#",
      code: "https://github.com/78suhail/MERN-E-commerce.git",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "A modern responsive personal portfolio built with React, TailwindCSS & animations.",
      img: "/Images/project_img/personal-portfolio.webp",
      demo: "https://codersuhail.netlify.app/",
      code: "https://github.com/78suhail/Portfolio-website.git",
    },
    {
      id: 3,
      title: "Gym Management System",
      desc: "A comprehensive gym management system with member tracking, scheduling & payments.",
      img: "/Images/project_img/gym_img.webp",
      demo: "https://s-fitzone.netlify.app/",
      code: "https://github.com/78suhail/Gym-Management-System.git",
    },
      {
      id: 1,
      title: "Drving School Management System",
      desc: "A Driving School Management System streamlines enrollments, lesson scheduling, payments, and instructor management for an efficient learning experience.",
      img: "/Images/project_img/Drving_img.webp",
      demo: "https://hari-driving.netlify.app/",
      code: "https://github.com/78suhail/Hari-Motor-Driving-School.git",
    },
    {
      id: 2,
      title: "Tecket Raise System",
      desc: "A Ticket Raise System lets users submit and track support tickets for faster issue resolution.",
      img: "/Images/project_img/Ticket.webp",
      demo: "#",
      code: "https://github.com/78suhail/Ticket_System_Project.git",
    },
    {
      id: 3,
      title: "Food Delivery App",
      desc: "A food delivery app built with React Native, Firebase & Google Maps API for real-time tracking.",
      img: "/Images/project_img/food_img.webp",
      demo: "#",
      code: "https://github.com/78suhail/Food-Delivery-Website.git",
    },
  ];

  return (
<>
    <section className="bg-gray-50 py-16 px-6 lg:px-20 ">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
         
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            My Latest <span className="text-pink-600">Awesome Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border-2 shadow-md hover:shadow-xl transition p-4 flex flex-col"
            >
              <img
                src={p.img}
                alt={p.title}
                className="rounded-xl mb-4 object-cover w-full h-48 transform transition duration-500 hover:scale-105 cursor-pointer"
              />
              <h3 className="text-xl font-bold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-2 flex-grow">{p.desc}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Code <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Testimonials/>
</>
  );
}
