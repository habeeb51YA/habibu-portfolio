"use client";

import React, { ReactNode } from "react";
import { ModeToggle } from "../../components/dropdown";
import { NavigationMenuDemo } from "@/components/navmenu";
import Skills from "@/components/sections/skills";
import Dashboard from "@/components/sections/dashboard";
import Work from "@/components/sections/experience";
import { Sidenav } from "@/components/sidenav";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { motion } from "framer-motion";
import { Bio } from "@/components/sections/bio";
import { Projects } from "@/components/sections/projects";
import Experience from "@/components/sections/experience";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed ml-[130px]">
        <div className="flex w-full">
          <div className="absolute top-[150px] left-[-90px] z-50">
            <Sidenav />
          </div>
          <Bio />
          <div className=" -shadow-lg shadow-inner ml-6 pl-16 bg-popover border-1 border-secondary h-[800px] w-[1000px] mt-10  pt-8 rounded-md pr-12 overflow-auto ">
            <section id="dashboard-section" className="mt-20">
              <Dashboard />
            </section>
            <section className="mt-48" id="skills-section">
              <Skills />
            </section>
            <section className="mt-[310px]" id="about-section">
              <About />
            </section>
            <section className="mt-48" id="experience-section">
              <Experience />
            </section>
            <section className="mt-48" id="project-section">
              <Projects />
            </section>
            <section className="mt-60 mb-60" id="contact-section">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
