import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
	try {
		const { program, userId, email } = await request.json();

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					price_data: {
						currency: 'usd', // Replace with the currency you want
						product_data: {
							name: program.name, // The name of the program
							description: program.description, // Optional description
						},
						unit_amount: Math.round(program.price * 100), // Price in cents
					},
					quantity: 1,
				},
			],
			customer_email: email,
			metadata: {
				userId: userId,
			},
			mode: 'payment',
			// success_url: `${process.env.NEXT_PUBLIC_URL}/`,
			success_url: `${process.env.NEXT_PUBLIC_URL}/?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
		});
		return NextResponse.json({ id: session.id });
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		);
	}
}
