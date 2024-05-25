import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Header.css';

export const Header = () => {
    const [dropDown, setDropDown] = useState(false);

    const navbarRef = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);

    const dropDownRef = useRef(null);
    const [dropDownX, setDropDownX] = useState(0);

    const updateDimensions = () => {
        console.log("Renderizou");
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.clientHeight);
        }
        if (dropDownRef.current) {
            const dropXpos = dropDownRef.current.getBoundingClientRect().x;
            setDropDownX(dropXpos);
        }
    };

    useEffect(() => {
        // Initial dimension calculation
        updateDimensions();

        // Update dimensions on window resize
        window.addEventListener('resize', updateDimensions);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className='px-32 flex justify-between gap-x-20 items-center h-full mx-auto z-20'>
            <h2 className='text-[#242432] bold text-xl py-4'>
                React E-Commerce Template
            </h2>
            <header ref={navbarRef} className='flex gap-x-6 text-[#242432] justify-center items-center py-4'>
                <a className='border-b-2 px-2 py-1 border-transparent hover:border-black/50 duration-200'>Home</a>
                <div ref={dropDownRef} onClick={() => setDropDown(!dropDown)} className='relative flex justify-center items-center h-full gap-x-1 px-2 py-1 border-b-2 border-transparent hover:border-black/50 duration-200'>
                    <a>Buy</a>
                    <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>keyboard_arrow_down</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Rounded" transform="translate(-616.000000, -2467.000000)">
                                <g id="Hardware" transform="translate(100.000000, 2404.000000)">
                                    <g id="-Round-/-Hardware-/-keyboard_arrow_down" transform="translate(510.000000, 54.000000)">
                                        <g>
                                            <rect id="Rectangle-Copy-103" x="0" y="0" width="24" height="24"></rect>
                                            <path d="M8.12,9.29 L12,13.17 L15.88,9.29 C16.27,8.9 16.9,8.9 17.29,9.29 C17.68,9.68 17.68,10.31 17.29,10.7 L12.7,15.29 C12.31,15.68 11.68,15.68 11.29,15.29 L6.7,10.7 C6.31,10.31 6.31,9.68 6.7,9.29 C7.09,8.91 7.73,8.9 8.12,9.29 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <AnimatePresence>
                    {dropDown && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.3 }}
                            className='z-10 absolute bg-[#f0f0f0] w-40 h-48'
                            style={{ top: navbarHeight, left: dropDownX }}
                        >
                            <ul className='text-lg text-[#161620] font-semibold flex flex-col justify-center items-center h-full'>
                                {['Product1', 'Product2', 'Product3'].map((product, index) => (
                                    <li key={index} className='w-full h-full flex justify-center items-center border-transparent hover:border-transparent duration-200'>
                                        <span className='border-b-2 border-transparent duration-200'>{product}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                <a className='border-b-2 px-2 py-1 border-transparent hover:border-black/50 duration-200'>Account</a>
            </header>
        </div>
    );
};
