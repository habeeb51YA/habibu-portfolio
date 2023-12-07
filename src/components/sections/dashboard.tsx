import React from "react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div>
      <div className="pt-[110px]">
        <div className="text-[33px] text-title">
          Hello, I am Habibu Yusuf Abdulhamid
        </div>
        <div className="mt-4 text-ring  text-[18px] italic leading-7 font-normal">
          A Software developer from Nigeria. I have rich experience in building
          user friendly and responsive web based applications.
          {/* I am willing to
          work and dedicated to learning. */}
        </div>
        <div className="flex justify-end items-start mt-[65px]">
          <Image
            src="/logo.png"
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
