import React from "react";
import HeroSection from "./HeroSection";
import AboutPage from "../About/AboutPage";
import Testimonials from "../Testimonials/Testimonials";
import RecentProjects from "../ RecentProjects/ RecentProjects";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      
        <AboutPage />
      
      <div>
        <RecentProjects />
      </div>
      <div>
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
