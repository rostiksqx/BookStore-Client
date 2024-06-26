import { useBooks } from "@/context/book-provider";

export default function ExploreByCategory() {
    const { categories } = useBooks();

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore by Category</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Browse our extensive collection of books across a wide range of genres.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 py-12">
                    {categories.slice(0, 5).map((category) => (
                        <div key={category.id} className="flex flex-col items-center space-y-2 cursor-pointer hover:-translate-y-4 transition-transform duration-300">
                            <h3 className="text-xl font-semibold">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}