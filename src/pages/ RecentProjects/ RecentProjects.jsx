import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function RecentProjects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      img: "/Images/project_img/Ecommrace_img2.webp",
      demo: "#",
      code: "https://github.com/78suhail/MERN-E-commerce.git",
    },
    {
      id: 2,
      title: "Portfolio Website",
      img: "/Images/project_img/personal-portfolio.webp",
      demo: "https://codersuhail.netlify.app/",
      code: "https://github.com/78suhail/Portfolio-website.git",
    },
    {
      id: 3,
      title: "Gym Management System",
      img: "/Images/project_img/gym_img2.webp",
      demo: "https://s-fitzone.netlify.app/",
      code: "https://github.com/78suhail/Gym-Management-System.git",
    },
    {
      id: 4,
      title: "Driving School Management System",
      img: "/Images/project_img/Drving_img.webp",
      demo: "https://hari-driving.netlify.app/",
      code: "https://github.com/78suhail/Hari-Motor-Driving-School.git",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-medium uppercase tracking-wider">
            My Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            Recent <span className="text-pink-600">Projects</span>
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="bg-white border-2  shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover transform transition duration-500 hover:scale-105 cursor-pointer"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800">{p.title}</h3>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                      Live <FaExternalLinkAlt />
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
