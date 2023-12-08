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
    <div>
      {navigation.map((nav: navIconProps, id) => {
        return (
          <div key={id}>
            <div className="hoverButton">
              <motion.button
                whileHover={{ scale: 1 }}
                onClick={() => {
                  handleScrollToSection(nav.section as string);
                  setSelectedLink(nav.section as string);
                }}
                className={`rounded-md ml-[27px] mb-3 shadow-sm shadow-accent-foreground flex flex-col h-[60px] w-[60px] items-center justify-center p-x-4 p-y-6 bg-input`}
              >
                <div className="mb-1">
                  {nav.icon({
                    className: `${
                      selectedLink === nav.section ? "text-icon" : "text-title"
                    }`,
                    size: 18,
                  })}
                </div>
                <div
                  className={`text-[9px] ${
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
