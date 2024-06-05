import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Examples = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Dispara a animação apenas uma vez
        threshold: 1, // Percentual do elemento visível para disparar a animação
    });

    const title = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    }

    const items = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const button = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <>
            <div className='text-2xl pb-40 px-32 mt-20 text-[#242432] bg-[#e0e0f0] tracking-wider'>
                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={title}
                    transition={{ duration: 0.5 }}
                    className='font-bold text-3xl mb-12'>Latest Products</motion.h1>
                <div className='w-full flex justify-evenly items-center gap-x-10'>
                    {['Your Product', 'Your Product', 'Your Product', 'Your Product'].map((product, index) => (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={items}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className='w-full h-60 bg-transparent shadow-[0_0_15px_0_rgba(0,0,0,.4)] rounded-xl flex justify-center items-center text-center p-5 hover:scale-105 duration-200 hover:shadow-[0_0_40px_0_rgba(0,0,0,.3)]'
                        >
                            {product}
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    key="input"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={button}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-12 w-full flex justify-end"
                >
                    <motion.button
                        onClick={() => setAnimated(!animated)}
                        className="px-4 py-2 cursor-pointer rounded-xl border border-transparent bg-[#242432] text-[#ccc] hover:bg-[#e0e0f0] text-lg hover:text-[#242432] hover:border-[#242432] duration-300"
                    >Next</motion.button>
                </motion.div>
            </div>
        </>
    );
}
