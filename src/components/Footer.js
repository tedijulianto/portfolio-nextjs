import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light sm:text-base">
      <Layout className="py-8 flex items-center justify-center lg:flex-col lg:py-2">
        <span>{new Date().getFullYear()} &copy; Tedi Julianto</span>
      </Layout>
    </footer>
  );
};

export default Footer;
