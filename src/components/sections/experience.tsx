import React from "react";
import { TitleHeading } from "../titleHeading";

const Experience: React.FC = () => {
  const Experiences = [
    {
      company: "Feezino Unified Solution",
      title: "Experience",
      role: "Software Developer",
      date: "September 2020 - May 2021",
    },
    {
      company: "Pramie Technologies",
      role: "Software Developer",
      date: "January 2022 - Present",
    },
    {
      company: " Transport Management Technology",
      title: "Education",
      role: "Federal University of Technology, Minna ",
      date: "2014 - 2019",
    },
  ];

  return (
    <div>
      <TitleHeading
        title={
          <div>
            Education <span className="text-icon">&</span> Experience
          </div>
        }
      />
      {Experiences.map((val, id) => {
        return (
          <div key={id} className="">
            <div className="flex ">
              <div className="mr-12 border-l-2  border-destructive-foreground mb-16"></div>
              <div>
                {" "}
                <div className="mt-1 text-[20px] text-icon">{val?.title}</div>
                <div className="mt-1 text-[17px]">{val.role}</div>
                <div className="mt-1 text-[15px] text-ring">{val.date}</div>
                <div className="mt-2  mb-10 text-[14px] text-ring">
                  {val.company}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
