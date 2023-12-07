import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Send, Github, Download, Mail } from "lucide-react";
import { handleScrollToSection } from "../sidenav";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { getDownloadURL, ref } from "firebase/storage";
import { projectStorage } from "@/services/firebase/config";
import { ImageComponent } from "../image";

type IconProps = {
  color?: string;
  className: string;
  size?: number;
  onIconClick?: () => void;
};

type skillIconProps = {
  title: string;
  icon: ({ className, color }: IconProps) => ReactNode;
};

export const Bio = () => {
  const router = useRouter();

  const handleRedirect = (link: string) => {
    return window.open(link, "_blank");
  };

  const { theme, setTheme } = useTheme();
  const SkillIcons = [
    {
      title: "Linkedin",
      icon: ({ className, color, size }: IconProps) => (
        <Linkedin
          className={className}
          color={color}
          size={size}
          onClick={() => {
            handleRedirect(`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`);
          }}
        />
      ),
    },
    {
      title: "Twitter",
      icon: ({ className, color, size }: IconProps) => (
        <Twitter
          className={className}
          color={color}
          size={size}
          onClick={() =>
            handleRedirect(`${process.env.NEXT_PUBLIC_TWITTER_URL}`)
          }
        />
      ),
    },
    {
      title: "Github",
      icon: ({ className, color, size }: IconProps) => (
        <Github
          className={className}
          color={color}
          size={size}
          onClick={() =>
            handleRedirect(`${process.env.NEXT_PUBLIC_GITHUB_URL}`)
          }
        />
      ),
    },
    {
      title: "Mail",
      icon: ({ className, color, size }: IconProps) => (
        <Mail
          className={className}
          color={color}
          size={size}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:habibuyusuf51@gmail.com";
          }}
        />
      ),
    },
  ];

  return (
    <div className="flex relative">
      {" "}
      <div className=" bg-icon opacity-10 h-[670px] w-[490px] rounded-md"></div>
      <div className="bg-input h-[675px] w-[490px] absolute top-[16px] left-[20px] rounded-md shadow-black shadow-md ">
        <div className="h-[350px] relative overflow-hidden">
          <Image
            className={`${theme === "light" ? "opacity-none" : "opacity-80"} `}
            src="/background1.jpg"
            alt="background_picture"
            width={690}
            height={60}
            id="myImg"
            style={{ width: "100%", height: "330px" }}
          />
          <svg
            className="absolute top-[213px] left-0 w-100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,25 Q50,0 100,25 Z" fill="#212121" />
          </svg>
        </div>
        <div className="flex items-center justify-center mt-[-120px]">
          <Avatar className="w-[130px] h-[130px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="profile_photo"
            />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <div className=" text-title text-[23px]">Habibu Yusuf Abdulhamid</div>
          <div className="text-icon text-[15px]">Software Developer</div>
          <div className="flex items-center justify-center mt-5">
            {SkillIcons.map((val: skillIconProps, id: number) => {
              return (
                <div key={id} className="hoverButton mr-4 cursor-pointer">
                  <div>
                    {val.icon({
                      className:
                        "border-2 text-icon hover:text-accent-foreground hover:bg-icon border-accent-foreground rounded-full p-[10px]",
                      size: 40,
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 mt-10 w-full  gap-10">
            <div
              className=" hoverButton flex items-center justify-center cursor-pointer p-4"
              onClick={() => {
                handleRedirect(
                  "https://firebasestorage.googleapis.com/v0/b/habibu-portfolio-c8dbc.appspot.com/o/resume%2FHabibu%20Yusuf%20Abdulhamid%20resume..pdf?alt=media&token=149d8bf0-27a9-46e4-b477-1592fb4b686a"
                );
              }}
            >
              <span className=" mr-6 text-[16px] text-title">View CV</span>
              <Download className="text-icon" size={18} />
            </div>
            <div
              className=" hoverButton flex items-center justify-center cursor-pointer p-4"
              onClick={() => handleScrollToSection("contact-section")}
            >
              <span className="text-[16px] mr-6 text-title"> Contact Me</span>{" "}
              <Send className="text-icon" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
