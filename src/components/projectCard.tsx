import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface IProjectCard {
  title?: string;
  image?: string | ReactNode;
  href?: string;
}

export const ProjectCard: React.FC<IProjectCard> = () => {
  const projects = [
    {
      title: "First Active",
      href: `${process.env.FIRST_ACTIVE_URL}`,
      image: (
        <Image
          //   className={`${theme === "light" ? "opacity-none" : "opacity-80"} `}
          src="/first-active.jpg"
          alt="First Active 365"
          width={320}
          height={260}
          className="border rounded-lg"
        />
      ),
    },

    {
      title: "Bloco",
      href: `${process.env.BLOCO_URL}`,
      image: (
        <Image
          //   className={`${theme === "light" ? "opacity-none" : "opacity-80"} `}
          src="/bloco.jpg"
          alt="Bloco"
          width={320}
          height={260}
          className="border rounded-lg"
        />
      ),
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-10  ">
        {projects.map((project: IProjectCard, id: number) => {
          return (
            <div
              key={id}
              className="flex items-center justify-center border border-1 border-sub rounded-xl "
            >
              <Link
                href={project.href as string}
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
                    <div className="mb-4">{project.image}</div>
                    <div className="text-[18px] text-title">
                      {" "}
                      {project.title}
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
