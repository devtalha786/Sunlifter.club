import React, { useState } from 'react';

const SocialMediaLink = ({ socialMediaLinks, setSocialMediaLinks }) => {
	// Regular expression for validating URLs
	const urlRegex =
		/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/;

	// State to manage errors
	const [errors, setErrors] = useState({
		instagram: '',
		facebook: '',
		twitter: '',
	});

	// Handle input change
	const handleInputChange = (platform, value) => {
		// No URL validation here, just update the value
		setSocialMediaLinks(prevState => ({
			...prevState,
			[platform]: value,
		}));

		// Clear error while typing
		setErrors(prevState => ({
			...prevState,
			[platform]: '',
		}));
	};

	// Handle validation and state update onBlur
	const handleValidation = (platform, value) => {
		if (value && urlRegex.test(value)) {
			// Valid URL, save to state
			setSocialMediaLinks(prevState => ({
				...prevState,
				[platform]: value,
			}));
		} else if (value) {
			// Invalid URL, show error and keep the value
			setErrors(prevState => ({
				...prevState,
				[platform]: 'Please enter a valid URL',
			}));
		} else {
			// Clear error if input is empty
			setErrors(prevState => ({
				...prevState,
				[platform]: '',
			}));
		}
	};

	return (
		<div className='border-b border-[#D9D9D9] pb-6 md:pb-10 lg:pb-[60px] mt-6 md:mt-10 lg:mt-[60px]'>
			<h1 className='text-[#060606] text-[24px] md:text-[32px] md:leading-[40px] font-semibold tracking-[0.01em]'>
				Social Media Link *
			</h1>
			<div className='mt-5 sm:mt-[30px] flex flex-col gap-3 sm:gap-5 lg:gap-[30px]'>
				{/* Instagram Input */}
				<div className='flex flex-col gap-2'>
					<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
						Instagram
					</label>
					<input
						type='text'
						placeholder='Add Link'
						value={socialMediaLinks.instagram}
						onChange={e =>
							handleInputChange('instagram', e.target.value)
						}
						onBlur={e =>
							handleValidation('instagram', e.target.value)
						}
						className='h-12 sm:h-[50px] w-full bg-white rounded-[60px] px-5 placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px] outline-none'
					/>
					{errors.instagram && (
						<span className='text-red-500 text-sm'>
							{errors.instagram}
						</span>
					)}
				</div>

				{/* Facebook Input */}
				<div className='flex flex-col gap-2'>
					<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
						Facebook
					</label>
					<input
						type='text'
						placeholder='Add Link'
						value={socialMediaLinks.facebook}
						onChange={e =>
							handleInputChange('facebook', e.target.value)
						}
						onBlur={e =>
							handleValidation('facebook', e.target.value)
						}
						className='h-12 sm:h-[50px] w-full bg-white rounded-[60px] px-5 placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px] outline-none'
					/>
					{errors.facebook && (
						<span className='text-red-500 text-sm'>
							{errors.facebook}
						</span>
					)}
				</div>

				{/* Twitter Input */}
				<div className='flex flex-col gap-2'>
					<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
						Twitter
					</label>
					<input
						type='text'
						placeholder='Add Link'
						value={socialMediaLinks.twitter}
						onChange={e =>
							handleInputChange('twitter', e.target.value)
						}
						onBlur={e =>
							handleValidation('twitter', e.target.value)
						}
						className='h-12 sm:h-[50px] w-full bg-white rounded-[60px] px-5 placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px] outline-none'
					/>
					{errors.twitter && (
						<span className='text-red-500 text-sm'>
							{errors.twitter}
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default SocialMediaLink;
