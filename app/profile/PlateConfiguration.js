import React from 'react'
import NumberInput from './NumberInput'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link';

const PlateConfiguration = () => {
    return (
        <div className='mt-8 sm:mt-8 md:mt-10 lg:mt-[60px]'>
            <h1 className='text-[#060606] text-[24px] md:text-[32px] md:leading-[40px] font-semibold tracking-[0.01em]'>Plate Configuration</h1>
            <p className='text-black/60 text-[14px] sm:text-[16px] lg:text-[18px] sm:leading-[30px] font-normal max-w-[1073px] mt-2.5'>Enter the weight of the barbell and the available plates, and the program will calculate the optimal weight configuration to meet the required load for your workout routine.</p>

            <div className='mt-3 mb-6 md:mt-5 lg:my-[30px] flex items-center gap-2.5'>
                <input type="checkbox" className="ui-checkbox min-w-[18px]" />
                <p className='text-[#212529] text-[14px] sm:text-[16px] lg:text-[18px] font-medium lg:leading-[22.5px]'>Do the Maths for me</p>
            </div>

            <div className='w-full max-w-[470px]'>
                <NumberInput label="Barbell Weight (kg)" placeholder="Barbell Weight" />
            </div>

            <div>
                <h2 className='my-6 lg:my-[30px] text-black text-[18px] sm:text-[20px] leading-[30px] font-normal'>Available Plates (pairs)</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-[28px]'>
                    <NumberInput label="25kg" placeholder="0" />
                    <NumberInput label="20kg" placeholder="0" />
                    <NumberInput label="15kg" placeholder="0" />
                    <NumberInput label="10kg" placeholder="0" />
                    <NumberInput label="5kg" placeholder="0" />
                    <NumberInput label="2.5kg" placeholder="0" />
                    <NumberInput label="1.25kg" placeholder="0" />
                    <NumberInput label="1kg" placeholder="0" />
                    <NumberInput label="0.5kg" placeholder="0" />
                    <NumberInput label="0.25kg" placeholder="0" />
                </div>
            </div>
            <div>
                <button className="bg-black w-[149px] sm:w-[220px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center">
                    Save Changes <IoIosArrowForward className='text-[16px] sm:text-[18px]' />
                </button>
            </div>
        </div>
    )
}

export default PlateConfiguration