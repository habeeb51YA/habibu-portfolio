"use client";

import React from "react";
import Link from "next/link";

export const Projects = () => {
  const Project = [
    {
      title: "First Active",
      href: `${process.env.FIRST_ACTIVE_URL}`,
      icon: "hh",
    },

    {
      title: "Bloco",
      href: `${process.env.BLOCO_URL}`,
      icon: "hh",
    },
  ];
  return (
    <div>
      {" "}
      <div className="text-2xl  font-medium  mt-6 text-title"> Projects</div>
      <div className=" mt-8 mb-8 border-b-2 border-indigo-500 "></div>
      <div className="grid grid-cols-2">
        <div>
          {Project?.map((val, id) => {
            return (
              <div key={id}>
                <Link href={val.href} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    {val.title}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
