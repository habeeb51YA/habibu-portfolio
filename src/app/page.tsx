"use client";

import React from "react";
import { ModeToggle } from "@/components/dropdown";
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
      className="relative lg:absolute lg:top-[40px] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 "
    >
      <div className="flex justify-center ml-0 lg:ml-[20px]">
        <div className="flex relative lg:fixed ">
          <div className="flex w-screen sm:w-full flex-col lg:flex-row ">
            <div className="fixed top-0 left-0 right-0 sm:top-[50px] sm:left-[-100px] sm:absolute sm:top-[50px] lg:top-[100px] lg:left-[-100px] z-50">
              <div className="bg-input h-[70px] grid sm:hidden ">
                <div className=" flex justify-end items-center">
                  {" "}
                  <ModeToggle />
                </div>

                <div className="w-full bg-gradient-to-r from-[#515151] h-[1px] "></div>
              </div>
              <div className="flex overflow-x-scroll sm:overflow-x-hidden">
                <Sidenav />
              </div>
            </div>
            <div className="mt-[145px] sm:mt-[0px] flex items-center justify-center">
              <Bio />
            </div>
            <motion.div
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="snap-y snap-mandatory shadow-lg shadow-inner ml-0 sm:ml-[20px] lg:ml-0 lg:ml-4 px-5 md:px-12 bg-input border-1 border-secondary h-full lg:h-[610px] w-full min-w-[500px] sm:w-[540px] md:w-[585px] lg:w-full 2xl:w-[650px] mt-10  pt-8 rounded-md  lg:overflow-y-scroll pt-10">
                {" "}
                {sections.map((val, index) => {
                  return (
                    <div key={index} className="mt-0 lg:mt-[50px]">
                      <div id={`${val.id}`}>
                        <section className=" scroll-mt-[50px] snap-center snap-always h-[650px]">
                          {val.section}
                        </section>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
