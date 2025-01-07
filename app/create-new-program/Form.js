import React from 'react'
import WorkoutTypeDropdown from './WorkoutTypeDropdown';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import ExerciseTable from './ExerciseTable';

const Form = () => {
    const typesOptions = ['Select Exercise 1', 'Select Exercise 2', 'Select Exercise 3'];
    return (
        <div>
            <div className='flex items-center sm:flex-row flex-col gap-3 sm:gap-[26px] w-full'>
                <div className='w-full flex-1'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Program Name:</label>
                    <input type='text' placeholder='Enter Program name' className='mt-2 w-full h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal' />
                </div>
                <div className='w-full flex-1'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Workout type</label>
                    <WorkoutTypeDropdown label="Select Types" options={typesOptions} placeholder="Select Types" />
                </div>
            </div>
            <div className='mt-6 w-full flex items-start flex-col gap-2'>
                <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Program Description:</label>
                <textarea placeholder='Write Program Descrption' className='w-full outline-none rounded-[20px] resize-none h-[110px] sm:h-[186px] p-4 sm:p-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] leading-[20px] font-normal' />
            </div>

            {/* Week & Day & Part */}
            <div className='mt-6 sm:mt-[50px] flex flex-col gap-3 sm:gap-[26px]'>
                <div className='flex sm:items-center sm:flex-row flex-col gap-3 sm:gap-[30px]'>
                    <input type='text' placeholder='Week 1' className='w-full max-w-[1224px] h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal' />
                    <div className='flex items-center gap-3 sm:gap-[30px]'>
                        <button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'>Copy Week</button>
                        <button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'>Delete Week</button>
                    </div>
                </div>
                <div className='flex sm:items-center sm:flex-row flex-col gap-3 sm:gap-[30px]'>
                    <input type='text' placeholder='Day 1' className='w-full max-w-[1224px] h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal' />
                    <div className='flex items-center gap-3 sm:gap-[30px]'>
                        <button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap mr-[12px]'>Copy Day</button>
                        <button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'>Delete Day</button>
                    </div>
                </div>
                <div className='flex sm:items-center sm:flex-row flex-col gap-3 sm:gap-[30px]'>
                    <input type='text' placeholder='Part 1' className='w-full max-w-[1224px] h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal' />
                    <div className='flex items-center gap-3 sm:gap-[30px]'>
                        <button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap mr-[12px]'>Copy Part</button>
                        <button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'>Delete Part</button>
                    </div>
                </div>
            </div>

            <ExerciseTable />

            <div className='mt-8 flex flex-col gap-2'>
                <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Day Notes:</label>
                <textarea placeholder='Add notes for this day...' className='w-full outline-none rounded-2xl sm:rounded-[20px] resize-none h-[110px] sm:h-[186px] px-5 py-[15px] sm:p-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] leading-[20px] font-normal' />
            </div>
            <div className='mt-5 sm:mt-6 flex items-center gap-3 sm:gap-6'>
                <button
                    className="bg-white w-[107px] sm:w-[145px] h-[39px] sm:h-[56px] border border-[#EAEAEA] rounded-[43px] text-[#000000] text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium"
                >
                    Add Day
                </button>
                <button className="bg-[#EB3340] w-[106px] sm:w-[158px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium">
                    Add Week
                </button>
            </div>

            <div className='mt-6 sm:mt-[50px] flex items-start md:flex-row flex-col gap-6'>
                <div className='w-full flex flex-col gap-3 flex-1'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Price:</label>
                    <input type='text' placeholder='Enter Price' className=' w-full h-[48px] sm:h-[50px] rounded-[60px] bg-white sm:rounded-[60px] outline-none px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal' />
                </div>

                <div className='w-full flex flex-col gap-3 flex-1'>
                    <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Share this routine with (Email)</label>
                    <input type='text' placeholder='Enter email address to share with...' className='w-full h-[48px] sm:h-[50px] rounded-[60px] bg-white sm:rounded-[60px] outline-none px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal' />
                    <div className='mt-[14px] flex items-start gap-1.5 sm:gap-2.5'>
                        <input type="checkbox" className="ui-checkbox mt-0.5 min-w-[18px]" />
                        <p className='text-[#212529] text-[14px] sm:text-[16px] leading-[20px] font-medium'>Make this routine private <span className='text-[#EB3340]'>(only visible to you)</span></p>
                    </div>
                </div>
            </div>

            <div className='mt-6 sm:mt-5 flex flex-col gap-2 mb-5 sm:mb-6 md:mb-10 lg:mb-[50px]'>
                <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Program notes:</label>
                <textarea placeholder='Write notes here...' className='w-full outline-none rounded-2xl sm:rounded-[20px] resize-none h-[110px] sm:h-[186px] px-5 py-[15px] sm:p-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] leading-[20px] font-normal' />
            </div>

            <button
                className="bg-[#EB3340] w-[161px] sm:w-[236px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center"
            >
                Create Program <IoIosArrowForward className='text-[16px] sm:text-[18px]' />
            </button>

        </div>
    )
}

export default Form