import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div className="pt-[100px]">
        <div className="text-[45px] text-title">
          Hello, I am Habibu Yusuf Abdulhamid
        </div>
        <div className="mt-16 text-title  text-[22px] italic leading-9 font-normal">
          A Software developer from Nigeria. I have rich experience in react,
          also I am good at typescript. I love to talk with you about our
          unique. I am willing to work and dedicated to learning.
        </div>
        <div className="flex justify-end items-start mt-[60px]">
          <Image
            src="/logo.png"
            alt="logo"
            width={250}
            height={250}
            id="myLogo"
            style={{ width: "auto", height: "auto" }}
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

export default HomePage;
