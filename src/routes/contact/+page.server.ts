import type { Actions } from './$types';
import dotenv from 'dotenv';
import { fail } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';

dotenv.config();

const emailUser = process.env.EMAIL_USER as string;
const sendGridApiKey = process.env.SENDGRID_API_KEY as string;

// Configure SendGrid with the API key
sgMail.setApiKey(sendGridApiKey);

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name') as string | undefined;
		const email = formData.get('email') as string | undefined;
		const message = formData.get('message') as string | undefined;

		if (!name || !email || !message) {
			return fail(400, { error: 'All fields are required.' });
		}

		try {
			// Send email using SendGrid
			await sgMail.send({
				from: {
					email: emailUser, // Use your verified SendGrid sender email here
					name: `${name} via Contact Form`
				},
				to: 'info@yourcompany.com', // Replace with your recipient email
				subject: `Contact Form Submission from ${name}`,
				text: message,
				replyTo: email // This will allow the recipient to reply to the user's email
			});

			return { success: true };
		} catch (error) {
			console.error(error);
			return { error: 'Failed to send email. Please try again later.' };
		}
	}
};
