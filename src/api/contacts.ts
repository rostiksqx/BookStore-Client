import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function Post(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, email, message } = req.body;
        const ownerEmail = process.env.OWNER_EMAIL;

        if (!ownerEmail) {
            return res.status(500).json({ error: 'Owner email is not set' });
        }

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ownerEmail,
            subject: 'New message from your website!',
            text: `New message from Name:${name} (${email}). Message: ${message}`,
        });

        res.redirect("/thank-you");
    } catch (error) {
        console.error(error);
        res.status(400).redirect("")
    }
}