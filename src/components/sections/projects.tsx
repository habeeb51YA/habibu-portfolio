"use client";

import React from "react";
import Link from "next/link";
import { TitleHeading } from "../titleHeading";
import { ProjectCard } from "../projectCard";

export const Projects = () => {
  return (
    <div className="pt-[40px] lg:pt-[40px]">
      {" "}
      <TitleHeading title="Projects" />
      <div>
        <ProjectCard />
      </div>
    </div>
  );
};
