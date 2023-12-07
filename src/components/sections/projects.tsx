"use client";

import React from "react";
import Link from "next/link";
import { TitleHeading } from "../titleHeading";
import { ProjectCard } from "../projectCard";

export const Projects = () => {
  return (
    <div>
      {" "}
      <TitleHeading title="Projects" />
      <div>{/* <ProjectCard /> */}</div>
    </div>
  );
};
