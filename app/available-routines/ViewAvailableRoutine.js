import Image from 'next/image';
import React from 'react'

const ViewAvailableRoutine = () => {
    const programs = [
        {
            id: 1,
            title: 'Ultimate Squat Program',
            description: 'Perfect for beginners or those looking to build a foundation using just their body weight.',
            type: 'Functional Training',
            price: 'Free',
            createdBy: 'Test testington',
            contact: 'test1@test.com',
        },
        {
            id: 2,
            title: 'Intermediate Strength Program',
            description: 'A great program for intermediate fitness enthusiasts.',
            type: 'Strength Training',
            price: '$20',
            createdBy: 'John Doe',
            contact: 'john.doe@example.com',
        },
        {
            id: 3,
            title: 'Ultimate Squat Program',
            description: 'A great program for intermediate fitness enthusiasts.',
            type: 'Strength Training',
            price: '$20',
            createdBy: 'John Doe',
            contact: 'john.doe@example.com',
        },
        {
            id: 4,
            title: 'Ultimate Squat Program',
            description: 'A great program for intermediate fitness enthusiasts.',
            type: 'Strength Training',
            price: '$20',
            createdBy: 'John Doe',
            contact: 'john.doe@example.com',
        },
    ];

    return (
        <div className='max-w-[1600px] mx-auto'>
            <div>
                <h1 className='text-[#000000] text-[24px] sm:text-[50px] md:text-[60px] md:leading-[70px] font-workSpace font-semibold tracking-[-0.02em]'>View Available Routine</h1>
                <p className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[30px] font-normal mt-1 sm:mt-2.5'>Find the Perfect Routine for Your Fitness Journey</p>
            </div>
            <div className='mt-6 sm:mt-8 md:mt-12 flex flex-col gap-6 sm:gap-8'>
                {programs.map((program, index) => (
                    <div key={index} className='bg-white rounded-xl sm:rounded-[20px] max-w-[1163px] w-full py-6 sm:py-11 px-4 sm:px-[53px]'>
                        <div className='max-w-[780px] w-full'>
                            <h1 className='text-black text-[18px] sm:text-[40px] sm:leading-[50px] font-semibold tracking-[-0.02em] mb-3 sm:mb-9'>
                                {program.title}
                            </h1>
                            <h3 className='text-black text-[16px] sm:text-[22px] sm:leading-[27.5px] font-normal'>
                                Description:
                            </h3>
                            <p className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal pt-3'>
                                {program.description}
                            </p>
                            <div className='w-full mt-5 sm:mt-[34px] flex items-center gap-10 sm:gap-[34px]'>
                                <div className='sm:w-[350px]'>
                                    <h3 className='text-black text-[16px] sm:text-[22px] sm:leading-[27.5px] font-normal mb-2'>
                                        Type:
                                    </h3>
                                    <h4 className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
                                        {program.type}
                                    </h4>
                                </div>
                                <div className=''>
                                    <h3 className='text-black text-[16px] sm:text-[22px] sm:leading-[27.5px] font-normal mb-2'>
                                        Price:
                                    </h3>
                                    <h4 className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
                                        {program.price}
                                    </h4>
                                </div>
                            </div>

                            <div className='mt-5 sm:mt-[47px] flex flex-col gap-[47px]'>
                                <div className='flex items-center gap-3 sm:gap-[18px]'>
                                    <Image
                                        src='/icons/ellipse.svg'
                                        alt='ellipse'
                                        width={80}
                                        height={80}
                                        className='rounded-full sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]'
                                    />
                                    <div className='flex flex-col gap-1 sm:gap-2'>
                                        <h2 className='text-[#000000] text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
                                            Created By : <span className='text-[#686868]'>{program.createdBy}</span>
                                        </h2>
                                        <h2 className='text-[#000000] text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
                                            Contact : <span className='text-[#686868]'>{program.contact}</span>
                                        </h2>
                                    </div>
                                </div>

                                <div className='flex items-center gap-3 sm:gap-5'>
                                    <button className='bg-[#EB3340] w-[127px] sm:w-[185px] h-[39px] sm:h-[56px] rounded-[23px] sm:rounded-[43px] text-white text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
                                        View Routine
                                    </button>
                                    <button className='w-[109px] sm:w-[148px] h-[39px] sm:h-[56px] border border-[#EAEAEA] rounded-[23px] sm:rounded-[43px] text-black text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewAvailableRoutine