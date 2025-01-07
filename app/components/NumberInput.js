'use client'

import Image from 'next/image'

const NumberInput = ({ label, placeholder, value }) => {

    return (
        <div className='w-full flex flex-col gap-2'>
            <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>{label}</label>
            <div className='w-full h-[48px] sm:h-[62px] border border-[#E3E3E3] rounded-[60px] px-5 bg-white flex items-center gap-2'>
                <input
                    type='number'
                    id="number"
                    placeholder={placeholder}
                    className='h-full w-full outline-none rounded-[60px] placeholder:text-[#868E96] text-black text-[14px] sm:text-[18px] font-normal leading-[20px]'
                />
                <button >
                    <Image
                        src="/icons/number-input.svg"
                        alt='number-input'
                        width={11}
                        height={24}
                    />
                </button>
            </div>
        </div>
    )
}

export default NumberInput

