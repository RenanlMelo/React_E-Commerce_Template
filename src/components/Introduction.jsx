import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Introduction = () => {
  return (
    <div className="relative text-4xl text-[#242432] mt-32 mb-96 mx-32 flex flex-col justify-center items-start gap-y-24 tracking-wider">
      <div className="whitespace-nowrap">
        <AnimatePresence>
          <motion.p
            initial={{ x: 75, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -75, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold"
          >
            This is my E-Commerce Template!
          </motion.p>
          <br />
          <br />
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-2xl text-left"
          >
            Feel free to take a look and give your business a{" "}
            <strong>fresh</strong>, new face.
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="relative max-w-xl">
        <AnimatePresence>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base"
          >
            Hey! <br />
            Explore a variety of templates that showcase the potential design of
            your business website.
            <br /> The possibilities are endless! So, if none of these examples
            meet your needs, don't hesitate to contact me.{" "}
            <strong>Together</strong>, we can find the perfect model for your
            business.
          </motion.p>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.input
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          value={"Get Started!"}
          type="button"
          className="px-4 py-2 rounded-xl border border-transparent bg-[#242432] text-[#ccc] hover:bg-[#e0e0f0] text-lg  hover:text-[#242432] border-[#242432] duration-300"
        />
      </AnimatePresence>
    </div>
  );
};
