import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/services/firebase/config";
import { ChevronsUp } from "lucide-react";
import { handleScrollToSection } from "./sidenav";
interface IProjectCard {
  name?: string;
  imgUrl?: string;
  projectUrl?: string;
  description?: string;
}

export const ProjectCard: React.FC<IProjectCard> = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects();
  }, [projects]);

  async function getProjects() {
    let projects: any = [];

    const projectRef = query(collection(db, "projects"));
    const querySnapshot = await getDocs(projectRef);
    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        projects.push({
          ...doc?.data(),
          id: doc?.id,
        });
      }
    });

    setProjects(projects);
    return projects;
  }
  return (
    <div className="flex justify-between flex-col min-h-[600px]">
      <div className="grid grid-cols-2 gap-10  ">
        {projects?.map((project: IProjectCard, id: number) => {
          return (
            <div
              key={id}
              className="flex items-center justify-center border border-1 border-icon rounded-xl "
            >
              <Link
                href={project?.projectUrl as string}
                legacyBehavior
                className="flex items-center justify-center"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center justify-center "
                >
                  <div className="py-8 flex flex-col items-center justify-center ">
                    {" "}
                    <div className="mb-4">
                      <Image
                        //   className={`${theme === "light" ? "opacity-none" : "opacity-80"} `}
                        src={project?.imgUrl as string}
                        alt={project?.description as string}
                        width={320}
                        height={260}
                        className="border rounded-lg"
                      />
                    </div>
                    <div className="text-[18px] text-title">
                      {" "}
                      {project?.name}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div
        className="ml-auto"
        onClick={() => {
          handleScrollToSection("dashboard-section");
        }}
      >
        <ChevronsUp className="text-icon" size={60} />
      </div>
    </div>
  );
};
