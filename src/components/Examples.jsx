import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Examples = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Dispara a animação apenas uma vez
        threshold: .5, // Percentual do elemento visível para disparar a animação
    });

    const title = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    }

    const items = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 50 },
    };

    return (
        <>
            <div className='text-2xl pb-40 px-32 text-[#242432] bg-[#e0e0f0] tracking-wider'>
                <motion.h1 
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={title}
                transition={{ duration: 0.5 }}
                className='px-12 font-bold text-3xl'>Latest Products</motion.h1>
                <div className='w-full flex justify-evenly items-center gap-x-10'>
                    {['Your Product', 'Your Product', 'Your Product', 'Your Product'].map((product, index) => (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={items}
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
