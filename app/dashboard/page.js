import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PublishedRoutines from './PublishedRoutines'
import PurchasedByOthers from './PurchasedByOthers'
import PurchasedRoutines from './PurchasedRoutines'

const page = () => {
    return (
        <div>
            <Navbar />
            <div
                className="relative bg-[url('/assets/dashboard-mobile.png')] sm:bg-[url('/assets/dashboard-hero.png')] bg-cover bg-no-repeat"
            >
                <div className='bg-black/10 inset-0 w-full h-full absolute'></div>
                <div className="px-4 lg:px-6 xl:px-10 relative z-40">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="max-w-[550px] pt-[175px] pb-[72px] sm:py-[152px]">
                            <h1 className="text-white text-[32px] sm:text-[48px] leading-[37px] sm:leading-[56px] font-workSpace font-bold tracking-[-0.02em] mb-2.5">
                                My Routines
                            </h1>
                            <p className="text-[#FFFFFF] text-[14px] sm:text-[18px] sm:leading-[30px] font-normal">
                                "Track your progress, set new goals, and take control of your fitness journey."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full px-4 lg:px-6 xl:px-10'>
                <div className='w-full max-w-[1600px] mx-auto py-12 md:py-[100px] flex flex-col gap-6 md:gap-10 lg:gap-[78px]'>
                    <PublishedRoutines/>
                    <PurchasedByOthers/>
                    <PurchasedRoutines/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page