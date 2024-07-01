import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactsPage() {
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
                <div className="mx-auto w-full max-w-md space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Enter your message" />
                    </div>
                    <Button type="submit" className="w-full hover:bg-black/70 transition-colors ease-in-out duration-300">
                        Submit
                    </Button>
                </div>
            </div>
        </section>
    );
}