"use client";

import React from "react";
import { School, FileBadge2, User, Trophy, Send } from "lucide-react";
import { motion } from "framer-motion";

export const handleScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Sidenav: React.FC = () => {
  const items = [
    {
      name: "Home",
      icon: <User className="text-icon" size={40} />,
      // href: "/about",
      section: "dashboard-section",
    },
    {
      name: "About",
      icon: <User className="text-icon" size={40} />,
      // href: "/about",
      section: "about-section",
    },
    {
      name: "Skills",
      icon: <FileBadge2 className="text-icon" size={40} />,
      // href: "/skills",
      section: "skills-section",
    },
    {
      name: "Experience",
      icon: <School className="text-icon" size={40} />,
      // href: "/expirence",
      section: "experience-section",
    },

    {
      name: "Projects",
      icon: <Trophy className="text-icon" size={40} />,
      // href: "/resume",
      section: "project-section",
    },
    {
      name: "Contact",
      icon: <Send className="text-icon" size={40} />,
      // href: "/contacts",
      section: "contact-section",
    },
  ];

  return (
    <div>
      {items.map((nav, id) => {
        return (
          <div key={id}>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.5 }}
                onClick={() => handleScrollToSection(nav.section as string)}
                className="rounded-md mb-4 shadow-sm shadow-primary flex flex-col h-[100px] w-[100px] items-center justify-center p-x-4 p-y-6 bg-input hover:bg-popover"
              >
                <div className="h-[30px] w-[30] mb-4">{nav.icon}</div>
                <div className="text-sm text-title">{nav.name}</div>
              </motion.button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
