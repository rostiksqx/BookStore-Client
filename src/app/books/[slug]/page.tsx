'use client'

import NotFound from "@/app/not-found";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/context/book-provider";
import Image from "next/image";


export default function Book({ params }: { params: { slug: string } }) {
    const { books } = useBooks();
    const book = books.find(book => book.title === params.slug.replace(/-/g, ' '));

    if (!book) {
        return <NotFound />;
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-6 px-4 md:px-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{book.title}</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A timeless classic that follows the journey of a young shepherd in search of his personal legend.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Image
                            src={`data:image/jpeg;base64,${book.image}`}
                            alt={book.title}
                            width={200}
                            height={400}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <h3 className="text-xl font-semibold">About the Book</h3>
                            <p className="text-muted-foreground">
                                The Alchemist follows the journey of a young shepherd named Santiago who travels from his homeland
                                in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. The story is an
                                inspiring tale of self-discovery and the importance of following one's dreams.
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <h3 className="text-xl font-semibold">Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-bold">Author</p>
                                    <p>Paulo Coelho</p>
                                </div>
                                <div>
                                    <p className="font-bold">Genre</p>
                                    <p>{book.categories.map((category) => (category.name))}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Publication Date</p>
                                    <p>April 25, 1988</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <h3 className="text-xl font-semibold">Price</h3>
                            <p className="text-2xl font-bold">${book.price}</p>
                        </div>
                        <Button className="w-full transition-colors duration-300 hover:bg-black/70">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}