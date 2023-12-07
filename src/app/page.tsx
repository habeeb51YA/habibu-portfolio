"use client";

import React, { useState } from "react";
import { ModeToggle } from "@/components/dropdown";
import { NavigationMenuDemo } from "@/components/navmenu";
import Skills from "@/components/sections/skills";
import { Sidenav } from "@/components/sidenav";
import { About } from "@/components/sections/about";
import { motion } from "framer-motion";
import { Bio } from "@/components/sections/bio";
import { Projects } from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Dashboard from "@/components/sections/dashboard";

const Home = () => {
  const sections = [
    {
      id: "dashboard-section",
      section: <Dashboard />,
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
      className="absolute top-[40px] left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex justify-center">
        <div className="fixed">
          <div className="flex w-full">
            <div className="absolute top-[100px] left-[-75px] z-50">
              <Sidenav />
            </div>
            <Bio />
            <motion.div
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="snap-y snap-mandatory shadow-lg shadow-inner ml-4 px-12 bg-input border-1 border-secondary h-[630px] w-[720px] mt-10  pt-8 rounded-md overflow-auto pt-10"
            >
              {sections.map((val, index) => {
                return (
                  <div key={index}>
                    <div id={`${val.id}`}>
                      <section className=" scroll-mt-[50px] snap-center snap-always h-[650px]">
                        {val.section}
                      </section>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
