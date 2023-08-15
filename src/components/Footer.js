import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-2">
        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
        <div>
          Build With{" "}
          <span className="text-primary dark:text-teal-400 text-2xl px-1 lg:py-2">
            &#9825;
          </span>{" "}
          by Tedi Julianto
        </div>
        <Link href="/" target={"_blank"}>
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
