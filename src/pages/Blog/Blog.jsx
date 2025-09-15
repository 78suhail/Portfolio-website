import React from "react";
import { FaBlog } from "react-icons/fa";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with MERN Stack",
      desc: "A complete guide to build scalable web applications using MongoDB, Express, React & Node.js.",
      date: "August 20, 2025",
      img: "/Images/Blog/composite-image-composite-image-build-website-interface_1134-1539.avif",
      link: "#",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      desc: "Learn how to use React hooks effectively to build powerful and clean components.",
      date: "August 15, 2025",
      img: "/Images/Blog/ui-ux-representations-with-laptop_23-2150201871.avif",
      link: "#",
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      desc: "Write clean and optimized backend code with Node.js best practices and patterns.",
      date: "August 10, 2025",
      img: "/Images/Blog/person-working-html-computer_23-2150038840.avif",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-pink-600 text-4xl">
            <FaBlog />
            <span className="text-gray-900 font-bold text-3xl">Blog Posts</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            My Latest <span className="text-pink-600">Articles</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here I share my learnings, tutorials, and thoughts about web
            development, MERN stack, and modern technologies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl border-2 shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img src={b.img} alt={b.title} className="w-full h-48 object-cover transform transition duration-500 hover:scale-105 cursor-pointer" />
              <div className="p-5">
                <p className="text-sm text-gray-500">{b.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mt-2">{b.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{b.desc}</p>
                <a
                  href={b.link}
                  className="inline-block mt-4 text-pink-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
