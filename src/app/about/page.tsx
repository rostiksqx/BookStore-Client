import Link from "next/link";

export default function About() {
    return (
        <div>
            <section className="bg-muted py-12 md:py-24">
                <div className="container grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Bookworm's Haven</h2>
                        <p className="text-muted-foreground mb-6">
                            Bookworm's Haven is a beloved independent bookstore that has been serving the community for over 20
                            years. Founded by a passionate team of book lovers, our mission is to curate a diverse selection of
                            literature, foster a love of reading, and provide a cozy and welcoming space for our customers.
                        </p>
                        <Link href="#" className="inline-flex items-center space-x-2" prefetch={false}>
                            <span>Learn More</span>
                            <ChevronRightIcon className="h-5 w-5" />
                        </Link>
                    </div>
                    <img
                        src="/placeholder.svg"
                        width={400}
                        height={400}
                        alt="Bookworm's Haven"
                        className="mx-auto rounded-lg"
                    />
                </div>
            </section>
            <section className="py-12 md:py-24">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Discover Our Curated Selection</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <BookIcon className="h-8 w-8 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Curated Book Selection</h3>
                            <p className="text-muted-foreground">
                                Our knowledgeable staff carefully selects a diverse range of books, from the latest bestsellers to
                                hidden gems, to cater to every literary taste.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <UserIcon className="h-8 w-8 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Knowledgeable Staff</h3>
                            <p className="text-muted-foreground">
                                Our passionate team of book enthusiasts is always ready to provide personalized recommendations and
                                engage in thought-provoking discussions.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <SofaIcon className="h-8 w-8 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Cozy Reading Nooks</h3>
                            <p className="text-muted-foreground">
                                Discover the perfect spot to curl up with a good book in our inviting and comfortable reading areas,
                                complete with plush seating and natural lighting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-muted py-12 md:py-24">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Visit Us</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Location</h3>
                            <p className="text-muted-foreground mb-6">123 Main Street, Anytown USA 12345</p>
                            <h3 className="text-xl font-bold mb-4">Hours</h3>
                            <p className="text-muted-foreground mb-6">
                                Monday - Saturday: 10am - 8pm
                                <br />
                                Sunday: 12pm - 6pm
                            </p>
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <p className="text-muted-foreground mb-6">
                                Phone: (123) 456-7890
                                <br />
                                Email: info@bookwormshaven.com
                            </p>
                        </div>
                        <div>
                            <img
                                src="/placeholder.svg"
                                width={600}
                                height={400}
                                alt="Bookworm's Haven Storefront"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

function BookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}

function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function SofaIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
            <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
            <path d="M4 18v2" />
            <path d="M20 18v2" />
            <path d="M12 4v9" />
        </svg>
    )
}


function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}