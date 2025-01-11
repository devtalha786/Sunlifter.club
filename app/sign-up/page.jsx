'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/user/userThunk';
import { useRouter } from 'next/navigation';
import { ImSpinner8 } from 'react-icons/im';

const SignUpPage = () => {
	const { isLoading } = useSelector(state => state?.user);
	const dispatch = useDispatch();
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [errors, setErrors] = useState({});
	const [selectedDate, setSelectedDate] = useState('');
	const [profileFile, setProfileFile] = useState(null);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [imagePreview, setImagePreview] = useState('/assets/placeholder.jpg');
	const datepickerRef = useRef(null);
	const inputRef = useRef(null);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: '',
			}));
		}
	};

	const handleImageUpload = e => {
		const file = e.target.files[0];
		if (file) {
			setProfileFile(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDateChange = date => {
		setSelectedDate(date.toLocaleDateString('en-GB'));
		setShowDatePicker(false);
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Username is required';
		}

		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 8) {
			newErrors.password = 'Password must be at least 8 characters';
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = 'Please confirm your password';
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
		}

		if (!selectedDate) {
			newErrors.date = 'Date of birth is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (validateForm()) {
			// Handle form submission
			// console.log('Form submitted:', { ...formData, dateOfBirth: selectedDate });
			dispatch(
				registerUser({
					payload: {
						...formData,
						dateOfBirth: selectedDate,
						profilePicture: profileFile,
					},
					onSuccess: () => router.push('/login'),
				})
			);
		}
	};

	return (
		<div className='min-h-screen relative'>
			{/* Gradient Background with Image */}
			<div
				className='absolute inset-0 h-full w-full z-0'
				style={{
					background:
						'radial-gradient(56.84% 56.84% at 49.97% 47.88%, rgba(247, 207, 207, 0.5) 0%, rgba(213, 158, 158, 0.6) 100%)',
					zIndex: 0,
				}}
			>
				<Image
					src='/assets/login.png'
					alt='Sign up background'
					className='absolute inset-0 object-cover opacity-80 bg-right z-1'
					fill
					priority
				/>
			</div>

			{/* Content */}
			<div className='py-[105px] flex items-center justify-center min-h-screen px-5 lg:px-6 xl:px-10 relative z-20'>
				<div
					className='relative w-full px-4 max-w-[695px] bg-white/50 rounded-[30px] m-auto py-5 md:py-10 lg:py-20'
					style={{ backdropFilter: 'blur(116px)' }}
				>
					<div className='max-w-[475px] mx-auto'>
						{/* Logo */}
						<div className='flex items-center justify-center'>
							<Image
								src='/assets/logo.svg'
								alt='logo'
								width={262}
								height={67}
								className='md:w-[262px] md:h-[67px] w-[181px] h-[46px]'
							/>
						</div>

						{/* Profile Image Upload */}
						<div className='mt-8 flex justify-center'>
							<div className='relative w-[107px] h-[107px]'>
								<Image
									src={imagePreview}
									alt='Profile'
									width={107}
									height={107}
									className='rounded-full object-cover'
								/>
								<label
									htmlFor='profile-upload'
									className='absolute bottom-0 right-0 cursor-pointer'
								>
									<Image
										src='/assets/profile.svg'
										alt='upload'
										width={38}
										height={38}
									/>
									<input
										type='file'
										id='profile-upload'
										className='hidden'
										accept='image/*'
										onChange={handleImageUpload}
									/>
								</label>
							</div>
						</div>

						<form
							onSubmit={handleSubmit}
							className='mt-8 flex flex-col gap-4'
						>
							{/* Username Field */}
							<div className='flex flex-col gap-2'>
								<label className='text-[#212529] text-[14px] font-normal leading-[17.5px]'>
									Username
								</label>
								<div className='border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[52px] flex items-center px-3.5 gap-3'>
									<Image
										src='/icons/user.svg'
										alt='user'
										width={24}
										height={24}
										className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
									/>
									<input
										type='text'
										name='name'
										placeholder='Enter username'
										className='bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[16px] leading-[20px] font-normal'
										value={formData.name}
										onChange={handleChange}
									/>
								</div>
								{errors.name && (
									<span className='text-red-500 text-sm'>
										{errors.name}
									</span>
								)}
							</div>

							{/* Email Field */}
							<div className='flex flex-col gap-2'>
								<label className='text-[#212529] text-[14px] font-normal leading-[17.5px]'>
									Email
								</label>
								<div className='border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[52px] flex items-center px-3.5 gap-3'>
									<Image
										src='/icons/mail.svg'
										alt='mail'
										width={24}
										height={24}
										className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
									/>
									<input
										type='email'
										name='email'
										placeholder='Enter email'
										className='bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[16px] leading-[20px] font-normal'
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								{errors.email && (
									<span className='text-red-500 text-sm'>
										{errors.email}
									</span>
								)}
							</div>

							{/* Password Fields */}
							<div className='flex flex-col gap-2'>
								<label className='text-[#212529] text-[14px] font-normal leading-[17.5px]'>
									Password
								</label>
								<div className='border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[52px] flex items-center px-3.5 gap-3'>
									<Image
										src='/icons/lock.svg'
										alt='lock'
										width={24}
										height={24}
										className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
									/>
									<input
										type='password'
										name='password'
										placeholder='Enter password'
										className='bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[16px] leading-[20px] font-normal'
										value={formData.password}
										onChange={handleChange}
									/>
								</div>
								{errors.password && (
									<span className='text-red-500 text-sm'>
										{errors.password}
									</span>
								)}
							</div>

							<div className='flex flex-col gap-2'>
								<label className='text-[#212529] text-[14px] font-normal leading-[17.5px]'>
									Confirm Password
								</label>
								<div className='border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[52px] flex items-center px-3.5 gap-3'>
									<Image
										src='/icons/lock.svg'
										alt='lock'
										width={24}
										height={24}
										className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
									/>
									<input
										type='password'
										name='confirmPassword'
										placeholder='Confirm password'
										className='bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[16px] leading-[20px] font-normal'
										value={formData.confirmPassword}
										onChange={handleChange}
									/>
								</div>
								{errors.confirmPassword && (
									<span className='text-red-500 text-sm'>
										{errors.confirmPassword}
									</span>
								)}
							</div>

							{/* Date of Birth */}
							<div className='flex flex-col gap-2'>
								<label className='text-[#212529] text-[14px] font-normal leading-[17.5px]'>
									Date of Birth
								</label>
								<div className='relative'>
									<div className='border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[52px] flex items-center px-3.5 gap-3'>
										<Image
											src='/icons/calendar.svg'
											alt='calendar'
											width={24}
											height={24}
											className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
										/>
										<input
											ref={inputRef}
											type='text'
											placeholder='DD/MM/YYYY'
											className='bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[16px] leading-[20px] font-normal'
											value={selectedDate}
											readOnly
											onClick={() =>
												setShowDatePicker(
													!showDatePicker
												)
											}
										/>
									</div>
									{showDatePicker && (
										<div
											ref={datepickerRef}
											className='absolute left-0 top-full mt-2 z-50'
										>
											<DatePicker
												// selected={selectedDate ? new Date(selectedDate) : null}
												onChange={handleDateChange}
												inline
												dateFormat='dd/MM/yyyy'
											/>
										</div>
									)}
								</div>
								{errors.date && (
									<span className='text-red-500 text-sm'>
										{errors.date}
									</span>
								)}
							</div>

							{/* Submit Button */}
							<button
								disabled={isLoading}
								type='submit'
								className='mt-6 bg-black w-full h-[56px] rounded-[43px] text-white text-[18px] leading-[20px] font-medium flex items-center gap-1 justify-center'
							>
								{isLoading ? (
									<ImSpinner8 className='spinning-icon' />
								) : (
									<>
										Sign Up{' '}
										<IoIosArrowForward className='text-[20px]' />
									</>
								)}
							</button>
						</form>

						{/* Login Link */}
						<div className='flex items-center justify-center mt-6'>
							<h2 className='pr-1 text-[#7F7F8A] text-[16px] leading-[20px] tracking-[-0.02em] font-normal'>
								Already have an account?
							</h2>{' '}
							<Link
								href='/login'
								className='text-[#EB3340] hover:underline transition duration-300 text-[16px] leading-[20px] tracking-[-0.02em] font-semibold'
							>
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
