import React, { ReactNode } from "react";
import { Figma, Github } from "lucide-react";
import { BiLogoFirebase } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { TitleHeading } from "../titleHeading";

type IconProps = {
  color?: string;
  className: string;
  size?: number;
};

type skillIconProps = {
  title: string;
  icon: ({ className, color }: IconProps) => ReactNode;
};

const skills = () => {
  const SkillIcons = [
    {
      title: "Github",
      icon: ({ className, color, size }: IconProps) => (
        <Github className={className} color={color} size={size} />
      ),
    },
    {
      title: "Figma",
      icon: ({ className, color, size }: IconProps) => (
        <Figma className={className} color={color} size={size} />
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
    <div className="">
      <TitleHeading title="Skills" />
      <div className="w-100 grid place-items-center grid-cols-4 gap-x-4 gap-y-12 ">
        {SkillIcons.map((val: skillIconProps, id: number) => {
          // const Icon = () => {
          //   val.icon({ className: "border-1", color: "red" });
          // };
          return (
            <div key={id} className="flex flex-col items-center justify-center">
              {/* <Icon /> */}
              <div>
                {val.icon({
                  className:
                    "border-2 hover:border-icon border-destructive-foreground rounded-full  text-[150px] p-8 text-icon ",
                  size: 150,
                })}
              </div>
              <div className="mt-4 text-title text-[18px]">{val.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default skills;
