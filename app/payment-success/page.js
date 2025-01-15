import React from 'react';
import PaymentSuccessComp from './PaymentSuccessComp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const page = () => {
	return (
		<>
			<Navbar />
			<div className="relative bg-[url('/assets/profile-mobile.png')] sm:bg-[url('/assets/profile.png')] bg-cover bg-no-repeat">
				<div className='bg-black/10 inset-0 w-full h-full absolute'></div>
				<div className='px-4 lg:px-6 xl:px-10 relative z-40'>
					<div className='max-w-[1600px] mx-auto'>
						<div className='max-w-[512px] pt-[175px] pb-[72px] sm:py-[152px]'>
							<h1 className='text-white text-[32px] sm:text-[48px] leading-[37px] sm:leading-[56px] font-workSpace font-bold tracking-[-0.02em] mb-2.5'>
								Payment
							</h1>
						</div>
					</div>
				</div>
			</div>
			<PaymentSuccessComp />
			<Footer />
		</>
	);
};

export default page;
