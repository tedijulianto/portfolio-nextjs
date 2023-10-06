import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";
import { useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Typewriter from "typewriter-effect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  });

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About | Tedi Julianto</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Hi, I'm Tedi Julianto"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-8 text-center text-7xl sm:text-6xl xs:text-4xl">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="col-span-8 md:order-2 mx-[400px] 2xl:mx-24 md:mx-0">
              <p className="font-medium">
                A web developer with a passion for creating beautiful,
                functional, and user-centered digital experiences. I am always
                looking for new and innovative ways to bring my client's visions
                to life. I believe that design is about more than just making
                things look pretty, it's about solving problems and creating
                intuitive, enjoyable experiences for users. Whether I'm working
                on a website, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-8 flex items-center justify-center gap-5 md:order-3">
              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xs:text-sm xl:text-center">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xs:text-sm xl:text-center">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
