'use client';
import React, { useEffect, useState } from 'react'
import DropdownCustom from '../DropdownCustom';
import CustomDropdownTwo from '../CustomDropdownTwo';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import NumberInput from '../NumberInput';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getAllrogram } from '@/app/store/program/programThunk';
import LoginModal from '../LoginModal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
const ViewAvailableRoutineContent = () => {
    const { programs } = useSelector(state => state?.program);
    const { uid,user } = useSelector(state => state?.user);
    const [open, setOpen] = useState(false);
	const toggle = state => setOpen(state);
    const stripe = useStripe();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllrogram());
	}, []);
    const handleBuyClick =async (program) => {
		if (!uid) {
			setOpen(true);
			return
		  }
          try {
            const response = await axios.post('/api/create-checkout-session', {
                program,
                userId: uid,
                email: user?.email,
            });
            const session = response.data;
            // // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });
            if (result.error) {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        } 
	};
    const typesOptions = ['Type 1', 'Type 2', 'Type 3'];
    const minpriceOptions = ['Min Price 1', 'Min Price 2', 'Min Price 3'];
    const maxpriceOptions = ['Max Price 1', 'Max Price 2', 'Max Price 3'];

    // const programs = [
    //     {
    //         id: 1,
    //         title: 'Ultimate Squat Program',
    //         description: 'Perfect for beginners or those looking to build a foundation using just their body weight.',
    //         type: 'Functional Training',
    //         price: 'Free',
    //         createdBy: 'Test testington',
    //         contact: 'test1@test.com',
    //     },
    //     {
    //         id: 2,
    //         title: 'Intermediate Strength Program',
    //         description: 'A great program for intermediate fitness enthusiasts.',
    //         type: 'Strength Training',
    //         price: '$20',
    //         createdBy: 'John Doe',
    //         contact: 'john.doe@example.com',
    //     },
    //     {
    //         id: 3,
    //         title: 'Ultimate Squat Program',
    //         description: 'A great program for intermediate fitness enthusiasts.',
    //         type: 'Strength Training',
    //         price: '$20',
    //         createdBy: 'John Doe',
    //         contact: 'john.doe@example.com',
    //     },
    // ];

    return (
        <div className='bg-[#FEF1F2] px-4 lg:px-6 xl:px-10 py-12 md:py-[100px]'>
            <div className='max-w-[1600px] w-full mx-auto'>
                <h1 className='text-black text-[24px] sm:text-[40px] lg:text-[60px] md:leading-[70px] font-workSpace font-semibold tracking-[-0.02em]'>View Available Routine</h1>
                <p className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[30px] font-normal'>Find the Perfect Routine for Your Fitness Journey</p>
                <div className='mt-6 md:mt-14'>
                    <input type='text' placeholder='Search by name...' className='mb-3 lg:mb-7 w-full h-[50px] sm:h-[56px] rounded-[24px] sm:rounded-[50px] border border-[#E3E3E3] outline-none px-4 sm:px-7 text-black placeholder:text-black/60 text-[16px] sm:text-[18px] font-normal' />
                    {/* Dropdowns */}
                    <div className='flex items-center md:flex-row flex-col gap-3 lg:gap-7'>
                        <div className='max-w-[750px] w-full'>
                            <DropdownCustom
                                label="Select Types"
                                options={typesOptions}
                                placeholder="Select Types"
                            />
                        </div>
                        <div className='w-full flex items-center gap-3 lg:gap-7'>
                            <div className='max-w-[341px] w-full'>
                                <NumberInput placeholder="Min Price" />
                            </div>
                            <div className='max-w-[453px] w-full'>
                                <NumberInput placeholder="Max Price" />
                            </div>
                        </div>
                    </div>

                    <div className='mt-6 sm:mt-8 md:mt-14 flex flex-col gap-6 sm:gap-8'>
                        {programs?.slice(0,3).map((program, index) => (
                            <div key={index} className='bg-white rounded-xl sm:rounded-[20px] max-w-[1100px] w-full py-6 sm:py-8 px-4 sm:px-6'>
                                <div className='max-w-[883px] mx-auto w-full'>
                                    <h1 className='text-black text-[18px] sm:text-[32px] sm:leading-[40px] font-semibold tracking-[-0.02em] mb-3 sm:mb-2'>
                                        {program.name}
                                    </h1>
                                    <h3 className='text-black text-[16px] sm:text-[22px] sm:leading-[27.5px] font-normal'>
                                        Description:
                                    </h3>
                                    <p className='text-black/60 text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal pt-2'>
                                        {program.description}
                                    </p>
                                    <div className='w-full mt-5 sm:mt-[34px] flex items-center gap-10 sm:gap-[34px]'>
                                        <div className='sm:max-w-[341px]'>
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

                                    <div className='mt-5 sm:mt-[24px] flex items-center flex-wrap justify-between gap-6'>
                                        <div className='flex items-center gap-3 sm:gap-4'>
                                            <Image
                                                	src={
													program?.creator
														?.profilePicture
														? program.creator
																.profilePicture
														: '/icons/ellipse.svg'
												}
                                                alt='ellipse'
                                                width={80}
                                                height={80}
                                                className='rounded-full sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]'
                                            />
                                            <div className='flex flex-col gap-1 sm:gap-2'>
                                                <h2 className='text-[#000000] text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
                                                    Created By : <span className='text-[#686868]'>{program?.creator?.name}</span>
                                                </h2>
                                                <h2 className='text-[#000000] text-[14px] sm:text-[18px] sm:leading-[22.5px] font-normal'>
                                                    Contact : <span className='text-[#686868]'>{program?.creator?.email}</span>
                                                </h2>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3 sm:gap-5'>
                                            <button className='bg-[#EB3340] w-[127px] sm:w-[185px] h-[39px] sm:h-[56px] rounded-[23px] sm:rounded-[43px] text-white text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
                                                View Routine
                                            </button>
                                            <button onClick={() => handleBuyClick(program)} className='w-[109px] sm:w-[148px] h-[39px] sm:h-[56px] border border-[#EAEAEA] rounded-[23px] sm:rounded-[43px] text-black text-[14px] sm:text-[18px] font-medium sm:leading-[20px]'>
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Link href="/available-routines" className="mt-8 xl:mt-14 h-[39px] sm:h-[56px] px-4 sm:px-6 rounded-[43px] bg-black text-white text-[14px] sm:text-[18px] leading-[20px] font-medium flex items-center gap-2" style={{ maxWidth: 'fit-content' }}>
                        Browse available routines <IoIosArrowForward className="text-white" /></Link>

            </div>
            <LoginModal open={open} toggle={toggle} />
        </div>
    )
}

const ViewAvailableRoutine = () => (
	<Elements stripe={stripePromise}>
		<ViewAvailableRoutineContent />
	</Elements>
);

export default ViewAvailableRoutine;