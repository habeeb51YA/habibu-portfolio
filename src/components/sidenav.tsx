"use client";

import React from "react";
import {
  AtSign,
  Linkedin,
  Twitter,
  Figma,
  Gitlab,
  School,
  FileBadge2,
  User,
  Trophy,
  Send,
  BookOpenCheck,
  Github,
  FolderKanban,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./dropdown";
import { motion } from "framer-motion";
// interface ISideNav {
//   items: any[];
// }

export const handleScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Sidenav: React.FC = () => {
  const router = useRouter();
  const items = [
    // {
    //   name: "Night Mode",
    //   icon: <ModeToggle />,
    // },
    {
      name: "Home",
      icon: <User color={"#d98d30"} size={40} />,
      // href: "/about",
      section: "dashboard-section",
    },
    {
      name: "Skills",
      icon: <FileBadge2 color={"#d98d30"} size={40} />,
      // href: "/skills",
      section: "skills-section",
    },
    {
      name: "About",
      icon: <User color={"#d98d30"} size={40} />,
      // href: "/about",
      section: "about-section",
    },

    {
      name: "Expirence",
      icon: <School color={"#d98d30"} size={40} />,
      // href: "/expirence",
      section: "expirence-section",
    },

    {
      name: "Projects",
      icon: <Trophy color={"#d98d30"} size={40} />,
      // href: "/resume",
      section: "project-section",
    },
    {
      name: "Contact",
      icon: <Send color={"#d98d30"} size={40} />,
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
                className="rounded-md mb-4 shadow-sm shadow-primary flex flex-col h-[100px] w-[100px] items-center justify-center p-x-4 p-y-6 bg-background hover:bg-secondary"
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
