export default function ThankYouPage() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-6 px-4 md:px-6">
                <div className="flex flex-col space-y-2 items-center justify-center">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Thank You</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank You</h2>
                    <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                </div>
            </div>
        </section>
    );
}