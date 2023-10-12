import React, { ReactNode } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Send, Github, Download } from "lucide-react";
import { handleScrollToSection } from "../sidenav";
import { useTheme } from "next-themes";

type IconProps = {
  color?: string;
  className: string;
  size?: number;
  onIconClick?: () => void;
};

type skillIconProps = {
  title: string;
  icon: ({ className, color, onIconClick }: IconProps) => ReactNode;
};

export const Bio = () => {
  const { theme, setTheme } = useTheme();
  const SkillIcons = [
    {
      title: "Linkedin",
      icon: ({ className, color, size, onIconClick }: IconProps) => (
        <Linkedin
          className={className}
          color={color}
          size={size}
          onClick={() => onIconClick}
        />
      ),
    },
    {
      title: "Twitter",
      icon: ({ className, color, size, onIconClick }: IconProps) => (
        <Twitter
          className={className}
          color={color}
          size={size}
          onClick={() => onIconClick}
        />
      ),
    },
    {
      title: "Github",
      icon: ({ className, color, size, onIconClick }: IconProps) => (
        <Github
          className={className}
          color={color}
          size={size}
          onClick={() => onIconClick}
        />
      ),
    },
  ];

  return (
    <div className="flex relative">
      {" "}
      <div className=" bg-destructive opacity-10 h-[850px] w-[690px] rounded-md"></div>
      <div className="bg-muted  h-[855px] w-[690px] absolute top-[20px] left-[25px] rounded-md">
        <div className="h-[460px] relative overflow-hidden">
          <Image
            className={`${theme === "light" ? "opacity-none" : "opacity-80"} `}
            src="/background1.jpg"
            alt="background_picture"
            width={690}
            height={100}
          />

          <svg
            className="absolute top-[287px] left-0 w-100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,25 Q50,0 100,25 Z" fill="#1e293b" />
          </svg>
        </div>
        <div className="flex items-center justify-center mt-[-70px]">
          <Avatar className="w-[150px] h-[150px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="profile_photo"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <div className=" text-title text-[28px]">Habibu Yusuf Abdulhamid</div>
          <div className="text-primary text-[18px]">Software Developer</div>
          <div className="flex items-center justify-center mt-5">
            {SkillIcons.map((val: skillIconProps, id: number) => {
              return (
                <div key={id} className="mr-4">
                  <div>
                    {val.icon({
                      className:
                        "border-2 text-icon border-indigo-500 rounded-full   p-4 text-icon",
                      size: 55,
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 mt-10 w-full  gap-10">
            <div
              className="flex items-center justify-center cursor-pointer p-4"
              onClick={() => {}}
            >
              <span className=" mr-6 text-[20px] text-title">Download CV</span>
              <Download className="text-icon" size={20} />
            </div>
            <div
              className="flex items-center justify-center cursor-pointer p-4"
              onClick={() => handleScrollToSection("contact-section")}
            >
              <span className="text-[20px] mr-6 text-title"> Contact Me</span>{" "}
              <Send className="text-icon" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
