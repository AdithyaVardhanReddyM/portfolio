"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { ArrowRight, MoveRight } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";

export function Projects() {
  return (
    <div className="w-full h-full flex items-center justify-center z-10">
      <div className="w-full h-full">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Projects
          </motion.h1>
          <div className="border rounded-full border-slate-500 p-2 mt-10">
            <MoveRight className="text-slate-500" />
          </div>
        </LampContainer>
      </div>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center h-full w-full gap-4 mx-auto px-8">
        <Card title="SmartLearn" icon={<AceternityIcon />}>
          <LinkPreview
            url="https://github.com/AdithyaVardhanReddyM/SmartLearn"
            imageSrc="/smartlearn.png"
            isStatic
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </LinkPreview>
        </Card>
        <Card title="Communx" icon={<AceternityIcon />}>
          <LinkPreview
            url="https://github.com/AdithyaVardhanReddyM/Communx"
            imageSrc="/communx.png"
            isStatic
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [255, 149, 0],
                [255, 100, 0],
              ]}
              dotSize={2}
            />
          </LinkPreview>
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return <h1 className="text-xl font-bold">Project</h1>;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
