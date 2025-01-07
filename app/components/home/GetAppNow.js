"use client";

import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const GetAppNow = () => {
  const openPopupAndroid = () => {
    const popup = window.open(
      '/icons/QR.png', // Ensure this path matches your public directory structure
      'ImagePopup',
      'width=800,height=600,scrollbars=no,resizable=no'
    );

    if (!popup) {
      alert('Popup blocked. Please allow popups for this site.');
    }
  };

  const openPopupiOS = () => {
    const popup = window.open(
      '/icons/QR1.png', // Ensure this path matches your public directory structure
      'ImagePopup',
      'width=800,height=600,scrollbars=no,resizable=no'
    );

    if (!popup) {
      alert('Popup blocked. Please allow popups for this site.');
    }
  };

  return (
    <div className="w-full px-4 lg:px-6 xl:px-10 relative">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between xl:flex-row flex-col gap-6 sm:gap-10 w-full pt-12 md:pt-[100px] relative z-30">
        <div>
          <img src="/assets/mobiles.svg" alt="mobiles" />
        </div>
        <div className="xl:max-w-[666px] pb-12 md:pb-[100px] xl:pb-0">
          <h1 className="text-[24px] sm:text-[50px] md:text-[60px] md:leading-[70px] font-semibold font-workSpace tracking-[-0.02em] text-black">
            Get <span className="text-[#EB3340]">Sunlifter.Club</span> App now
          </h1>
          <p className="mt-2.5 sm:mt-[22px] text-black/65 text-[14px] sm:text-[18px] sm:leading-[28px] font-normal">
            Imagine having the freedom to explore weightlifting and exercise programs led by top trainers from around the world, all from the comfort of your own space.
          </p>
          <div className="flex gap-4">
            <button
              onClick={openPopupAndroid}
              className="mt-8 sm:mt-[50px] bg-black w-[155px] sm:w-[209px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center"
            >
              Download Android Now <IoIosArrowForward className="text-[16px] sm:text-[18px]" />
            </button>
            <button
              onClick={openPopupiOS}
              className="mt-8 sm:mt-[50px] bg-[#EB3340] w-[155px] sm:w-[209px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center"
            >
              Download iOS Now <IoIosArrowForward className="text-[16px] sm:text-[18px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-[40px] xl:top-[180px]">
        <Image src="/assets/right-image.svg" alt="right-image" width={300} height={300} />
      </div>
    </div>
  );
};

export default GetAppNow;
