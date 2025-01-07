import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from './Form'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="relative bg-[url('/assets/edit-your-program-mobile.png')] sm:bg-[url('/assets/edit-your-program.png')] bg-cover bg-no-repeat">
                <div className='bg-black/10 inset-0 w-full h-full absolute'></div>
                <div className="px-4 lg:px-6 xl:px-10 relative z-40">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="max-w-[550px] pt-[175px] pb-[72px] sm:py-[152px]">
                            <h1 className="text-white text-[32px] sm:text-[48px] leading-[37px] sm:leading-[56px] font-workSpace font-bold tracking-[-0.02em] mb-2.5">
                            Edit your Program
                            </h1>
                            <p className="text-[#FFFFFF] text-[14px] sm:text-[18px] sm:leading-[30px] font-normal">
                                "Track your progress, set new goals, and take control of your fitness journey."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full px-2.5 lg:px-6 xl:px-10 py-12 md:py-[100px]'>
                <div className='max-w-[1600px] w-full mx-auto bg-[#F9F9F9] rounded-[20px] py-12 md:py-[60px] px-2.5 md:px-5'>
                    <div className='max-w-[1472px] mx-auto'>
                        <Form/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page