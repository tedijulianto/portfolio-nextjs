import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, className = "" }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: "var(--x)",
        y: "var(--y)",
        transition: { duration: 1.5 },
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 sm:p-2 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill
          name="HTML"
          className="[--x:0vw] [--y:-9vw] xs:[--y:-25vw] sm:[--y:-12vw] lg:[--y:-14vw] xl:[--y:-14vw] 2xl:[--y:-13vw]"
        />
        <Skill
          name="CSS"
          className="[--x:-10vw] [--y:0vw] xs:[--x:-17vw] sm:[--x:-20vw] md:[--x:-15vw] lg:[--x:-15vw] xl:[--x:-16vw] 2xl:[--x:-15vw]"
        />
        <Skill
          name="JavaScript"
          className="[--x:10vw] [--y:0vw] xs:[--x:23vw] sm:[--x:20vw] md:[--x:15vw] lg:[--x:15vw] xl:[--x:16vw] 2xl:[--x:15vw]"
        />
        <Skill
          name="ReactJS"
          className="[--x:0vw] [--y:9vw] xs:[--y:25vw] sm:[--y:12vw] lg:[--y:14vw] xl:[--y:14vw] 2xl:[--y:13vw]"
        />
        <Skill
          name="NextJS"
          className="[--x:15vw] [--y:12vw] xs:[--x:32vw] xs:[--y:12vw] sm:[--x:22vw] sm:[--y:15vw] md:[--x:20vw] md:[--y:17vw] lg:[--x:19vw] lg:[--y:12vw] xl:[--x:19vw] xl:[--y:12vw]"
        />
        <Skill
          name="Tailwind"
          className="[--x:15vw] [--y:-12vw] xs:[--x:32vw] xs:[--y:-12vw] sm:[--x:22vw] sm:[--y:-15vw] md:[--x:20vw] md:[--y:-17vw] lg:[--x:19vw] lg:[--y:-12vw] xl:[--x:19vw] xl:[--y:-12vw]"
        />
        <Skill
          name="Bootstrap"
          className="[--x:-15vw] [--y:12vw] xs:[--x:-32vw] xs:[--y:12vw] sm:[--x:-22vw] sm:[--y:15vw] md:[--x:-20vw] md:[--y:17vw] lg:[--x:-19vw] lg:[--y:12vw] xl:[--x:-19vw] xl:[--y:12vw]"
        />
        <Skill
          name="Laravel"
          x="-16vw"
          y="-12vw"
          className="[--x:-16vw] [--y:-12vw] xs:[--x:-32vw] xs:[--y:-12vw] sm:[--x:-22vw] sm:[--y:-15vw] md:[--x:-20vw] md:[--y:-17vw] lg:[--x:-19vw] lg:[--y:-12vw] xl:[--x:-19vw] xl:[--y:-12vw]"
        />
      </div>
    </>
  );
};

export default Skills;
