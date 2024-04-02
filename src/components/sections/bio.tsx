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
    <div className={`flex relative w-full`}>
      {" "}
      <div
        className={`${
          theme === "light" ? " bg-basic-foreground " : " bg-primary opacity-20"
        } w-full mx-auto h-[500px] min-w-[500px] sm:h-[640px] sm:w-[540px] md:w-[585px] lg:w-[480px]  rounded-md`}
      ></div>
      <div className="bg-input w-full mx-auto h-full sm:w-[540px] min-w-[500px] md:w-[585px] lg:w-[480px]  lg:h-[640px]  absolute top-[0px] sm:top-[16px] left-[0px] sm:left-[25px] rounded-md shadow-black shadow-md ">
        <div className="h-[350px] relative overflow-hidden">
          <Image
            className={`${
              theme === "light" ? "opacity-none" : "opacity-80"
            } w-[100%] h-[250px] sm:h-[100%] [clip-path:polygon(0%_0%,_100%_0%,_100%_97%,_50%_87%,_0_100%)]`}
            src="/background1.jpg"
            alt="background_picture"
            id="myImg"
            fill
          />
        </div>
        <div className="flex items-center justify-center mt-[-200px] sm:mt-[-120px]">
          <Avatar className="w-[130px] h-[130px] shadow-sm shadow-foreground">
            <AvatarImage
              className="object-cover"
              src={`${
                theme === "light"
                  ? "https://firebasestorage.googleapis.com/v0/b/habibu-portfolio-c8dbc.appspot.com/o/projects%2Fprofile4.png?alt=media&token=382f8f55-9779-4f06-b0ce-f26c0969601f"
                  : "https://firebasestorage.googleapis.com/v0/b/habibu-portfolio-c8dbc.appspot.com/o/projects%2Fprofile3.png?alt=media&token=2e839658-8c43-489f-9071-50a71faeb56f"
              }`}
              alt="profile_photo"
            />
            <AvatarFallback>
              <img src="https://firebasestorage.googleapis.com/v0/b/habibu-portfolio-c8dbc.appspot.com/o/projects%2FprofilePlaceholder2.png?alt=media&token=4854edb9-4e6e-4f0e-8e7c-c947d98fd71d" />
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="bg-input mt-10 flex flex-col items-center justify-center">
          <div className=" text-title text-[23px]">Habibu Yusuf Abdulhamid</div>
          <div className="text-primary text-[15px] mt-2">
            Software Developer
          </div>
          <div className="flex items-center justify-center mt-3">
            {SkillIcons.map((val: skillIconProps, id: number) => {
              return (
                <div key={id} className="hoverButton mr-1 cursor-pointer">
                  <div>
                    {val.icon({
                      className: `${
                        theme === "light"
                          ? " border-none text-title"
                          : " border-none text-primary"
                      } border  hover:text-foreground hover:bg-primary rounded-full p-[10px]`,

                      size: 40,
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" mt-[40px] w-full bg-gradient-to-r from-[#515151] h-[1px]"></div>
          <div className="flex justify-between items-center mt-3 w-full ">
            <div
              className=" hoverButton flex items-center justify-center cursor-pointer p-4"
              onClick={() => {
                handleRedirect(
                  "https://firebasestorage.googleapis.com/v0/b/habibu-portfolio-c8dbc.appspot.com/o/resume%2FHabibu%20Yusuf%20Abdulhamid%20CV..pdf?alt=media&token=0d4813e6-a594-4d17-9b51-8b1e9aee7a80"
                );
              }}
            >
              <span className=" mr-3  sm:mr-6 text-[14px] sm:text-[16px] text-title">
                View CV
              </span>
              <Download className="text-primary" size={18} />
            </div>
            <div className=" ml-[10px] w-[1px] bg-gradient-to-r from-[#515151] h-[40px]"></div>
            <div
              className=" hoverButton flex items-center justify-center cursor-pointer p-4"
              onClick={() => handleScrollToSection("contact-section")}
            >
              <span className="text-[14px] sm:text-[16px] mr-3  sm:mr-6 text-title">
                {" "}
                Contact Me
              </span>{" "}
              <Send className="text-primary" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
