"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  slideInFromTop,
  slideInFromRight,
  slideInFromLeft,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <section
      id="hero"
      className="flex items-center min-h-screen bg-primary text-white"
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col items-start"
          variants={slideInFromLeft(0.5)}
        >
          <div className="flex items-center mb-4">
            <motion.div
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
              variants={slideInFromTop}
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="ml-2 text-lg font-semibold Welcome-text">
                Raman Mohammed - Fullstack Developer
              </h1>
            </motion.div>
          </div>
          <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-5xl font-bold leading-tight mb-6"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              cool stuff
            </span>{" "}
            with code
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            With over three years of development experience and a
            Bachelor&apos;s in Computer Science specializing in System
            Development, I specialize in Java, React.js, TypeScript, Node.js,
            MySQL, Azure, and more. Passionate about building scalable and
            reliable distributed systems, continuously learning to tackle new
            challenges in software infrastructure.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            href="#projects"
            className="inline-block px-6 py-2 bg-accent rounded-lg hover:bg-accent-hover transition-colors button-primary z-20"
          >
            Explore My Projects
          </motion.a>
        </motion.div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0 flex justify-center items-center"
        >
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden bg-[#ffffff08] backdrop-blur-[12px] border-2 border-[#645AFF] flex justify-center items-center shadow-lg shadow-[#645AFF]/70">
            <div className="absolute inset-0 bg-gradient-to-r from-[#645AFF55] via-[#9b6bff55] to-[#d98eff55] mix-blend-normal opacity-60"></div>
            <Image
              src="/ramanbild.png"
              alt="Raman Mohammed Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full ml-5 opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContent;