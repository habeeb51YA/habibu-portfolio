import React from "react";
import { TitleHeading } from "../titleHeading";

const Experience: React.FC = () => {
  const Experiences = [
    {
      company: "Feezino Unified Solution",
      title: "Experience",
      role: "Web Developer",
      date: "September 2020 - May 2021",
    },
    {
      company: "Pramie Technologies",
      role: "Frontend Developer Developer",
      date: "January 2022 - Febuary 2024",
    },
    // {
    //   company: "DynastyU",
    //   role: "Web Developer",
    //   date: "November 2023 - Present",
    // },
    {
      company: "Transport Management Technology",
      title: "Education",
      role: "Federal University of Technology, Minna ",
      date: "2014 - 2019",
    },
  ];

  return (
    <div className="pt-20 lg:pt-10">
      <TitleHeading
        title={
          <div>
            Education <span className="text-primary">&</span> Experience
          </div>
        }
      />
      {Experiences.map((val, id) => {
        return (
          <div key={id}>
            <div className="flex">
              <div className="mr-12 border-l-2  border-border mb-16"></div>
              <div>
                {" "}
                <div className="mt-1 text-xl text-primary">{val?.title}</div>
                <div className="mt-1 text-title text-base">{val.role}</div>
                <div className="mt-1 text-[15px] text-secondary">
                  {val.date}
                </div>
                <div className="mt-2  mb-10 text-sm text-secondary">
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
