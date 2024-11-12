import type { Actions } from './$types';
import dotenv from 'dotenv';
import { fail } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import chalk from 'chalk';

dotenv.config();

const sendGridEmail = process.env.EMAIL_USER as string;
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
				from: sendGridEmail,
				to: 'info@primestagetechnology.com',
				subject: `Contact Form Submission from ${name} <${email}>`,
				text: message,
				replyTo: email
			});

			console.info(
				chalk.bgBlueBright('Contact form submitted.  Email sent to info@primestagetechnology.com')
			);

			return { success: true };
		} catch (error) {
			console.error(JSON.stringify(error, null, 2));
			return { error: 'Failed to send email. Please try again later.' };
		}
	}
};
