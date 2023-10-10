import React from "react";

// interface IWork {
//   items?: any[];
// }
const Work: React.FC = () => {
  const Experience = [
    {
      company: "Feezino Unified Solution",
      title: "Experience",
      role: "Software Developer",
      date: "September 2020 - May 2021",
    },
    {
      company: "Pramie Technologies",
      role: "Frontend Developer",
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
      <div className="text-2xl  font-medium  mt-6 text-title">
        {" "}
        Education <span className="text-sub">&</span> expirence
      </div>
      <div className=" mt-8 mb-8 border-b-2 border-indigo-500 "></div>
      {Experience?.map((val, id) => {
        return (
          <div key={id} className="">
            <div className="flex ">
              <div className="mr-12 border-l-2  border-indigo-500 mb-16"></div>
              <div>
                {" "}
                <div className="mt-1 text-2xl">{val?.title}</div>
                <div className="mt-1 text-lg">{val.role}</div>
                <div className="mt-1 text-base">{val.date}</div>
                <div className="mt-2  mb-10 text-sm">{val.company}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
