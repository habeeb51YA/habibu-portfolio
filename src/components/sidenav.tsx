"use client";

import React, { ReactNode, useState } from "react";
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

  const navigation = [
    // {
    //   icon: <ModeToggle />,
    // },
    {
      name: "Home",
      icon: ({ className, size }: IconProps) => (
        <Home className={className} size={size} />
      ),
      section: "dashboard-section",
    },
    {
      name: "About",
      icon: ({ className, size }: IconProps) => (
        <User className={className} size={size} />
      ),
      section: "about-section",
    },
    {
      name: "Skills",
      icon: ({ className, size }: IconProps) => (
        <FileBadge2 className={className} size={size} />
      ),
      section: "skills-section",
    },
    {
      name: "Experience",
      icon: ({ className, size }: IconProps) => (
        <School className={className} size={size} />
      ),
      section: "experience-section",
    },

    {
      name: "Projects",
      icon: ({ className, size }: IconProps) => (
        <Trophy className={className} size={size} />
      ),
      section: "project-section",
    },
    {
      name: "Contact",
      icon: ({ className, size }: IconProps) => (
        <Send className={className} size={size} />
      ),
      section: "contact-section",
    },
  ];

  return (
    <div>
      {navigation.map((nav: navIconProps, id) => {
        return (
          <div key={id}>
            <div className="hoverButton">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  handleScrollToSection(nav.section as string);
                  setSelectedLink(nav.section as string);
                }}
                className={`rounded-md ml-[20px] mb-4 shadow-sm shadow-accent-foreground flex flex-col h-[85px] w-[85px] items-center justify-center p-x-4 p-y-6 bg-input`}
              >
                <div className="mb-3">
                  {nav.icon({
                    className: `${
                      selectedLink === nav.section ? "text-icon" : "text-title"
                    }`,
                    size: 25,
                  })}
                </div>
                <div
                  className={`text-[13px] ${
                    selectedLink === nav.section ? "text-icon" : "text-title"
                  }`}
                >
                  {nav.name}
                </div>
              </motion.button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
