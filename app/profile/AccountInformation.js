'use client'

import { useState } from 'react'
import Image from 'next/image'
import PasswordInput from './PasswordInput'
import PhysicalInformation from './PhysicalInformation'
import ExerciseOneRepMaxes from './ExerciseOneRepMaxes'
import SocialMediaLink from './SocialMediaLink'
import PlateConfiguration from './PlateConfiguration'

const AccountInformation = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

    const [imagePreview, setImagePreview] = useState('/profile-image.png')
    const [imageError, setImageError] = useState(false)

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
                setImageError(false)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleImageError = () => {
        setImageError(true)
    }

    return (
        <div>
            <div className='border-b border-[#D9D9D9] pb-6 md:pb-10 lg:pb-[60px] mb-6 md:mb-10 lg:mb-[60px]'>
                <h1 className='text-[#060606] text-[24px] md:text-[32px] md:leading-[40px] font-semibold tracking-[0.01em] mb-6 md:mb-[50px]'>Account Information</h1>

                {/* Profile Edit */}
                <div className="relative w-[107px] h-[107px]">
                    {imageError ? (
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                            <img src='/assets/profile-image.png' alt='profile-image' />
                        </div>
                    ) : (
                        <Image
                            src={imagePreview}
                            alt="Profile"
                            width={107}
                            height={107}
                            className="rounded-full object-cover w-full h-full"
                            onError={handleImageError}
                        />
                    )}
                    <label htmlFor="profile-upload" className="absolute bottom-0 right-0 ">
                        <Image src='/assets/profile.svg' alt='profile' width={38} height={38} />
                        <input
                            type="file"
                            id="profile-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>

                <div className='mt-5 md:mt-8 flex items-center justify-between sm:flex-row flex-col gap-3 sm:gap-5 md:gap-[30px]'>
                    <div className='w-full flex flex-col gap-2'>
                        <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>User Name</label>
                        <input type='text' placeholder='Enter User Name' className='w-full h-[45px] sm:h-[50px] rounded-[60px] px-5 outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Email Address</label>
                        <input type='email' placeholder='Enter Email Address' className='w-full h-[45px] sm:h-[50px] rounded-[60px] px-5 outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]' />
                    </div>
                </div>

                <div className='mt-3 sm:mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-[30px]'>
                    <PasswordInput
                        label="Password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Enter Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <div className='w-full flex flex-col gap-2'>
                        <label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>Date of birth</label>
                        <div className='w-full h-[45px] sm:h-[50px] bg-white rounded-[60px] px-5 flex items-center gap-2'>
                            <input type='text' placeholder='DD/MM/YYYY' className='w-full h-full outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]' />
                            <Image src='/icons/calendar.svg' alt='calendar' width={20} height={20} />
                        </div>
                    </div>
                </div>

            </div>
            <PhysicalInformation />
            <ExerciseOneRepMaxes/>
            <SocialMediaLink/>
            <PlateConfiguration/>
        </div>
    )
}

export default AccountInformation

