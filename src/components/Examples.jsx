import React from 'react'
// shadow-[0_-10px_20px_-15px_rgba(0,0,0,1)]
export const Examples = () => {
    return (
        <>
            <div className='text-2xl pb-40 px-32 text-[#242432] bg-[#e0e0f0] '> 
                <h1 className='px-12 -translate-y-full font-bold text-3xl'>Latest Products</h1>
                <div className='w-full flex tracking-wider -z-20 justify-evenly items-center gap-x-10'>
                    <div className='w-full h-72 bg-transparent shadow-[0_0_15px_0_rgba(0,0,0,.4)] rounded-xl flex justify-center items-start text-center p-5 hover:scale-105 duration-200 hover:shadow-[0_0_24px_0_rgba(0,0,0,.3)]'>Your Product</div>
                    <div className='w-full h-72 bg-transparent shadow-[0_0_15px_0_rgba(0,0,0,.4)] rounded-xl flex justify-center items-end text-center p-5 hover:scale-105 duration-200 hover:shadow-[0_0_24px_0_rgba(0,0,0,.3)]'>Your Product</div>
                    <div className='w-full h-72 bg-transparent shadow-[0_0_15px_0_rgba(0,0,0,.4)] rounded-xl flex justify-center items-start text-center p-5 hover:scale-105 duration-200 hover:shadow-[0_0_24px_0_rgba(0,0,0,.3)]'>Your Product</div>
                    <div className='w-full h-72 bg-transparent shadow-[0_0_15px_0_rgba(0,0,0,.4)] rounded-xl flex justify-center items-end text-center p-5 hover:scale-105 duration-200 hover:shadow-[0_0_24px_0_rgba(0,0,0,.3)]'>Your Product</div>
                </div>
            </div>
        </>
    )
}
