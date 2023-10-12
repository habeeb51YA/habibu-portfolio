import React, { ReactNode } from "react";

interface titleHeadingProp {
  title: string | ReactNode;
}

export const TitleHeading: React.FC<titleHeadingProp> = ({ title }) => {
  return (
    <div>
      <div className="text-[31px]  font-normal  text-title"> {title}</div>
      <div className=" mt-8 border-b-2 border-sub mb-10"></div>
    </div>
  );
};
