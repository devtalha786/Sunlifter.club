import React from 'react'

const SocialMediaLink = () => {
    return (
        <div className='border-b border-[#D9D9D9]  pb-6 md:pb-10 lg:pb-[60px] mt-6 md:mt-10 lg:mt-[60px]'>
            <h1 className='text-[#060606] text-[24px] md:text-[32px] md:leading-[40px] font-semibold tracking-[0.01em]'>Social Media Link *</h1>
            <div className='mt-5 sm:mt-[30px] flex flex-col gap-3 sm:gap-5 lg:gap-[30px]'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Instagram</label>
                    <input type='text' placeholder='Add Link' className='h-12 sm:h-[50px] w-full bg-white rounded-[60px] px-5 placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px] outline-none' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Facebook</label>
                    <input type='text' placeholder='Add Link' className='h-12 sm:h-[50px] w-full bg-white rounded-[60px] px-5 placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px] outline-none' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Twitter</label>
                    <input type='text' placeholder='Add Link' className='h-12 sm:h-[50px] w-full bg-white rounded-[60px] px-5 placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px] outline-none' />
                </div>
            </div>
        </div>
    )
}

export default SocialMediaLink