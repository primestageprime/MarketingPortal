import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { superValidate } from 'sveltekit-superforms/server';
import chalk from 'chalk';
import { emailFormSchema } from './constants';

dotenv.config();

const smtpPort = process.env.SMTP_PORT as string;
const smtpPortNumeric = parseInt(smtpPort, 10);

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		// const validation = await superValidate(formData, emailFormSchema);

		// if (!validation.valid) {
		// 	// Return validation errors to the form
		// 	return { errors: validation.errors };
		// }

		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message') as string | undefined;

		// Set up Nodemailer transporter
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: smtpPortNumeric,
			secure: smtpPortNumeric == 465, // true for port 465, false for other ports
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		});

		try {
			// Send email
			await transporter.sendMail({
				from: process.env.EMAIL_USER, // Must match the authenticated email
				replyTo: `${name} <${email}>`, // Sets the reply-to to the user's email
				to: 'info@primestagetechnology.com',
				subject: `Contact Form Submission from ${name}`,
				text: message ? message : ''
			});
			console.info(
				chalk.bgBlueBright(
					'SENDING CONTACT FORM EMAIL',
					JSON.stringify({ name, email, message }, null, 2)
				)
			);

			return { success: true };
		} catch (error) {
			console.error(error);
			return { error: 'Failed to send email. Please try again later.' };
		}
	}
};
