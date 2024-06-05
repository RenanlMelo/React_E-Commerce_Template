import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Introduction = () => {
  const [animated, setAnimated] = useState(true);

  return (
    <>
      <AnimatePresence>
        {animated && (
          <div className="relative text-4xl text-[#242432] mt-20 mb-96 mx-32 flex flex-col justify-center items-start gap-y-12 tracking-wider">
            <div className="whitespace-nowrap">
              <motion.div
                key="p1"
                initial={{ x: 75, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -75, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold"
              >
                This is my E-Commerce Template!
              </motion.div>
              <br />
              <br />
              <motion.div
                key="h1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: .25 } }}
                exit={{ x: -50, opacity: 0, transition: { duration: 0.5, delay: 0 } }}
                className="max-w-2xl text-left text-2xl"
              >
                Feel free to take a look and give your business a{" "}
                <strong>fresh</strong>, new face.
              </motion.div>
            </div>
            <div className="relative max-w-xl">
              <motion.div
                key="p2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: .5 } }}
                exit={{ x: -50, opacity: 0, transition: { duration: 0.5, delay: 0 } }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base"
              >
                Hey! <br />
                Explore a variety of templates that showcase the potential design
                of your business website.
                <br /> The possibilities are endless! So, if none of these
                examples meet your needs, don't hesitate to contact me.{" "}
                <strong>Together</strong>, we can find the perfect model for your
                business.
              </motion.div>
            </div>
            <motion.div
              key="input"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: .75 } }}
              exit={{ x: -50, opacity: 0, transition: { duration: 0.5, delay: 0 } }}
              className="px-4 py-2 rounded-xl border border-transparent bg-[#242432] text-[#ccc] hover:bg-[#e0e0f0] text-lg hover:text-[#242432] hover:border-[#242432] duration-300"
            >
              <motion.input
                type="button"
                value="Get Started!"
                onClick={() => setAnimated(!animated)}
                className="bg-transparent border-none outline-none cursor-pointer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
