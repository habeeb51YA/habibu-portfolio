"use client";

import React from "react";
import { ModeToggle } from "../../components/dropdown";
import { NavigationMenuDemo } from "@/components/navmenu";
import Skills from "@/components/sections/skills";
import { Sidenav } from "@/components/sidenav";
import { About } from "@/components/sections/about";
import { motion } from "framer-motion";
import { Bio } from "@/components/sections/bio";
import { Projects } from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import HomePage from "@/components/sections/homePage";
import Contact from "@/components/sections/contact";

const Home = () => {
  const sections = [
    {
      id: "dashboard-section",
      section: <HomePage />,
    },
    {
      id: "about-section",
      section: <About />,
    },
    {
      id: "skills-section",
      section: <Skills />,
    },
    {
      id: "experience-section",
      section: <Experience />,
    },
    {
      id: "project-section",
      section: <Projects />,
    },
    {
      id: "contact-section",
      section: <Contact />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex justify-center">
        <div className="fixed ml-[130px]">
          <div className="flex w-full">
            <div className="absolute top-[150px] left-[-90px] z-50">
              <Sidenav />
            </div>
            <Bio />
            <div className="snap-y snap-mandatory shadow-lg shadow-inner ml-6 pl-16 bg-input border-1 border-secondary h-[800px] w-[1000px] mt-10  pt-8 rounded-md pr-12 overflow-auto pt-10">
              {sections.map((val, index) => {
                return (
                  <div key={index}>
                    <div id={`${val.id}`}>
                      <section className=" scroll-mt-[50px] snap-center snap-always h-[790px]">
                        {val.section}
                      </section>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
