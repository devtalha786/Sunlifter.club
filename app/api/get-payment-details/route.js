// import Stripe from 'stripe';
// import admin from 'firebase-admin';
// import { getFirestore } from 'firebase-admin/firestore';

// if (!admin.apps.length) {
// 	admin.initializeApp({
// 		credential: admin.credential.cert({
// 			projectId: process.env.FIREBASE_PROJECT_ID,
// 			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// 			privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
// 		}),
// 	});
// }

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const db = getFirestore();

// export async function POST(req) {
// 	try {
// 		const { sessionId } = await req.json();

// 		if (!sessionId) {
// 			return new Response(
// 				JSON.stringify({ error: 'Missing sessionId' }),
// 				{
// 					status: 400,
// 					headers: { 'Content-Type': 'application/json' },
// 				}
// 			);
// 		}

// 		// Retrieve session details from Stripe
// 		const session = await stripe.checkout.sessions.retrieve(sessionId);

// 		if (!session) {
// 			return new Response(
// 				JSON.stringify({ error: 'Session not found' }),
// 				{
// 					status: 404,
// 					headers: { 'Content-Type': 'application/json' },
// 				}
// 			);
// 		}

// 		const { id: paymentId, amount_total, metadata } = session;

// 		// Extract userId and programId from metadata
// 		const { userId, programId } = metadata;

// 		if (!userId || !programId) {
// 			return new Response(
// 				JSON.stringify({
// 					error: 'Missing userId or programId in session metadata',
// 				}),
// 				{ status: 400, headers: { 'Content-Type': 'application/json' } }
// 			);
// 		}

// 		// Store payment details in Firebase
// 		const paymentData = {
// 			paymentId,
// 			amount: amount_total / 100, // Convert from cents to dollars
// 			userId,
// 			programId,
// 			paymentStatus: session.payment_status,
// 			createdAt: admin.firestore.FieldValue.serverTimestamp(),
// 		};

// 		await db.collection('payments').doc(paymentId).set(paymentData);

// 		return new Response(JSON.stringify({ success: true, paymentData }), {
// 			status: 200,
// 			headers: { 'Content-Type': 'application/json' },
// 		});
// 	} catch (error) {
// 		console.error('Error:', error);
// 		return new Response(
// 			JSON.stringify({ error: 'Failed to process payment details' }),
// 			{
// 				status: 500,
// 				headers: { 'Content-Type': 'application/json' },
// 			}
// 		);
// 	}
// }

//without storage to get detail

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	try {
		const { sessionId } = await req.json();

		if (!sessionId) {
			return new Response(
				JSON.stringify({ error: 'Missing sessionId' }),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// Retrieve session details from Stripe
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		return new Response(JSON.stringify(session), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Stripe API error:', error);
		return new Response(
			JSON.stringify({ error: 'Failed to retrieve session details' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
}
