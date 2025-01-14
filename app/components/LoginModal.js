'use client';
import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const LoginModal = ({ open, toggle }) => {
	const { isLoading } = useSelector(state => state?.user);

	const router = useRouter();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(''); // To show validation errors

	const handleSubmit = e => {
		e.preventDefault();
		// Validation checks
		if (!email || !password) {
			setError('Both email and password are required');
			return;
		}
		if (!/\S+@\S+\.\S+/.test(email)) {
			setError('Please enter a valid email');
			return;
		}
		setError('');
		const formData = {
			email,
			password,
		};
		dispatch(
			loginUser({
				payload: formData,
				onSuccess: () => toggle(),
				onError: () => {},
			})
		);
	};
	return (
		<Dialog open={open} onOpenChange={toggle}>
			<DialogContent>
				<div className='w-[400px] mx-auto'>
					<div className='flex items-center justify-center'>
						<Image
							src='/assets/logo.svg'
							alt='logo'
							width={262}
							height={67}
							className='md:w-[262px] md:h-[67px] w-[181px] h-[46px]'
						/>
					</div>
					<form
						className='mt-8 md:mt-[50px] flex flex-col gap-2'
						onSubmit={handleSubmit}
					>
						{/* Email Field */}
						<label className='text-[#212529] text-[14px] font-normal leading-[17.5px]'>
							Email
						</label>
						<div className='border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[48px] sm:h-[52px] flex items-center px-3.5 gap-3'>
							<Image
								src='/icons/user.svg'
								alt='user'
								width={24}
								height={24}
								className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
							/>
							<input
								type='email'
								placeholder='Email'
								className='bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'
								value={email}
								onChange={e => setEmail(e.target.value)} // Update email state on input change
							/>
						</div>

						{/* Password Field */}
						<label className='mt-4 text-[#212529] text-[14px] font-normal leading-[17.5px]'>
							Password
						</label>
						<div className='border border-[#D8D8D8] bg-[#F8F9FA99] rounded-[72px] h-[48px] sm:h-[52px] flex items-center px-3.5 gap-3'>
							<Image
								src='/icons/lock.svg'
								alt='lock'
								width={24}
								height={24}
								className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
							/>
							<input
								type='password'
								placeholder='Password'
								className='bg-transparent w-full h-full text-black placeholder:text-[#868E96] outline-none text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'
								value={password}
								onChange={e => setPassword(e.target.value)} // Update password state on input change
							/>
						</div>

						{/* Forgot Password Link */}
						<div className='mt-[18px] mb-4 sm:mb-6 w-full flex items-end justify-end'>
							<Link
								href='/forgot-password'
								className='text-[#EB3340] hover:underline transition duration-300 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal tracking-[-0.02em]'
							>
								Forgot Password?
							</Link>
						</div>

						{/* Error Message */}
						{error && (
							<div className='text-red-500 text-[14px] mb-2'>
								{error}
							</div>
						)}

						{/* Submit Button */}
						<button
							disabled={isLoading}
							type='submit'
							className='bg-black w-full h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-medium flex items-center gap-1 justify-center'
						>
							{isLoading ? (
								<ImSpinner8 className='spinning-icon' />
							) : (
								<>
									Login{' '}
									<IoIosArrowForward className='text-[16px] sm:text-[20px]' />
								</>
							)}
						</button>
					</form>

					<div className='flex items-center justify-center mt-6'>
						<h2 className='pr-1 text-[#7F7F8A] text-[14px] sm:text-[16px] sm:leading-[20px] tracking-[-0.02em] font-normal'>
							Don’t have an account?
						</h2>{' '}
						<Link
							href='sign-up'
							className='text-[#EB3340] hover:underline transition duration-300 text-[14px] sm:text-[16px] sm:leading-[20px] tracking-[-0.02em] font-semibold'
						>
							Sign Up
						</Link>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default LoginModal;
