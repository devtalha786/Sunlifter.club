import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DropdownCustom from '../components/DropdownCustom';
import NumberInput from '../components/NumberInput';
import ViewMyRoutineComp from './viewMyRoutineComp';

const page = () => {
	const typesOptions = ['Type 1', 'Type 2', 'Type 3'];

	return (
		<div>
			<Navbar />
			<div className="relative bg-[url('/assets/mobile-view.svg')] sm:bg-[url('/assets/available-workout-routines.png')] bg-cover bg-no-repeat">
				<div className='bg-black/10 inset-0 w-full h-full absolute'></div>
				<div className='px-4 lg:px-6 xl:px-10 relative z-40'>
					<div className='max-w-[1600px] mx-auto'>
						<div className='max-w-[512px] pt-[175px] pb-[72px] sm:py-[152px]'>
							<h1 className='text-white text-[32px] sm:text-[48px] leading-[37px] sm:leading-[56px] font-workSpace font-bold tracking-[-0.02em] mb-2.5'>
								My Workout Routines
							</h1>
						</div>
					</div>
				</div>
			</div>

			{/* Filters */}
			<div className='w-full px-4 lg:px-6 xl:px-10'>
				<div className='max-w-[1600px] mx-auto w-full'>
					<div className='py-[48px] md:py-[100px]'>
						<input
							type='text'
							placeholder='Search by name...'
							className='mb-3 lg:mb-7 w-full h-[50px] sm:h-[56px] rounded-[24px] sm:rounded-[50px] border border-[#E3E3E3] outline-none px-4 sm:px-7 text-black placeholder:text-black/60 text-[16px] sm:text-[18px] font-normal'
						/>
						{/* Dropdowns */}
						<div className='flex items-center md:flex-row flex-col gap-3 lg:gap-7'>
							<div className='max-w-[750px] w-full'>
								<DropdownCustom
									label='Select Types'
									options={typesOptions}
									placeholder='Select Types'
								/>
							</div>
							<div className='w-full flex items-center gap-3 lg:gap-7'>
								<div className='max-w-[341px] w-full'>
									<NumberInput placeholder='Min Price' />
								</div>
								<div className='max-w-[453px] w-full'>
									<NumberInput placeholder='Max Price' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full bg-[#FEF1F2] py-12 md:py-[120px] mb-12 md:mb-[100px]'>
				<div className='w-full px-4 lg:px-6 xl:px-10'>
					<ViewMyRoutineComp />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
