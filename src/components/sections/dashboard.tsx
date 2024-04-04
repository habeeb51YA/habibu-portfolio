import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Dashboard = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div className=" pt-28">
        <div className="text-[33px] text-title">
          Hello, I am Habibu Yusuf Abdulhamid
        </div>
        <div className="mt-4 text-secondary  text-lg italic leading-7 font-normal">
          A Software developer from Nigeria. I have rich experience in building
          user friendly and responsive web based applications.
          {/* I am willing to
          work and dedicated to learning. */}
        </div>
        <div className="flex justify-end items-start mt-16">
          <Image
            src={`${
              theme === "light"
                ? "https://firebasestorage.googleapis.com/v0/b/habibu-portfolio-c8dbc.appspot.com/o/projects%2FlogoLight.png?alt=media&token=499ea7cb-e7ee-40ba-a124-9b58d076f68f"
                : "https://firebasestorage.googleapis.com/v0/b/habibu-portfolio-c8dbc.appspot.com/o/projects%2FlogoDark4.png?alt=media&token=2c1a28bf-2a64-4deb-aee8-06a002556790"
            }`}
            alt="logo"
            width={130}
            height={130}
            id="myLogo"
            style={{ width: "130px", height: "130px" }}
          />
        </div>

        {/* <div className="flex justify-between mt-24 text-xl font-normal ">
          <div className="flex flex-col text-icon">
            <div className="mb-6 ">REMOTE WORK ....... AVAILABLE</div>
            <div>FREELANCE ....... AVAILABLE</div>
          </div>
          <div className="flex flex-col  text-icon">
            <div className="mb-6 ">RESIDENCE ....... NIGERIA</div>
            <div>ADDRESS ....... ABUJA, NIGERIA</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
