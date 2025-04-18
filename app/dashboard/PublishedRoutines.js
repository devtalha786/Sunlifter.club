'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProgramById } from '../store/program/programThunk';
import Image from 'next/image';

const PublishedRoutines = () => {
	const { uid } = useSelector(state => state?.user);
	const { programsById } = useSelector(state => state?.program);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllProgramById(uid));
	}, []);

	// const programs = [
	//     {
	//         name: "Intermediate Strength Program",
	//         type: "Strength Training",
	//         duration: "25 Min",
	//         price: "$99.99",
	//     },
	//     {
	//         name: "Ultimate Squat Program",
	//         type: "Strength Training",
	//         duration: "25 Min",
	//         price: "$99.99",
	//     },
	//     {
	//         name: "Ultimate Squat Program",
	//         type: "Strength Training",
	//         duration: "25 Min",
	//         price: "$99.99",
	//     },
	//     {
	//         name: "Ultimate Squat Program",
	//         type: "Strength Training",
	//         duration: "25 Min",
	//         price: "$99.99",
	//     },
	// ];
	return (
		<div className='w-full'>
			<div className='mb-6 md:mb-[51px] flex items-center justify-between gap-4 flex-wrap'>
				<h1 className='text-[#000000] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] lg:leading-[75px] font-semibold tracking-[-0.02em]'>
					Published Routines
				</h1>
				<Link
					href='/create-routines'
					className='bg-[#EB3340] w-[195px] sm:w-[281px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center'
				>
					Create New Routines{' '}
					<IoIosArrowForward className='text-[16px] sm:text-[18px]' />
				</Link>
			</div>
			{programsById.length > 0 ? (
				<div className='max-w-[1180px] w-full'>
					{/* Desktop Design */}
					<div className='overflow-hidden rounded-2xl md:block hidden border border-[#E9E9E9]'>
						<div className='overflow-x-auto'>
							<table className='min-w-full border-collapse'>
								<thead className='border-b border-[#E9E9E9]'>
									<tr className='text-left h-[60px] lg:h-[72px] text-nowrap'>
										<th className='px-6 text-sm font-medium text-[#7F7F8A]'>
											NAME
										</th>
										<th className='px-6 text-sm font-medium text-[#7F7F8A]'>
											TYPE
										</th>
										<th className='px-6 text-sm font-medium text-[#7F7F8A]'>
											DURATION
										</th>
										<th className='px-6 text-sm font-medium text-[#7F7F8A]'>
											PRICE
										</th>
										<th className='px-6 text-sm font-medium text-[#7F7F8A]'>
											ACTION
										</th>
									</tr>
								</thead>
								<tbody>
									{programsById?.map((program, index) => (
										<tr
											key={index}
											className='border-b border-[#E9E9E9] h-[55px] lg:h-[70px]'
										>
											<td className='px-6 text-base text-[#292933] text-nowrap'>
												{program?.name}
											</td>
											<td className='px-6 text-base text-[#292933] text-nowrap'>
												{program?.workoutType}
											</td>
											<td className='px-6 text-base text-[#292933] text-nowrap'>
												25 Min
											</td>
											<td className='px-6 text-base text-[#292933] text-nowrap'>
												${program?.price}
											</td>
											<td className='px-6 text-base font-medium underline text-[#EB3340] underline-offset-2 cursor-pointer'>
												<Link href='/edit-routines'>
													Edit
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					{/* Mobile Design */}
					<div className='md:hidden grid gap-4'>
						{programsById?.map((program, index) => (
							<div
								key={index}
								className='border border-[#E9E9E9] bg-white rounded-[16px] w-full p-5'
							>
								<div className='flex items-start justify-between gap-3'>
									<div>
										<h3 className='text-[#7F7F8A] text-[12px] font-medium leading-[18px] uppercase'>
											Name
										</h3>
										<h2 className='text-[#292933] text-[14px] leading-[22px] font-normal mt-1'>
											{program?.name}
										</h2>
									</div>
									<h2 className='text-[#292933] text-[13px] font-normal leading-[22px]'>
										25 Min
									</h2>
								</div>
								<div className='my-4'>
									<h3 className='text-[#7F7F8A] text-[12px] font-medium leading-[18px] uppercase'>
										Type
									</h3>
									<h2 className='text-[#292933] text-[14px] leading-[22px] font-normal mt-1'>
										{program?.workoutType}
									</h2>
								</div>
								<h2 className='text-[#292933] text-[16px] leading-[22px] font-normal mb-4'>
									{program?.price}
								</h2>
								<a
									href='/edit'
									className='text-[#EB3340] underline underline-offset-2 text-[16px] font-medium leading-[20px]'
								>
									Edit
								</a>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className='bg-[#EB33400A] rounded-[20px] max-w-[839px] pt-12 md:pt-5 pb-12 flex items-center flex-col gap-6 md:gap-[42px]'>
					<Image
						src='/assets/no-results.svg'
						alt='no-results'
						width={301}
						height={245}
						className='lg:w-[301px] lg:h-[245px] w-[199px] h-[162px]'
					/>
					<p className='text-[#000000] text-[14px] sm:text-[22px] sm:leading-[27.5px] font-normal text-center'>
						You haven't purchased any routines yet.
					</p>
				</div>
			)}
		</div>
	);
};

export default PublishedRoutines;
