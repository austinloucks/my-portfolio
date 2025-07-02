import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Vercel Serverless Function to handle contact form submission
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { firstName, lastName, email, message } = req.body;

  const msg = {
    to: "austin.loucks.dev@gmail.com",
    from: "contact@austinloucks.dev",
    subject: `New message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
    html: `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    res.status(500).json({ message: "Email failed to send" });
  }
}
