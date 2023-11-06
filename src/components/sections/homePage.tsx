import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" mt-6">
        <div className="text-[45px] text-title">
          Hello, I am Habibu Yusuf Abdulhamid
        </div>
        <div className="mt-16 text-title  text-[22px] italic leading-9 font-normal">
          A Software developer from Nigeria. I have rich experience in react,
          also I am good at typescript. I love to talk with you about our
          unique. I am willing to work and dedicated to learning.
        </div>
        <div
          className="mx-auto flex justify-center items-center cursor-pointer px-7 py-5 text-title hover:text-icon hover:bg-transparent bg-icon rounded-full w-[200px] text-[20px] mt-20 border border-2 hover:border-accent-foreground"
          onClick={() => router.push("/contact")}
        >
          Contact Me
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
