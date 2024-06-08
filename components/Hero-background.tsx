"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import PhotoCard from "./Photo-card";

export function Hero() {
  const words = ["innovative", "creative", "robust", "elegant"];
  return (
    <HeroHighlight className="z-10 bg-transparent">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        {/* With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight> */}
        <div className="h-full grid grid-cols-2 gap-28 mx-auto">
          <div className="h-full flex w-full justify-center items-center">
            <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
              Building
              <FlipWords words={words} /> <br />
              web solutions as a <br />
              <Highlight className="text-black dark:text-white">
                full stack developer
              </Highlight>
            </div>
          </div>
          <PhotoCard />
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
