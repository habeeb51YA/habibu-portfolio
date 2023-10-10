import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="text-2xl  font-medium  mt-6 text-title"> About Me</div>
      <div className=" mt-8 border-b-2 border-sub"></div>
      <div className=" mt-6">
        <div className="text-[45px] text-title">
          Hello, I am Habibu Yusuf Abdulhamid
        </div>
        <div className="mt-10 text-title  text-[21px] font-[Georgia] font-medium">
          A Software developer from Nigeria. I have rich experience in react,
          also I am good at typescript. I love to talk with you about our
          unique.
        </div>

        <div className="flex justify-between mt-16 text-xl font-normal">
          <div className="flex flex-col text-sub">
            <div className="mb-6 ">AGE ....... 45</div>
            <div>FREELANCE ....... AVAILABLE</div>
          </div>
          <div className="flex flex-col  text-sub">
            <div className="mb-6 ">RECIDENCE ....... NIGERIA</div>
            <div>ADDRESS ....... ABUJA, NIGERIA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
