import React from 'react'
import NumberInput from './NumberInput'
import AddExercise from './AddExercise'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io';


const ExerciseOneRepMaxes = () => {
    const typesOptions = ['Squat', 'Bench', 'Deadlift'];
    return (
        <div className='border-b border-[#D9D9D9] pb-6 sm:pb-8 md:pb-10 lg:pb-[60px] mt-8 sm:mt-8 md:mt-10 lg:mt-[60px]'>
            <h1 className='text-[#060606] text-[24px] md:text-[32px] md:leading-[40px] font-semibold tracking-[0.01em]'>Exercise One Rep Maxes</h1>
            <p className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[30px] font-normal mt-2.5'>Enter your One Rep Max (or estimate) for each exercise. If you're unsure, an estimate is sufficient.</p>

            <button className='mt-3 sm:mt-5 mb-6 lg:my-[30px] text-[#EB3340] text-[14px] sm:text-[18px] leading-[30px] font-normal underline underline-offset-2 text-left'>Click here to learn more about one Rep Max Testing</button>

            <div className='flex flex-col gap-[30px]'>
                <div className='flex sm:items-center sm:flex-row flex-col gap-3 sm:gap-6'>
                    <h2 className='text-[#212529] text-[16px] leading-[20px] font-medium sm:h-[50px] w-full max-w-[100px] md:max-w-[230px] flex items-center'>Squat</h2>
                    <div className='w-full sm:max-w-[384px]'>
                        <NumberInput placeholder="Current" />
                    </div>
                    <div className='w-full sm:max-w-[384px]'>
                        <NumberInput placeholder="Goal" />
                    </div>
                </div>
                <div className='flex sm:items-center  sm:flex-row flex-col gap-4 sm:gap-6'>
                    <h2 className='text-[#212529] text-[16px] leading-[20px] font-medium sm:h-[50px] w-full max-w-[100px] md:max-w-[230px] flex items-center'>Bench</h2>
                    <div className='w-full sm:max-w-[384px]'>
                        <NumberInput placeholder="Current" />
                    </div>
                    <div className='w-full sm:max-w-[384px]'>
                        <NumberInput placeholder="Goal" />
                    </div>
                </div>
                <div className='flex sm:items-center  sm:flex-row flex-col gap-4 sm:gap-6'>
                    <h2 className='text-[#212529] text-[16px] leading-[20px] font-medium sm:h-[50px] w-full max-w-[100px] md:max-w-[230px] flex items-center'>Deadlift</h2>
                    <div className='w-full sm:max-w-[384px]'>
                        <NumberInput placeholder="Current" />
                    </div>
                    <div className='w-full sm:max-w-[384px]'>
                        <NumberInput placeholder="Goal" />
                    </div>
                </div>
            </div>

            <div className='mt-[30px]'>
                <h2 className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px] mb-2'>Add Additional Exercise:</h2>
                <div className='flex sm:items-center items-start sm:flex-row flex-col gap-4 sm:gap-10 lg:gap-[50px]'>
                    <div className='w-full max-w-[879px]'>
                        <AddExercise options={typesOptions} placeholder="Select an Exercise" />
                    </div>
                    <button className='text-[#EB3340] text-nowrap text-[16px] sm:text-[20px] font-medium leading-[25px] underline underline-offset-2'>Add Exercise</button>
                </div>
            </div>
            <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10'>
           
            <Link href="/clientStats" passHref>
        <button className="bg-[#EB3340] w-[133px] sm:w-[199px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center">
          View Stats <IoIosArrowForward className="text-[16px] sm:text-[18px]" />
        </button> </Link>
                </div>
        </div>
    )
}

export default ExerciseOneRepMaxes 