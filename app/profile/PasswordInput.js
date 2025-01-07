'use client'

import { useState } from 'react'
import Image from 'next/image'

const PasswordInput = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='w-full flex flex-col gap-2'>
      <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>{label}</label>
      <div className='w-full h-[45px] sm:h-[50px] rounded-[60px] px-5 bg-white flex items-center gap-2'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='h-full w-full outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]'
        />
        <button onClick={togglePasswordVisibility}>
          <Image
            src={showPassword ? '/icons/password-show.svg' : '/icons/password-hidden.svg'}
            alt='Toggle password visibility'
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

export default PasswordInput

