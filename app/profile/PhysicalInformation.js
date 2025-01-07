import React from 'react'
import NumberInput from './NumberInput'

const PhysicalInformation = () => {
    return (
        <div className='border-b border-[#D9D9D9] pb-6 sm:pb-8 md:pb-10 lg:pb-[60px]'>
            <h1 className='text-[#060606]  text-[24px] md:text-[32px] md:leading-[40px] font-semibold tracking-[0.01em]'>Physical Information</h1>
            <div className='mb-6 md:mb-8 lg:mb-10 mt-6 sm:mt-8 lg:mt-11 flex sm:items-center sm:flex-row flex-col gap-2.5 md:gap-5 lg:gap-[30px]'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className="ui-checkbox min-w-[18px]" />
                    <p className='text-[#212529] text-[14px] sm:text-[18px] font-medium leading-[22.5px]'>Use lbs instead of kg</p>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className="ui-checkbox min-w-[18px]" />
                    <p className='text-[#212529] text-[14px] sm:text-[18px] font-medium leading-[22.5px]'>height to be in feet & inches</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-[30px]'>
                <NumberInput
                    label="Current Weight (lbs)"
                    placeholder="Enter Current Weight"
                />
                <NumberInput
                    label="Weight Goal (lbs)"
                    placeholder="Enter Weight Goal"
                />
                <div className='w-full flex flex-col gap-2'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] leading-[20px] font-medium'>Height</label>
                    <input type='number' placeholder='Enter Your Height' className='w-full h-[48px] sm:h-[50px] rounded-[60px] px-5 outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]' />
                </div>
            </div>
        </div>
    )
}

export default PhysicalInformation