import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const Introduction = () => {
    return (
        <>
            <div className='text-4xl text-[#242432] mt-32 mb-40 w-full flex flex-col justify-start items-start pl-32 tracking-wider -z-20'>
                <AnimatePresence>

                    <motion.p
                        initial={{ x: 75, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -75, opacity: 0 }}
                        transition={{ duration: .5 }}
                        className='font-bold'>This is my E-Commerce Template!</motion.p> <br /><br />
                    <motion.h1
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: .5, delay: .25 }} className='max-w-2xl text-left'>
                        Feel free to take a look and give your business a <strong>fresh</strong>, new face.
                    </motion.h1>
                </AnimatePresence>
                {/* <div className='-z-10 absolute right-0 translate-x-1/3 w-[824px] h-[824px] rounded-full rotate-45 bg-transparent shadow-[inset_0_0_30px_-10px_rgba(255,255,255,1)]'/>
                <div className='-z-10 absolute right-0 translate-x-1/2 top-0 w-[624px] h-[624px] rounded-full rotate-45 bg-transparent shadow-[inset_0_0_30px_-10px_rgba(255,255,255,1)]'/> */}
            </div> 
        </>
    )
}
