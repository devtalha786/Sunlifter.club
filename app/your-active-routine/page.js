import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image';
import Workout from './Workout';

const page = () => {
    const programs = [
        {
            id: 1,
            title: 'Strength Foundation Program',
            description: 'Perfect for beginners or those looking to build a foundation using just their body weight.',
            type: 'Functional Training',
            price: 'Free',
            createdBy: 'Test testington',
            contact: 'test1@test.com',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="relative bg-[url('/assets/your-active-routine-mobile.png')] sm:bg-[url('/assets/your-active-routine.png')] bg-cover bg-no-repeat">
                <div className='bg-black/10 inset-0 w-full h-full absolute'></div>
                <div className="px-4 lg:px-6 xl:px-10 relative z-40">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="max-w-[550px] pt-[175px] pb-[72px] sm:py-[152px]">
                            <h1 className="text-white text-[32px] sm:text-[48px] leading-[37px] sm:leading-[56px] font-workSpace font-bold tracking-[-0.02em] mb-2.5">
                                Your Active Routine
                            </h1>
                            <p className="text-[#FFFFFF] text-[14px] sm:text-[18px] sm:leading-[30px] font-normal">
                                "Track your progress, set new goals, and take control of your fitness journey."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full px-2.5 lg:px-6 xl:px-10 py-12 md:py-[100px]'>
                <div className='max-w-[1600px] w-full mx-auto'>
                    <div className=' bg-[#F9F9F9] rounded-[20px]'>
                        {programs.map((program, index) => (
                            <div key={index} className=' rounded-xl sm:rounded-[20px] max-w-[1163px] w-full py-6 sm:py-11 px-4 sm:px-[53px]'>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-12 md:mt-[60px] lg:mt-[83px] bg-[#F9F9F9] rounded-[20px] px-2.5 sm:px-5 md:px-10 2xl:px-[64px] py-12 md:py-16 lg:py-[95px]'>
                        <Workout/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page