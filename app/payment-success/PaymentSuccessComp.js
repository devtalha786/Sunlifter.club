'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const PaymentSuccessComp = () => {
	const searchParams = useSearchParams();
	const sessionId = searchParams.get('session_id');
	const [paymentDetails, setPaymentDetails] = useState(null);
	useEffect(() => {
		if (sessionId) {
			axios
				.post('/api/get-payment-details', { sessionId })
				.then(async response => {
					const data = response.data;
					setPaymentDetails(data);
					if (data.status == 'complete') {
						const paymentDocRef = doc(db, 'payments', sessionId);
						await setDoc(paymentDocRef, {
							userId: data.metadata.userId,
							programId: data.metadata.programId,
							programcreatorId: data.metadata.programcreatorId,
							amount: data.amount_total / 100,
							status: data.status,
							paymentId: data.id,
							timestamp: new Date().toISOString(),
						});

						console.log('Payment details stored in Firebase');
					}
				})
				.catch(error =>
					console.error('Error fetching payment details:', error)
				);
		}
	}, [sessionId]);

	return (
		<div>
			<div className='text-center w-[700px] mx-auto bg-white shadow-lg rounded-lg p-6 my-2'>
				<h2 className='text-2xl font-bold text-center mb-4'>
					Payment Details
				</h2>

				<div className='mb-4'>
					<h3 className='text-lg font-semibold'>Payment ID:</h3>
					<p className='text-gray-700'>{paymentDetails?.id}</p>
				</div>
				<div className='mb-4'>
					<h3 className='text-lg font-semibold'>Program Name:</h3>
					<p className='text-gray-700'>
						{paymentDetails?.metadata.programName}
					</p>
				</div>

				<div className='mb-4'>
					<h3 className='text-lg font-semibold'>Amount:</h3>
					<p className='text-gray-700'>
						${paymentDetails?.amount_total / 100}
					</p>
				</div>

				<div className='mb-4'>
					<h3 className='text-lg font-semibold'>Payment Status:</h3>
					<p
						className={`text-gray-700 ${
							paymentDetails?.status === 'complete'
								? 'text-green-500'
								: 'text-red-500'
						}`}
					>
						{paymentDetails?.status === 'complete'
							? 'Payment Successful'
							: 'Payment Failed'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentSuccessComp;
