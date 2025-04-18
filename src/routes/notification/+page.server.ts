import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

// Load environment variables
dotenv.config();

const sendGridEmail = process.env.EMAIL_USER as string;
const sendGridApiKey = process.env.SENDGRID_API_KEY as string;

// Configure SendGrid with the API key
sgMail.setApiKey(sendGridApiKey);

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const phone = data.get("phone");

    // Validate phone number
    if (!phone || typeof phone !== "string") {
      return fail(400, { phone, missing: true });
    }

    try {
      // Send email notification using SendGrid
      const msg = {
        to: "info@primestagetechnology.com",
        from: sendGridEmail,
        subject: "New SMS Notification Signup",
        text: `A new user has signed up for SMS notifications.\n\nPhone: ${phone}`,
        html: `
					<h1>New SMS Notification Signup</h1>
					<p>A new user has signed up for SMS notifications.</p>
					<p><strong>Phone:</strong> ${phone}</p>
				`,
      };

      await sgMail.send(msg);

      // Log success
      console.log("consent signup email sent:", phone);

      // Return success
      return { success: true, phone };
    } catch (error) {
      console.error("Failed to send consent email:", error);
      return fail(500, { phone, error: true });
    }
  },
};
