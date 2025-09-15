import React from "react";
import Testimonials from "../Testimonials/Testimonials"

export default function Skills() {
  const skills = [
    { name: "Communication", level: 95 },
    { name: "Problem Solving", level: 80 },
    { name: "Web Development (MERN Stack)", level: 90 },
    { name: "Data Structures & Algorithms", level: 75 },
    { name: "Database Management (MongoDB, SQL)", level: 85 },
    { name: "UI/UX Design Basics", level: 70 },
  ];

  return (
    <>
    <section className="bg-gray-50 py-16 px-6 lg:px-20 ">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-medium uppercase tracking-wider">
            Skills
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2">
            My <span className="text-pink-600">Skills</span> & Expertise
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I specialize in building modern web applications using MERN stack and
            also have a strong foundation in problem solving and computer science concepts.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-pink-600 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-pink-600 to-purple-600 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Testimonials />
    </>
  );
}
