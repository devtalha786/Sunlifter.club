import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
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
        <div>
            <Navbar />
            <div className="relative bg-[url('/assets/routine-preview-mobile.png')] sm:bg-[url('/assets/routine-preview.png')] bg-cover bg-no-repeat">
                <div className='bg-black/10 inset-0 w-full h-full absolute'></div>
                <div className="px-4 lg:px-6 xl:px-10 relative z-40">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="max-w-[550px] pt-[175px] pb-[72px] sm:py-[152px]">
                            <h1 className="text-white text-[32px] sm:text-[48px] leading-[37px] sm:leading-[56px] font-workSpace font-bold tracking-[-0.02em] mb-2.5">
                                Routine Preview
                            </h1>
                            <p className="text-[#FFFFFF] text-[14px] sm:text-[18px] sm:leading-[30px] font-normal">
                                "Track your progress, set new goals, and take control of your fitness journey."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[100px] w-full px-4 lg:px-6 xl:px-10 flex flex-col gap-6 md:gap-[50px]'>
                {programs.map((program, index) => (
                    <div key={index} className='rounded-xl sm:rounded-[20px] bg-[#F9F9F9] max-w-[1163px] mx-auto w-full py-6 sm:py-11 px-4 sm:px-[53px]'>
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

                                <div className='flex items-center gap-3 sm:gap-5 flex-wrap'>
                                    <button className='bg-[#EB3340] w-[140px] sm:w-[211px] h-[39px] sm:h-[56px] rounded-[23px] sm:rounded-[43px] text-white text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
                                    Contact Creator
                                    </button>
                                    <button className='bg-black w-[160px] sm:w-[233px] h-[39px] sm:h-[56px] rounded-[23px] sm:rounded-[43px] text-white text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
                                    Start this program
                                    </button>
                                    <Link href='/dashboard' className='bg-white flex items-center justify-center w-[109px] sm:w-[113px] h-[39px] sm:h-[56px] border border-[#EAEAEA] rounded-[23px] sm:rounded-[43px] text-black text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default page