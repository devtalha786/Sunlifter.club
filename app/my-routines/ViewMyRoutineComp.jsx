'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getMyRoutines } from '../store/program/programThunk';
const ViewMyRoutineComp = () => {
	const dispatch = useDispatch();
	const { uid } = useSelector(state => state?.user);
	const { myRoutines } = useSelector(state => state?.program);

	useEffect(() => {
		dispatch(getMyRoutines(uid));
	}, []);

	return (
		<div className='flex flex-col gap-6 sm:gap-8'>
			{myRoutines?.map((program, index) => (
				<div
					key={index}
					className='rounded-xl sm:rounded-[20px] bg-[#F9F9F9] max-w-[1163px] mx-auto w-full py-6 sm:py-11 px-4 sm:px-[53px]'
				>
					<div className='max-w-[780px] w-full'>
						<h1 className='text-black text-[18px] sm:text-[40px] sm:leading-[50px] font-semibold tracking-[-0.02em] mb-3 sm:mb-9'>
							{program.name}
						</h1>
						<h3 className='text-black text-[16px] sm:text-[22px] sm:leading-[27.5px] font-normal'>
							Description:
						</h3>
						<p className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal pt-3'>
							{program.description}
						</p>
						<div className='w-full mt-5 sm:mt-[34px] flex items-center gap-10 sm:gap-[34px]'>
							<div className='sm:w-[350px]'>
								<h3 className='text-black text-[16px] sm:text-[22px] sm:leading-[27.5px] font-normal mb-2'>
									Type:
								</h3>
								<h4 className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
									{program.workoutType}
								</h4>
							</div>
							<div className=''>
								<h3 className='text-black text-[16px] sm:text-[22px] sm:leading-[27.5px] font-normal mb-2'>
									Price:
								</h3>
								<h4 className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
									${program.price}
								</h4>
							</div>
						</div>

						<div className='mt-5 sm:mt-[47px] flex flex-col gap-[47px]'>
							<div className='flex items-center gap-3 sm:gap-[18px]'>
								<Image
									src={
										program?.creator?.profilePicture
											? program.creator.profilePicture
											: '/icons/ellipse.svg'
									}
									alt='ellipse'
									width={80}
									height={80}
									className='rounded-full sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]'
								/>
								<div className='flex flex-col gap-1 sm:gap-2'>
									<h2 className='text-[#000000] text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
										Created By :{' '}
										<span className='text-[#686868]'>
											{program?.creator?.name}
										</span>
									</h2>
									<h2 className='text-[#000000] text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
										Contact :{' '}
										<span className='text-[#686868]'>
											{program?.creator?.email}
										</span>
									</h2>
								</div>
							</div>

							<div className='flex items-center gap-3 sm:gap-5 flex-wrap'>
								<button className='bg-[#EB3340] w-[140px] sm:w-[211px] h-[39px] sm:h-[56px] rounded-[23px] sm:rounded-[43px] text-white text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
									Contact Creator
								</button>
								<button className='bg-black w-[160px] sm:w-[233px] h-[39px] sm:h-[56px] rounded-[23px] sm:rounded-[43px] text-white text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
									Start this program
								</button>
								{/* <Link
                            href='/dashboard'
                            className='bg-white flex items-center justify-center w-[109px] sm:w-[113px] h-[39px] sm:h-[56px] border border-[#EAEAEA] rounded-[23px] sm:rounded-[43px] text-black text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'
                        >
                            Back
                        </Link> */}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ViewMyRoutineComp;
