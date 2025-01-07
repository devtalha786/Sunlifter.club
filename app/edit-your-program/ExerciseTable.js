import React from 'react'

import { IoIosArrowForward } from 'react-icons/io';
import SelectExerciseDropdown from './SelectExerciseDropdown';
const ExerciseTable = () => {
    const typesOptions = ['Legs - Squats', 'Back - Barbell Rows', 'Chest - Push - Ups', 'Back - Barbell Rows'];

    return (
        <div className='w-full mt-6'>
            {/* Desktop Table */}
            <div
                className="sm:block hidden w-full border border-[#E9E9E9] rounded-[22px] bg-white overflow-x-auto overflow-y-visible"
                style={{ backdropFilter: "blur(40px)" }}
            >
                <table className="w-full">
                    <thead className="border-b border-[#E9E9E9] h-[72px] uppercase">
                        <tr>
                            <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[425px] text-left">Exercise</th>
                            <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[209px] text-left">Reps</th>
                            <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[209px] text-left">Sets</th>
                            <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[209px] text-left">Weight/Time</th>
                            <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[210px] text-left">Rest</th>
                            <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[210px] text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-[100px]">
                            <td className="px-6 w-full min-w-[300px] 2xl:max-w-[425px]">
                                <SelectExerciseDropdown defaultValue="Legs - Squats" label="Select exercise" options={typesOptions} placeholder="Select exercise" />
                            </td>
                            <td className="px-6 w-full max-w-[209px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="5" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full max-w-[209px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="4" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full max-w-[209px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="70%" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full max-w-[210px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="60s" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full min-w-[210px]">
                                <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Copy</button>
                                <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2 ml-[30px]">Delete</button>
                            </td>
                        </tr>
                        <tr className="h-[100px]">
                            <td className="px-6 w-full min-w-[300px] 2xl:max-w-[425px]">
                                <SelectExerciseDropdown defaultValue="Back - Barbell Rows" label="Select exercise" options={typesOptions} placeholder="Select exercise" />
                            </td>
                            <td className="px-6 w-full max-w-[209px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="5" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full max-w-[209px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="4" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full max-w-[209px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="70%" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full max-w-[210px]">
                                <div className="flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px]">
                                    <input type='text' defaultValue="60s" className="h-full outline-none w-full text-[#292933] text-[16px] leading-[22px] font-normal" />
                                </div>
                            </td>
                            <td className="px-6 w-full min-w-[210px]">
                                <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Copy</button>
                                <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2 ml-[30px]">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className='sm:hidden block space-y-6'>
                <div className='w-full bg-[#FFFFFF] rounded-[10px] py-6 px-3'>
                    <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-1.5'>Exercise</h3>
                    <SelectExerciseDropdown label="Select exercise" defaultValue="Back - Barbell Rows" options={typesOptions} placeholder="Select exercise" />

                    <div className='mt-6 flex items-start overflow-x-auto'>
                        <div className='border-r border-[#D9D9D9] pr-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Reps</h3>
                            <input type='text' defaultValue="5" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                        <div className='border-r border-[#D9D9D9] px-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>sets</h3>
                            <input type='text' defaultValue="3" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                        <div className='border-r border-[#D9D9D9] px-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Weight/time</h3>
                            <input type='text' defaultValue="75%" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                        <div className='px-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Rest</h3>
                            <input type='text' defaultValue="60s" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                    </div>

                    <div className='mt-6 mb-0.5'>
                        <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium mb-2 uppercase'>Actions</h3>
                        <div className='flex items-center gap-[30px]'>
                            <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Copy</button>
                            <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Delete</button>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#FFFFFF] rounded-[10px] py-6 px-3'>
                    <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-1.5'>Exercise</h3>
                    <SelectExerciseDropdown label="Select exercise" defaultValue="Legs - Squats" options={typesOptions} placeholder="Select exercise" />

                    <div className='mt-6 flex items-start overflow-x-auto'>
                        <div className='border-r border-[#D9D9D9] pr-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Reps</h3>
                            <input type='text' defaultValue="5" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                        <div className='border-r border-[#D9D9D9] px-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>sets</h3>
                            <input type='text' defaultValue="3" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                        <div className='border-r border-[#D9D9D9] px-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Weight/time</h3>
                            <input type='text' defaultValue="75%" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                        <div className='px-[16px]'>
                            <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Rest</h3>
                            <input type='text' defaultValue="60s" className="h-full outline-none w-full text-[#292933] text-[14px] leading-[17.5px] font-normal" />
                        </div>
                    </div>

                    <div className='mt-6 mb-0.5'>
                        <h3 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium mb-2 uppercase'>Actions</h3>
                        <div className='flex items-center gap-[30px]'>
                            <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Copy</button>
                            <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className='mt-6 flex items-center gap-3 sm:gap-6'>
                <button
                    className="bg-[#EB3340] w-[140px] sm:w-[208px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center"
                >
                    Add Exercise <IoIosArrowForward className='text-[16px] sm:text-[18px]' />
                </button>
                <button className="bg-black w-[95px] sm:w-[147px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium">
                    Add Part
                </button>
            </div>
        </div>
    )
}

export default ExerciseTable