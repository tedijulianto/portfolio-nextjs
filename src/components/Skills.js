import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, className = "" }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
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
          x="0vw"
          y="-9vw"
          className="xs:!translate-y-[-25vw] sm:!translate-y-[-12vw] lg:!translate-y-[-14vw] xl:!translate-y-[-14vw] 2xl:!translate-y-[-13vw]"
        />
        <Skill
          name="CSS"
          x="-10vw"
          y="0vw"
          className="xs:!translate-x-[-16vw] sm:!translate-x-[-20vw] md:!translate-x-[-15vw] lg:!translate-x-[-15vw] xl:!translate-x-[-16vw] 2xl:!translate-x-[-15vw]"
        />
        <Skill
          name="JavaScript"
          x="10vw"
          y="0vw"
          className="xs:!translate-x-[23vw] sm:!translate-x-[22vw] md:!translate-x-[15vw] lg:!translate-x-[17vw] xl:!translate-x-[16vw] 2xl:!translate-x-[15vw]"
        />
        <Skill
          name="ReactJS"
          x="0vw"
          y="9vw"
          className="xs:!translate-y-[25vw] sm:!translate-y-[12vw] lg:!translate-y-[14vw] xl:!translate-y-[14vw] 2xl:!translate-y-[13vw]"
        />
        <Skill
          name="NextJS"
          x="15vw"
          y="12vw"
          className="xs:!translate-x-[32vw] xs:!translate-y-[12vw] sm:!translate-x-[22vw] sm:!translate-y-[15vw] md:!translate-x-[20vw] md:!translate-y-[17vw] lg:!translate-x-[19vw] lg:!translate-y-[12vw] xl:!translate-x-[19vw] xl:!translate-y-[12vw]"
        />
        <Skill
          name="Tailwind"
          x="15vw"
          y="-12vw"
          className="xs:!translate-x-[32vw] xs:!translate-y-[-12vw] sm:!translate-x-[22vw] sm:!translate-y-[-15vw] md:!translate-x-[20vw] md:!translate-y-[-15vw] lg:!translate-x-[19vw] lg:!translate-y-[-12vw] xl:!translate-x-[19vw] xl:!translate-y-[-12vw]"
        />
        <Skill
          name="Bootstrap"
          x="-15vw"
          y="12vw"
          className="xs:!translate-x-[-32vw] xs:!translate-y-[12vw] sm:!translate-x-[-22vw] sm:!translate-y-[15vw] md:!translate-x-[-20vw] md:!translate-y-[15vw] lg:!translate-x-[-19vw] lg:!translate-y-[12vw] xl:!translate-x-[-19vw] xl:!translate-y-[12vw]"
        />
        <Skill
          name="Laravel"
          x="-16vw"
          y="-12vw"
          className="xs:!translate-x-[-32vw] xs:!translate-y-[-12vw] sm:!translate-x-[-22vw] sm:!translate-y-[-15vw] md:!translate-x-[-20vw] md:!translate-y-[-15vw] lg:!translate-x-[-19vw] lg:!translate-y-[-12vw] xl:!translate-x-[-19vw] xl:!translate-y-[-12vw]"
        />
      </div>
    </>
  );
};

export default Skills;
