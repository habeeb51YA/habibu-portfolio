"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { School, Home, FileBadge2, User, Trophy, Send } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "./dropdown";

type IconProps = {
  className: string;
  size?: number;
};

type navIconProps = {
  name: string;
  section?: string;
  icon: ({ className }: IconProps) => ReactNode | any;
};

export const handleScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Sidenav: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState("dashboard-section");

  const handleSectionVisibility = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setSelectedLink(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleSectionVisibility, {
      threshold: 0.5,
    });

    navigation.forEach((nav) => {
      const section = document.getElementById(nav.section);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navigation = [
    // {
    //   icon: <ModeToggle />,
    // },
    {
      name: "HOME",
      icon: ({ className, size }: IconProps) => (
        <Home className={className} size={size} />
      ),
      section: "dashboard-section",
    },
    {
      name: "ABOUT",
      icon: ({ className, size }: IconProps) => (
        <User className={className} size={size} />
      ),
      section: "about-section",
    },
    {
      name: "SKILLS",
      icon: ({ className, size }: IconProps) => (
        <FileBadge2 className={className} size={size} />
      ),
      section: "skills-section",
    },
    {
      name: "EXPERIENCE",
      icon: ({ className, size }: IconProps) => (
        <School className={className} size={size} />
      ),
      section: "experience-section",
    },

    {
      name: "PROJECTS",
      icon: ({ className, size }: IconProps) => (
        <Trophy className={className} size={size} />
      ),
      section: "project-section",
    },
    {
      name: "CONTACT",
      icon: ({ className, size }: IconProps) => (
        <Send className={className} size={size} />
      ),
      section: "contact-section",
    },
  ];

  return (
    <div className="flex sm:flex-col w-full  sm:w-[70px] ml-0 sm:ml-[40px] lg:ml-[40px] ">
      <motion.div
        whileHover={{ scale: 1 }}
        onClick={() => {
          // handleScrollToSection(nav.section as string);
          // setSelectedLink(nav.section as string);
        }}
        className={`mb-4 hidden sm:flex rounded-md  shadow-none md:shadow-sm shadow-transparent md:shadow-foreground flex flex-row sm:flex-col  h-[70px] w-full items-center justify-center p-x-2  p-y-2 sm:p-y-8 bg-background`}
      >
        <div className="flex justify-end items-center">
          {" "}
          <ModeToggle />
        </div>
        {/* <div className=" mt-[10px] w-[1px]  sm:w-[40px]  bg-gradient-to-r from-[#515151]  h-[40px] sm:h-[1px]"></div> */}
      </motion.div>
      <div className="flex sm:flex-col  w-full">
        {navigation.map((nav: navIconProps, id) => {
          return (
            <div key={id} className="w-full bg-background">
              <motion.button
                whileHover={{ scale: 1 }}
                onClick={() => {
                  handleScrollToSection(nav.section as string);
                  setSelectedLink(nav.section as string);
                }}
                className={` rounded-md shadow-none md:shadow-sm shadow-transparent md:shadow-foreground flex flex-row sm:flex-col  h-[60px] w-[70px] items-center justify-center p-x-2 p-y-0 sm:p-y-10 bg-background`}
              >
                <div className="flex flex-col items-center justify-center w-full">
                  {" "}
                  <div className=" mb-[5px]">
                    {nav.icon({
                      className: `${
                        selectedLink === nav.section
                          ? "text-primary"
                          : "text-title"
                      } w-[17px] md:w-[18px] h-[17px] md:h-[18px]`,
                    })}
                  </div>
                  <div
                    className={`text-[8.5px] sm:text-[7.5px] lg:text-[8.5px] w-full ${
                      selectedLink === nav.section
                        ? "text-primary"
                        : "text-title"
                    }`}
                  >
                    {nav.name}
                  </div>
                </div>

                <div className=" mt-0 sm:mt-[10px]  w-[1px]  sm:w-[40px]  bg-gradient-to-r from-[#515151]  h-[40px] sm:h-[1px]"></div>
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
