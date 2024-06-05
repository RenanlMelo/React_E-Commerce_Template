import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 1, // Percentual do elemento visível para disparar a animação
  });

  const variants = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="text-2xl pb-40 px-32 text-[#242432] bg-[#e0e0f0] tracking-wider">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl"
        >
          About Your Business
        </motion.h1>
        <motion.div className="w-full flex"
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}>
          This is just an example of what your business could look like
        </motion.div>
      </div>
    </>
  );
};
