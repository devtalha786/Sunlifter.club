'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import PasswordInput from './PasswordInput';
import PhysicalInformation from './PhysicalInformation';
import ExerciseOneRepMaxes from './ExerciseOneRepMaxes';
import SocialMediaLink from './SocialMediaLink';
import PlateConfiguration from './PlateConfiguration';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ImSpinner8 } from 'react-icons/im';
import { getSingleUser, profileUpdate } from '../store/user/userThunk';
import { IoIosArrowForward } from 'react-icons/io';

const AccountInformation = () => {
	const { uid, singleUser, isLoading } = useSelector(state => state?.user);
	const dispatch = useDispatch();
	const router = useRouter();
	const inputRef = useRef(null);
	const datepickerRef = useRef(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [imagePreview, setImagePreview] = useState('/profile-image.png');
	const [imageError, setImageError] = useState(false);
	// const [profileFile, setProfileFile] = useState(null);
	const [selectedDate, setSelectedDate] = useState('');
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [physical, setPhysical] = useState({
		currentWeight: '',
		weightGoal: '',
		height: '',
		useFeetInches: false,
		useLbs: false,
	});
	const [exercises, setExercises] = useState([
		{ type: 'Squat', current: '', goal: '' },
		{ type: 'Bench', current: '', goal: '' },
		{ type: 'Deadlift', current: '', goal: '' },
	]);
	const [socialMediaLinks, setSocialMediaLinks] = useState({
		instagram: '',
		facebook: '',
		twitter: '',
	});
	const [barbellWeight, setBarbellWeight] = useState('');
	const [plates, setPlates] = useState({
		'25kg': '',
		'20kg': '',
		'15kg': '',
		'10kg': '',
		'5kg': '',
		'2.5kg': '',
		'1.25kg': '',
		'1kg': '',
		'0.5kg': '',
		'0.25kg': '',
	});
	const [doTheMaths, setDoTheMaths] = useState(false);
	const [isMounted, setIsMounted] = useState(false); // Flag to check if the component is mounted

	// Check if the component is mounted to avoid hydration error
	useEffect(() => {
		setIsMounted(true);
	}, []);
	// Only populate state once component has mounted
	useEffect(() => {
		if (isMounted && singleUser) {
			setName(singleUser.name || '');
			setEmail(singleUser.email || '');
			setSelectedDate(singleUser.dateOfBirth || '');
			setPhysical(
				singleUser.physical || {
					currentWeight: '',
					weightGoal: '',
					height: '',
					useFeetInches: false,
					useLbs: false,
				}
			);
			setExercises(
				singleUser.exercises || [
					{ type: 'Squat', current: '', goal: '' },
					{ type: 'Bench', current: '', goal: '' },
					{ type: 'Deadlift', current: '', goal: '' },
				]
			);
			setSocialMediaLinks(
				singleUser.socialMedia || {
					instagram: '',
					facebook: '',
					twitter: '',
				}
			);
			setBarbellWeight(
				singleUser.plateConfiguration?.barbellWeight || ''
			);
			setPlates(
				singleUser.plateConfiguration?.plates || {
					'25kg': '',
					'20kg': '',
					'15kg': '',
					'10kg': '',
					'5kg': '',
					'2.5kg': '',
					'1.25kg': '',
					'1kg': '',
					'0.5kg': '',
					'0.25kg': '',
				}
			);
			setDoTheMaths(singleUser.plateConfiguration?.doTheMaths || false);
		}
	}, [singleUser, isMounted]);

	// Handle date selection from the date picker
	const handleDateChange = date => {
		setSelectedDate(date.toLocaleDateString('en-GB'));
		setShowDatePicker(false);
	};

	// Handle input field focus (show date picker)
	// const handleFocus = () => {
	// 	setShowDatePicker(true);
	// };

	// Handle input field blur (hide date picker)
	// const handleBlur = () => {
	// 	setTimeout(() => {
	// 		setShowDatePicker(false);
	// 	}, 200);
	// };

	// Hide the date picker when clicking outside
	useEffect(() => {
		const handleClickOutside = event => {
			if (
				datepickerRef.current &&
				!datepickerRef.current.contains(event.target) &&
				inputRef.current &&
				!inputRef.current.contains(event.target)
			) {
				setShowDatePicker(false); // Close the date picker if clicked outside
			}
		};

		document.addEventListener('mousedown', handleClickOutside); // Listen for clicks outside
		return () => {
			document.removeEventListener('mousedown', handleClickOutside); // Cleanup event listener on unmount
		};
	}, []);
	useEffect(() => {
		if (uid) {
			dispatch(
				getSingleUser({
					uid: uid,
				})
			);
		}
	}, [uid, dispatch]);

	// Handle form field changes
	const handleName = e => setName(e.target.value);
	const handleEmail = e => setEmail(e.target.value);
	const handlePasswordChange = e => setPassword(e.target.value);
	const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value);
	const handleImageUpload = e => {
		const file = e.target.files[0];
		if (file) {
			// setProfileFile(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
				setImageError(false);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleImageError = () => {
		setImageError(true);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const createFormData = () => ({
			physical: {
				currentWeight: physical.currentWeight,
				weightGoal: physical.weightGoal,
				height: physical.height,
				useFeetInches: physical.useFeetInches,
				useLbs: physical.useLbs,
			},
			exercises,
			socialMedia: {
				instagram: socialMediaLinks.instagram,
				facebook: socialMediaLinks.facebook,
				twitter: socialMediaLinks.twitter,
			},
			plateConfiguration: {
				barbellWeight,
				plates,
				doTheMaths,
			},
			name,
			email,
			dateOfBirth: selectedDate,
		});
		const formData = createFormData();
		dispatch(
			profileUpdate({
				formData,
				uid,
			})
		);
	};
	if (!isMounted) return null; // Prevent rendering until client-side hydration is done

	return (
		<div>
			<div
				// onSubmit={handleSubmit}
				className='border-b border-[#D9D9D9] pb-6 md:pb-10 lg:pb-[60px] mb-6 md:mb-10 lg:mb-[60px]'
			>
				<h1 className='text-[#060606] text-[24px] md:text-[32px] md:leading-[40px] font-semibold tracking-[0.01em] mb-6 md:mb-[50px]'>
					Account Information
				</h1>

				{/* Profile Edit */}
				<div className='relative w-[107px] h-[107px]'>
					{imageError ? (
						<div className='w-full h-full rounded-full flex items-center justify-center'>
							<img
								src='/assets/profile-image.png'
								alt='profile-image'
							/>
						</div>
					) : (
						<Image
							src={imagePreview}
							alt='Profile'
							width={107}
							height={107}
							className='rounded-full object-cover w-full h-full'
							onError={handleImageError}
						/>
					)}
					<label
						htmlFor='profile-upload'
						className='absolute bottom-0 right-0 '
					>
						<Image
							src='/assets/profile.svg'
							alt='profile'
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

				<div className='mt-5 md:mt-8 flex items-center justify-between sm:flex-row flex-col gap-3 sm:gap-5 md:gap-[30px]'>
					<div className='w-full flex flex-col gap-2'>
						<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
							User Name
						</label>
						<input
							value={name}
							onChange={handleName}
							type='text'
							placeholder='Enter User Name'
							className='w-full h-[45px] sm:h-[50px] rounded-[60px] px-5 outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]'
						/>
					</div>
					<div className='w-full flex flex-col gap-2'>
						<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
							Email Address
						</label>
						<input
							value={email}
							onChange={handleEmail}
							readOnly={uid}
							type='email'
							placeholder='Enter Email Address'
							className='w-full h-[45px] sm:h-[50px] rounded-[60px] px-5 outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]'
						/>
					</div>
				</div>

				<div className='mt-3 sm:mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-[30px]'>
					{uid ? (
						<></>
					) : (
						<>
							<PasswordInput
								label='Password'
								placeholder='Enter Password'
								value={password}
								onChange={handlePasswordChange}
							/>
							<PasswordInput
								label='Confirm Password'
								placeholder='Enter Confirm Password'
								value={confirmPassword}
								onChange={handleConfirmPasswordChange}
							/>
						</>
					)}

					<div className='w-full flex flex-col gap-2 relative'>
						<label
							htmlFor='calendar'
							className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'
						>
							Date of Birth
						</label>
						<div className='w-full h-[45px] sm:h-[50px] bg-white rounded-[60px] px-5 flex items-center gap-2 relative'>
							<input
								ref={inputRef}
								type='text'
								value={selectedDate} // Format the Date object before displaying
								placeholder='DD/MM/YYYY'
								className='w-full h-full outline-none placeholder:text-[#868E96] text-black text-[14px] sm:text-[16px] font-normal leading-[20px]'
								readOnly // Make input readonly to avoid manual input
								onClick={() =>
									setShowDatePicker(!showDatePicker)
								}
							/>
							<Image
								src='/icons/calendar.svg'
								alt='calendar'
								width={20}
								height={20}
							/>

							{showDatePicker && (
								<div
									className='absolute w-auto left-[110px] top-12 z-10'
									ref={datepickerRef}
								>
									<DatePicker
										// selected={selectedDate}
										onChange={handleDateChange}
										inline
										dateFormat='dd/MM/yyyy'
										className='w-full rounded-[8px] shadow-lg'
									/>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* <div className='mt-6 flex justify-end'>
					<button
						type='submit'
						className='bg-[#060606] text-white text-[14px] sm:text-[16px] px-6 py-2 rounded-[60px]'
					>
						Save Changes
					</button>
				</div> */}
			</div>
			<PhysicalInformation
				setPhysical={setPhysical}
				physical={physical}
			/>
			<ExerciseOneRepMaxes
				exercises={exercises}
				setExercises={setExercises}
			/>
			<SocialMediaLink
				socialMediaLinks={socialMediaLinks}
				setSocialMediaLinks={setSocialMediaLinks}
			/>
			<PlateConfiguration
				plates={plates}
				setPlates={setPlates}
				barbellWeight={barbellWeight}
				setBarbellWeight={setBarbellWeight}
				doTheMaths={doTheMaths}
				setDoTheMaths={setDoTheMaths}
			/>

			<div>
				<button
					disabled={isLoading}
					onClick={handleSubmit}
					className='bg-black w-[149px] sm:w-[220px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center'
				>
					{isLoading ? (
						<ImSpinner8 className='spinning-icon' />
					) : (
						<>
							Save Changes
							<IoIosArrowForward className='text-[16px] sm:text-[18px]' />
						</>
					)}
				</button>
			</div>
		</div>
	);
};

export default AccountInformation;
