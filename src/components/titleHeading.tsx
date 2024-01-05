import React, { ReactNode } from "react";

interface titleHeadingProp {
  title: string | ReactNode;
  className?: string;
  isIcon?: boolean;
  icon?: ReactNode;
}

export const TitleHeading: React.FC<titleHeadingProp> = ({
  title,
  className,
  isIcon,
  icon,
}) => {
  return (
    <div className={className}>
      {isIcon ? (
        <div className="flex items-center justify-between">
          <div className="text-[20px]  font-normal  text-title"> {title}</div>
          <div>{icon}</div>
        </div>
      ) : (
        <div className="text-[21px]  font-normal  text-title"> {title}</div>
      )}

      {/* <div className=" mt-[30px] border-b-[1px] border-accent-foreground mb-10"></div> */}
      <div className=" mt-[25px] mb-[30px] w-full bg-gradient-to-r from-[#515151] h-[1px]"></div>
    </div>
  );
};
