"use client";

import React, { useState } from "react";
import { School, FileBadge2, User, Trophy, Send } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "./dropdown";

export const handleScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Sidenav: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState("dashboard-section");
  const navigation = [
    {
      icon: <ModeToggle />,
    },
    {
      name: "Home",
      icon: <User className="text-icon" size={30} />,
      // href: "/about",
      section: "dashboard-section",
    },
    {
      name: "About",
      icon: <User className="text-icon" size={30} />,
      // href: "/about",
      section: "about-section",
    },
    {
      name: "Skills",
      icon: <FileBadge2 className="text-icon" size={30} />,
      // href: "/skills",
      section: "skills-section",
    },
    {
      name: "Experience",
      icon: <School className="text-icon" size={30} />,
      // href: "/expirence",
      section: "experience-section",
    },

    {
      name: "Projects",
      icon: <Trophy className="text-icon" size={30} />,
      // href: "/resume",
      section: "project-section",
    },
    // {
    //   name: "Contact",
    //   icon: <Send className="text-icon" size={30} />,
    //   // href: "/contacts",
    //   section: "contact-section",
    // },
  ];

  return (
    <div>
      {navigation.map((nav, id) => {
        return (
          <div key={id}>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.5 }}
                onClick={() => {
                  handleScrollToSection(nav.section as string);
                  setSelectedLink(nav.section as string);
                }}
                className={`rounded-md ml-[20px] mb-4 shadow-sm shadow-primary flex flex-col h-[80px] w-[80px] items-center justify-center p-x-4 p-y-6  ${
                  selectedLink === nav.section ? "bg-popover" : "bg-input"
                }`}
              >
                <div className="mb-4">{nav.icon}</div>
                <div className="text-sm text-title">{nav.name}</div>
              </motion.button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
