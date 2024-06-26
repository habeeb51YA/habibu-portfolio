import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/services/firebase/config";
import { ChevronsUp } from "lucide-react";
import { handleScrollToSection } from "./sidenav";
import { useTheme } from "next-themes";
interface IProjectCard {
  name?: string;
  imgUrl?: string;
  projectUrl?: string;
  description?: string;
}

export const ProjectCard: React.FC<IProjectCard> = () => {
  const [projects, setProjects] = useState([]);
  const { theme, setTheme } = useTheme();
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
    <div className="flex justify-between items-center flex-col min-h-[500px] ">
      <div className="grid grid-cols-2 gap-8  ">
        {projects?.map((project: IProjectCard, id: number) => {
          return (
            <div
              key={id}
              className={`${
                theme === "light"
                  ? " border-primary hover:border-secondary"
                  : " border-border hover:border-primary "
              } flex items-center justify-center border border-1 rounded-xl w-full px-4 py-3`}
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
                  <div className="flex flex-col items-center justify-center w-full ">
                    {" "}
                    <div className="mb-3">
                      <Image
                        //   className={`${theme === "light" ? "opacity-none" : "opacity-80"} `}
                        src={project?.imgUrl as string}
                        alt={project?.description as string}
                        width={150}
                        height={150}
                        className="border rounded-lg"
                        style={{ width: "210px", height: "160px" }}
                      />
                    </div>
                    <div className="text-[14px] text-secondary">
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
    </div>
  );
};
