"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { PinContainer } from "./ui/3d-pin";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function About() {
  return (
    <div className="h-screen grid grid-cols-2 grid-rows-2 w-full bg-black p-2">
      <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md ">
        <h1 className="text-3xl font-bold">About</h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <PinContainer
          title="Visit my GitHub"
          href="https://github.com/AdithyaVardhanReddyM"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <div className="flex flex-1 font-bold text-slate-100 text-2xl justify-center items-center w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <div className="w-full flex flex-col justify-center items-center">
                TechStack
                <p className="text-gray-700">hover 👇 </p>
              </div>
            </div>
          </div>
        </PinContainer>
      </div>

      <div className="flex items-center justify-center z-10 ">
        <CardStack items={CARDS} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center z-50">
          <AnimatedTooltip items={people} />
        </div>
        <div className="flex flex-row items-center justify-center z-50 ">
          <AnimatedTooltip items={people_2} />
        </div>
      </div>
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const people = [
  {
    id: 1,
    name: "NEXT JS",
    designation: "",
    image: "/nextjs.png",
  },
  {
    id: 2,
    name: "Typescript",
    designation: "",
    image: "/typescript.png",
  },
  {
    id: 3,
    name: "Mongo DB",
    designation: "",
    image: "/mongodb.png",
  },
  {
    id: 4,
    name: "Prisma ORM",
    designation: "",
    image: "/prisma.png",
  },
  {
    id: 5,
    name: "Drizzle ORM",
    designation: "",
    image: "/drizzle.png",
  },
  {
    id: 6,
    name: "Javascript",
    designation: "",
    image: "/javascript.png",
  },
  {
    id: 7,
    name: "Neon DB",
    designation: "",
    image: "/neondb.png",
  },
];

const people_2 = [
  {
    id: 1,
    name: "Node JS",
    designation: "",
    image: "/nodejs.png",
  },
  {
    id: 2,
    name: "Express JS",
    designation: "",
    image: "/express.png",
  },
  {
    id: 3,
    name: "React",
    designation: "",
    image: "/react.png",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    designation: "",
    image: "/tailwindcss.png",
  },
  {
    id: 5,
    name: "Socket.io",
    designation: "",
    image: "/socketio.png",
  },
  {
    id: 6,
    name: "Clerk",
    designation: "",
    image: "/clerk.png",
  },
  {
    id: 7,
    name: "Mongoose",
    designation: "",
    image: "/mongoose.png",
  },
];

const CARDS = [
  {
    id: 0,
    name: "",
    designation: "",
    content: (
      <p>
        I develop websites primarily using{" "}
        <Highlight>Next.js and TypeScript</Highlight>, bringing a creative and
        innovative approach to each project to ensure unique and engaging user
        experiences.
      </p>
    ),
  },
  {
    id: 1,
    name: "",
    designation: "",
    content: (
      <p>
        My experience spans various ORMs, including{" "}
        <Highlight>Prisma, Drizzle, and Mongoose,</Highlight> as well as
        different databases like <Highlight>MongoDB and PostgreSQL,</Highlight>{" "}
        enabling me to manage and optimize data efficiently
      </p>
    ),
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: (
      <p>
        I am passionate about integrating{" "}
        <Highlight>AI into projects</Highlight>, leveraging its capabilities to
        enhance functionality, improve user interactions, and deliver smarter
        solutions.
      </p>
    ),
  },
  {
    id: 3,
    name: "",
    designation: "",
    content: (
      <p>
        As a full-stack developer, I am proficient in both{" "}
        <Highlight>server and serverless frameworks,</Highlight> allowing me to
        build{" "}
        <Highlight>robust, scalable, and versatile applications</Highlight> that
        meet diverse client needs.
      </p>
    ),
  },
];
