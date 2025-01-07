import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';


const AboutSunLifterClub = () => {
  return (
    <div className='w-full px-4 lg:px-6 xl:px-10'>
        <div className='w-full max-w-[1600px] mx-auto py-12 md:py-[100px]'>
            <div className='flex items-center lg:flex-row flex-col justify-between gap-6'>
                <div>
                    <Image src='/assets/aboutus.svg' alt='aboutus' width={720} height={730} />
                </div>
                <div className='w-full lg:max-w-[776px]'>
                    <h2 className='text-[#000000] text-[24px] sm:text-[50px] xl:text-[60px] xl:leading-[70px] tracking-[-0.02em] font-semibold font-workSpace mb-2.5 sm:mb-4 xl:mb-6'>About SunLifter Club</h2>
                    <p className='text-black/55 text-[14px] sm:text-[18px] sm:leading-[30px] font-normal mb-1.5 sm:mb-4 xl:mb-6'>Imagine having the freedom to explore weightlifting and exercise programs led by top trainers from around the world, all from the comfort of your own space. This flexibility allows you to access diverse training styles, techniques, and expertise, expanding your fitness journey beyond what's available locally.</p>
                    <p className='text-black/55 text-[14px] sm:text-[18px] sm:leading-[30px] font-normal'>As an independent company with a deep passion for the health and wellness industry, we are dedicated to empowering individuals to achieve their fitness goals. Our independence gives us the ability to innovate and create unique, customer-focused solutions tailored to the ever-evolving needs of the health-conscious community. We are committed to promoting well-being, delivering cutting-edge tools, and fostering a holistic approach to living a healthier, more fulfilling life.</p>
                    <Link href="/available-routines" className="mt-8 xl:mt-14 h-[39px] sm:h-[56px] px-4 sm:px-6 rounded-[43px] bg-black text-white text-[14px] sm:text-[18px] leading-[20px] font-medium flex items-center gap-2" style={{ maxWidth: 'fit-content' }}>
                        Browse available routines <IoIosArrowForward className="text-white" /></Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSunLifterClub