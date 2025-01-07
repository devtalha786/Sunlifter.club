import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black pt-12 md:pt-20 px-4 lg:px-6 xl:px-10'>
      <div className='w-full max-w-[1600px] mx-auto'>
        <div className='flex items-start justify-between flex-col md:flex-row gap-8 md:gap-10'>
          <div>
            <p className='text-white text-[14px] sm:text-[20px] lg:text-[25px] sm:leading-[36px] font-normal w-full max-w-[849px]'>Imagine having the freedom to explore weightlifting and exercise programs led by top trainers from around the world, all from the comfort of your own space.</p>
            <div className='flex items-center gap-3 mt-5 sm:mt-[37px]'>
              <Link href='https://www.facebook.com/Sunlifter.Club'><Image src='/icons/facebook.svg' alt='facebook' width={52} height={52} className='sm:w-[52px] sm:h-[53px] w-[40px] h-[40px]' /></Link>
              <Link href='https://x.com/SunLifter_Club'><Image src='/icons/twitter.svg' alt='twitter' width={52} height={52} className='sm:w-[52px] sm:h-[53px] w-[40px] h-[40px]' /></Link>
              <Link href='http://www.instagram.com/sunlifter.club'><Image src='/icons/instagram.svg' alt='instagram' width={52} height={52} className='sm:w-[52px] sm:h-[53px] w-[40px] h-[40px]'/></Link>
            </div>
          </div>
          <div className='sm:w-fit w-full flex items-start gap-5 sm:gap-10 lg:gap-[65px] lg:flex-nowrap flex-wrap text-nowrap'>
            <div>
              <h2 className='text-white text-[16px] sm:text-[18px] leading-[22.5px] font-normal mb-3 sm:mb-[22px]'>Quick Links</h2>
              <div className='flex items-start flex-col gap-2.5 sm:gap-3'>
                <Link href='/' className='text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'>Home</Link>
                <Link href='/available-routines' className='text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'>Available Rountines</Link>
                <Link href='/profile' className='text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'>Dashboard</Link>
              </div>
            </div>
            <div className='pr-8 sm:border-t-0 border-t border-[#292424] sm:w-fit w-full pt-[24px] sm:pt-0'>
              <h2 className='text-white text-[16px] sm:text-[18px] leading-[22.5px] font-normal mb-3 sm:mb-[22px]'>Contact</h2>
              <div className='flex items-center gap-2.5 sm:gap-3.5'>
                <Image src='/icons/email.svg' alt='email' width={24} height={24} className='sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]' />
                <h3 className='text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal tracking-[-0.02em]'>SunlifterApp@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 sm:mt-10 md:mt-20 mb-8 md:mb-10 flex md:items-center justify-between md:flex-row flex-col-reverse gap-6'>
          <p className='text-white/60 text-[16px] leading-[20px] font-normal'>Copyright © 2024 All rights reserved</p>
          <ul className='flex items-center gap-5 sm:gap-[35px] py-6 md:py-0 md:border-y-0 border-y border-[#292424]'>
<li><Link
  href="/ToS#privacy-policy"
  target="_self"
  className="text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
>
  Privacy Policy
</Link></li>
<li><Link
  href="/ToS#cookie-policy"
  target="_self"
  className="text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
>
  Cookie Policy
</Link></li>
<li><Link
  href="/ToS#terms-of-use"
  target="_self"
  className="text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
>
  Terms of Service
</Link></li>
          </ul>
        </div>
        <Image src='/assets/footer-logo.svg' alt='footer-logo' width={1600} height={454} />
      </div>
    </div>
  )
}

export default Footer