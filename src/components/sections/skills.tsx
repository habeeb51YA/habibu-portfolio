import React, { ReactNode } from "react";
import { PiFigmaLogoLight } from "react-icons/pi";
import { BiLogoFirebase } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { TitleHeading } from "../titleHeading";
import { PiGithubLogo } from "react-icons/pi";
import { useTheme } from "next-themes";
type IconProps = {
  color?: string;
  className: string;
  size?: number | string;
};

type skillIconProps = {
  title: string;
  icon: ({ className, color }: IconProps) => ReactNode;
};

const skills = () => {
  const { theme, setTheme } = useTheme();
  const SkillIcons = [
    {
      title: "Github",
      icon: ({ className, color, size }: IconProps) => (
        <PiGithubLogo className={className} color={color} size={size} />
      ),
    },
    {
      title: "Figma",
      icon: ({ className, color, size }: IconProps) => (
        <PiFigmaLogoLight className={className} color={color} size={size} />
      ),
    },
    {
      title: "Nextjs",
      icon: ({ className, color, size }: IconProps) => (
        <TbBrandNextjs className={className} color={color} size={size} />
      ),
    },
    {
      title: "Firebase",
      icon: ({ className, color }: IconProps) => (
        <BiLogoFirebase className={className} color={color} />
      ),
    },
    {
      title: "React",
      icon: ({ className, color }: IconProps) => (
        <FaReact className={className} color={color} />
      ),
    },
    {
      title: "Q/A Testing",
      icon: ({ className, color }: IconProps) => (
        <SiTestinglibrary className={className} color={color} />
      ),
    },
    {
      title: "Word Press",
      icon: ({ className, color, size }: IconProps) => (
        <BsWordpress className={className} color={color} size={size} />
      ),
    },
  ];
  return (
    <div className="mt-[400px] md:mt-[0px]">
      <TitleHeading title="Skills" />
      <div className="w-full grid place-items-center grid-cols-3 gap-x-2 gap-y-8  lg:grid-cols-4 lg:gap-x-4 lg:gap-y-12 ">
        {SkillIcons.map((val: skillIconProps, id: number) => {
          // const Icon = () => {
          //   val.icon({ className: "border-1", color: "red" });
          // };
          return (
            <div key={id} className="flex flex-col items-center justify-center">
              {/* <Icon /> */}
              <div>
                {val.icon({
                  className: `${
                    theme === "light"
                      ? " border-primary hover:border-secondary"
                      : " border-border hover:border-primary "
                  } border-2 rounded-full  text-[75px] sm:text-[100px] p-3 sm:p-6 text-primary `,
                })}
              </div>
              <div className="mt-4 text-secondary text-[10px] sm:text-[14px]">
                {val.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default skills;
