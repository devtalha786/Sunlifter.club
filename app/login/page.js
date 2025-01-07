import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Page = () => {
    return (
        <div className="min-h-screen relative">
            {/* Gradient Background with Image */}
            <div
                className="absolute inset-0 h-full w-full z-0"
                style={{
                    background: "radial-gradient(56.84% 56.84% at 49.97% 47.88%, rgba(247, 207, 207, 0.5) 0%, rgba(213, 158, 158, 0.6) 100%)", // increased opacity
                    zIndex: 0
                }}
            >
                {/* Image overlay with gradient */}
                <img
                    src="/assets/login.png"
                    alt="Login background"
                    className="absolute inset-0 h-full w-full object-cover opacity-80 bg-right z-1"
                />
            </div>

            {/* Content */}
            <div className="py-[105px] flex items-center justify-center min-h-screen px-5 lg:px-6 xl:px-10 relative z-20">
                <div
                    className="relative w-full px-4 max-w-[695px] bg-white/50 rounded-[30px] m-auto py-5 md:py-10 lg:py-20 xl:py-[100px]"
                    style={{ backdropFilter: "blur(116px)" }}
                >
                    <div className="max-w-[475px] mx-auto">
                        <div className="flex items-center justify-center">
                            <Image src="/assets/logo.svg" alt="logo" width={262} height={67} className='md:w-[262px] md:h-[67px] w-[181px] h-[46px]' />
                        </div>
                        <form className="mt-8 md:mt-[50px] flex flex-col gap-2">
                            <label className="text-[#212529] text-[14px] font-normal leading-[17.5px]">Email</label>
                            <div className="border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[48px] sm:h-[52px] flex items-center px-3.5 gap-3">
                                <Image src="/icons/user.svg" alt="user" width={24} height={24} className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]' />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
                                />
                            </div>
                            <label className="mt-4 text-[#212529] text-[14px] font-normal leading-[17.5px]">Password</label>
                            <div className="border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[48px] sm:h-[52px] flex items-center px-3.5 gap-3">
                                <Image src="/icons/lock.svg" alt="user" width={24} height={24} className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]' />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
                                />
                            </div>
                            <div className="mt-[18px] mb-4 sm:mb-6 w-full flex items-end justify-end">
                                <Link
                                    href="/forgot-password"
                                    className="text-[#EB3340] hover:underline transition duration-300 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal tracking-[-0.02em]"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <Link
                                href="/profile"
                                className="bg-black w-full h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-medium flex items-center gap-1 justify-center"
                            >
                                Login<IoIosArrowForward className='text-[16px] sm:text-[20px]' />
                            </Link>
                        </form>

                        <div className="flex items-center justify-center mt-6">
                            <h2 className="pr-1 text-[#7F7F8A] text-[14px] sm:text-[16px] sm:leading-[20px] tracking-[-0.02em] font-normal">
                                Don’t have an account?
                            </h2>{" "}
                            <Link
                                href="sign-up"
                                className="text-[#EB3340] hover:underline transition duration-300 text-[14px] sm:text-[16px] sm:leading-[20px] tracking-[-0.02em] font-semibold"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
