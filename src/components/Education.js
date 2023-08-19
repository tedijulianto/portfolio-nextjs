import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-3/4 mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-1 h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[29px] xs:left-[19px] xs:top-1.5"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Information Systems"
            time="2020"
            place="Jakarta, Indonesia"
            info="Relevant courses included Data Structures and Algorithms, Database and Web Programming."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
