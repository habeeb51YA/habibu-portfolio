import React from "react";
import { TitleHeading } from "../titleHeading";

const HomePage = () => {
  console.log(
    "process.env.NEXT_PUBLIC_FIREBASE_APIKEY",
    process.env.NEXT_PUBLIC_FIREBASE_APIKEY
  );
  return (
    <div>
      {/* <TitleHeading title="About Me" /> */}
      <div className=" mt-6">
        <div className="text-[45px] text-title">
          Hello, I am Habibu Yusuf Abdulhamid
        </div>
        <div className="mt-16 text-title  text-[22px] italic leading-9 font-normal">
          A Software developer from Nigeria. I have rich experience in react,
          also I am good at typescript. I love to talk with you about our
          unique.
        </div>

        <div className="flex justify-between mt-24 text-xl font-normal ">
          <div className="flex flex-col text-icon">
            <div className="mb-6 ">REMOTE WORK ....... AVAILABLE</div>
            <div>FREELANCE ....... AVAILABLE</div>
          </div>
          <div className="flex flex-col  text-icon">
            <div className="mb-6 ">RESIDENCE ....... NIGERIA</div>
            <div>ADDRESS ....... ABUJA, NIGERIA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
