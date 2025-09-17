import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Testimonials from "../Testimonials/Testimonials";

const EducationItem = ({ institution, degree, period }) => (
  <li className="flex items-start space-x-4">
    <FaGraduationCap className="text-red-500 text-3xl flex-shrink-0" />
    <div>
      <h4 className="text-xl font-bold text-purple-900">{institution}</h4>
      <p className="text-gray-700">{degree} ({period})</p>
    </div>
  </li>
);

const SkillItem = ({ name, percentage }) => (
  <li className="space-y-1">
    <div className="flex justify-between text-gray-700 text-sm">
      <span>{name}</span>
      <span>{percentage}%</span>
    </div>
    <div className="bg-gray-200 h-2 rounded-full">
      <div
        className="bg-purple-900 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </li>
);

const Education = () => {
  return (
    <>
      <section className="bg-gray-50 lg:py-16 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-900 mb-12 text-center">
            I'm great in what I do and{" "}
            <span className="text-red-500">I'm loving it</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-6">
                Education
              </h3>
              <ul className="space-y-6">
                <EducationItem
                  institution="Indira Gandhi National Open University (IGNOU)"
                  degree="Master of Computer Applications (MCA)"
                  period="2022-2024"
                />
                <EducationItem
                  institution="Deen Dayal Upadhyay University (DDU)"
                  degree="Bachelor of Computer Applications (BCA)"
                  period="2018-2021"
                />
                <EducationItem
                  institution="BRD"
                  degree="Secondary School"
                  period="2016-2018"
                />
              </ul>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-6">
                Skills
              </h3>
              <ul className="space-y-4">
                <SkillItem name="Communication" percentage={95} />
                <SkillItem name="Problem Solving" percentage={70} />
                <SkillItem name="Web Application" percentage={90} />
                <SkillItem name="Algorithm & Data Structure" percentage={75} />
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="text-red-500 hover:underline text-lg font-medium"
            >
              Hire Me &rarr;
            </a>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default Education;
