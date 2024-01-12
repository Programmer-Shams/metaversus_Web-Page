"use client";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
        width={24}
        height={24}
      />
      <h2 className="font-extrabol text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
      <Image
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
        width={24}
        height={24}
      />
    </div>
  </motion.nav>
);

export default Navbar;
