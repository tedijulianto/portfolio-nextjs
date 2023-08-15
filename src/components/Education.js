import { motion } from "framer-motion";

const Details = ({ type, time, place, info }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
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
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-3/4 mx-auto relative lg:w-[90%] md:w-full">
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Information Systems"
            time="2020"
            place="Jakarta, Indonesia"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
