"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/proj1.png";
import project2 from "../assets/proj2.jpg";
import project5 from "../assets/proj5.png";

const projects = [
  {
    title: "Blog Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate quam voluptatibus ullam suscipit amet rem deserunt architecto ab molestias, magni earum, et sint voluptates aliquid dolor ipsam explicabo rerum cumque omnis doloremque reiciendis? Quisquam, quia nostrum. Tenetur rerum, aliquid laudantium consectetur reprehenderit, repellendus laboriosam provident beatae veniam ratione voluptate nam commodi quos saepe odio, officia molestiae? Molestias pariatur consectetur voluptatem sunt nisi eaque accusamus aspernatur est",
    devStack: "NextJS , Supabase, Prisma ,TailwindCSS , shadcn",
    link: "#",
    git: "https://github.com/azzamabdillah312007/Blog-next.git",
    src: project,
  },
  {
    title: "Interactive E-learning Platform",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate quam voluptatibus ullam suscipit amet rem deserunt architecto ab molestias, magni earum, et sint voluptates aliquid dolor ipsam explicabo rerum cumque omnis doloremque reiciendis? Quisquam, quia nostrum. Tenetur rerum, aliquid laudantium consectetur reprehenderit, repellendus laboriosam provident beatae veniam ratione voluptate nam commodi quos saepe odio, officia molestiae? Molestias pariatur consectetur voluptatem sunt nisi eaque accusamus aspernatur est",
    devStack: "NextJS, TailwindCSS",
    link: "#",
    git: "#",
    src: project2,
  },
  {
    title: "Portfolio Website Basic Version",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate quam voluptatibus ullam suscipit amet rem deserunt architecto ab molestias, magni earum, et sint voluptates aliquid dolor ipsam explicabo rerum cumque omnis doloremque reiciendis? Quisquam, quia nostrum. Tenetur rerum, aliquid laudantium consectetur reprehenderit, repellendus laboriosam provident beatae veniam ratione voluptate nam commodi quos saepe odio, officia molestiae? Molestias pariatur consectetur voluptatem sunt nisi eaque accusamus aspernatur est",
    devStack: "HTML, CSS, Javascipt",
    link: "#",
    git: "git@github.com:azzamabdillah312007/portfoliobasic.git",
    src: project5,
  },
];

export const Portfolio = () => {
  return (
    <div
      className="text-white mt-40 bg-gradient-to-b from-black to-[#381a5f] py-18"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 my-12">
        Selected <span className="text-orange-400 text-center">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1
                ? " md:flex-row-reverse gap-12"
                : " md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <h2 className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </h2>
              <p className="text-orange-400">{project.devStack}</p>
              <div className="w-64 ga h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">Link</a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt="project-title"
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
