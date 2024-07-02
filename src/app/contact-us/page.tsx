import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Resend } from 'resend'
import { KEY, OWNER_EMAIL, contactUsHeaderId, errorSearchParameterName } from "@/api/constants";
import { redirect } from "next/navigation";
import { searchParams } from "@/types";


export default function ContactsPage({ searchParams }: { searchParams: searchParams }) {
    async function handleSubmit(formData: FormData) {
        "use server"

        const resend = new Resend(KEY);

        if (!OWNER_EMAIL) {
            console.error('OWNER_EMAIL is not defined');
            return redirect(`/${contactUsHeaderId}?${errorSearchParameterName}=Something-wend-wrong.`);
        }

        const rawFormData = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: OWNER_EMAIL,
            subject: `New message from BookStore! ${rawFormData.name} (${rawFormData.email})`,
            text: `New message from Name:${rawFormData.name} (${rawFormData.email}). Message: ${rawFormData.message}`,
        });

        if (error) {
            console.error(error);
            return redirect(`/${contactUsHeaderId}?${errorSearchParameterName}=An-error-occurred.-Please-try-again.`);
        }

        return redirect('/thank-you');
    };


    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-6 px-4 md:px-6">
                <div className="flex flex-col space-y-2 items-center justify-center">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Get in Touch</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                    <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Have a question or need assistance? Fill out the form below and we'll get back to you as soon as
                        possible.
                    </p>
                </div>
                <form className="mx-auto w-full max-w-md space-y-4"
                    action={handleSubmit}
                    id="form"
                >
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Enter your message" required />
                    </div>
                    <div className="text-center">
                        <span className="text-red-600 font-medium">{searchParams.error ? searchParams.error.replace(/-/g, ' ') : ""}</span>
                    </div>
                    <Button type="submit" className="w-full hover:bg-black/70 transition-colors ease-in-out duration-300">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
};