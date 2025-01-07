'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {
    const menuBtn = document.querySelector('[data-menu-button]')
    const mobileMenu = document.querySelector('[data-mobile-menu]')
    const closeBtn = document.querySelector('[data-close-button]')

    const toggleMenu = () => {
      mobileMenu?.classList.toggle('translate-x-full')
      document.body.classList.toggle('overflow-hidden')
    }

    menuBtn?.addEventListener('click', toggleMenu)
    closeBtn?.addEventListener('click', toggleMenu)

    // Cleanup
    return () => {
      menuBtn?.removeEventListener('click', toggleMenu)
      closeBtn?.removeEventListener('click', toggleMenu)
    }
  }, [])

  return (
    <div className='bg-white w-full px-4 lg:px-6 xl:px-10 h-[48px] sm:h-[96px] flex items-center'>
      <div className='w-full max-w-[1600px] mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image src='/assets/logo.svg' alt='logo' width={208} height={53} className='sm:w-[208px] w-[110px] sm:h-[53px] h-[30px]' />
        </Link>
        <ul className='hidden lg:flex items-center gap-7'>
          <li><Link href='/' className='text-[#210F0F] text-[16px] font-normal leading-[20px]'>Home</Link></li>
          <li><Link href='/available-routines' className='text-[#210F0F] text-[16px] font-normal leading-[20px]'>Available Rountines</Link></li>
          <li><Link href='/create-new-program' className='text-[#210F0F] text-[16px] font-normal leading-[20px]'>CNP</Link></li>
          <li><Link href='/edit-your-program' className='text-[#210F0F] text-[16px] font-normal leading-[20px]'>EYP</Link></li>
          <li><Link href='/profile' className='text-[#210F0F] text-[16px] font-normal leading-[20px]'>Profile</Link></li>
          <li><Link href='/your-active-routine' className='text-[#210F0F] text-[16px] font-normal leading-[20px]'>YAP</Link></li>
        </ul>
        <div className='hidden lg:flex items-center gap-5'>
          <Link href='/login' className='flex items-center gap-2.5 text-black text-[18px] font-normal leading-[21.78px] font-inter'>
            <Image src='/icons/profile.svg' alt='profile' width={25} height={25} />
            Login / Register
          </Link>
          <Link href='/dashboard' className='bg-[#000000] flex items-center justify-center w-[208px] h-[56px] text-white text-[18px] font-medium leading-[20px] rounded-[56px]'>Go to Dashboard</Link>
        </div>
        <div className='flex lg:hidden items-center gap-3'>
          <Link href='/login'>
            <Image src='/icons/profile.svg' alt='profile' width={24} height={24} />
          </Link>
          <button data-menu-button>
            <Image src='/icons/menu.svg' alt='menu' width={24} height={16} />
          </button>
          </div>
             
      </div>

      {/* Mobile Menu */}
      <div
        data-mobile-menu
        className='fixed inset-0 bg-white transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden'
        style={{ zIndex: 1000 }}
      >
        <div className='px-5 py-6 flex flex-col h-full'>
          <div className='flex justify-end items-end mb-3.5'>
            <button data-close-button className=''>
              <Image src='/icons/close-menu.svg' alt='close' width={24} height={24} />
            </button>
          </div>
          <div className='flex items-center justify-center w-full'>
            <Image src='/assets/logo.svg' alt='logo' width={194} height={54} />
          </div>

          <nav className='mt-[52px] flex flex-col gap-6'>
            <Link
              href='/'
              className='text-black text-[24px] font-normal leading-[30px] pb-[25px] border-b border-[#EAEAEA]'
            >
              Home
            </Link>
            <Link
              href='/available-routines'
              className='text-black text-[24px] font-normal leading-[30px] pb-[25px] border-b border-[#EAEAEA]'
            >
              Available Rountines
            </Link>
          </nav>

          <div className='mt-10'>
            <Link href='/dashboard' className='w-[180px] flex items-center justify-center h-[50px] bg-black text-white text-[16px] font-normal leading-[14px] rounded-[30px]'>
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

