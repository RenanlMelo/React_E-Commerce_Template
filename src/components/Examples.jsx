import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Examples = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Dispara a animação apenas uma vez
        threshold: .5, // Percentual do elemento visível para disparar a animação
    });

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 50 },
    };

    return (
        <>
            <div className='text-2xl pb-40 px-32 text-[#242432] bg-[#e0e0f0]'>
                <motion.h1 
                initial={{ x: 75, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -75, opacity: 0 }}
                transition={{ duration: .5, delay: .35 }}
                className='px-12 font-bold text-3xl'>Latest Products</motion.h1>
                <div className='w-full flex tracking-wider justify-evenly items-center gap-x-10'>
                    {['Your Product', 'Your Product', 'Your Product', 'Your Product'].map((product, index) => (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className='w-full h-72 bg-transparent shadow-[0_0_15px_0_rgba(0,0,0,.4)] rounded-xl flex justify-center items-center text-center p-5 hover:scale-105 duration-200 hover:shadow-[0_0_24px_0_rgba(0,0,0,.3)]'
                        >
                            {product}
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
