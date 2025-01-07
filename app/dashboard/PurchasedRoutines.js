import Image from 'next/image'
import React from 'react'

const PurchasedRoutines = () => {
  return (
    <div className='w-full'>
        <h1 className='text-[#000000] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] lg:leading-[75px] font-semibold tracking-[-0.02em] mb-6 md:mb-[51px]'>Purchased Routines</h1>

        <div className='bg-[#EB33400A] rounded-[20px] max-w-[839px] pt-12 md:pt-5 pb-12 flex items-center flex-col gap-6 md:gap-[42px]'>
            <Image src='/assets/no-results.svg' alt='no-results' width={301} height={245} className='lg:w-[301px] lg:h-[245px] w-[199px] h-[162px]' />
            <p className='text-[#000000] text-[14px] sm:text-[22px] sm:leading-[27.5px] font-normal text-center'>You haven't purchased any routines yet.</p>
        </div>
    </div>
  )
}

export default PurchasedRoutines