"use client";

import BookCard from "@/components/BookCard";
import { useBooks } from "../../context/book-provider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Category } from "@/types";


export default function Books() {
    const { books, categories } = useBooks();
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);


    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategories(prevSelectedCategories =>
            prevSelectedCategories.includes(categoryId)
                ? prevSelectedCategories.filter(id => id !== categoryId)
                : [...prevSelectedCategories, categoryId]
        );
        alert("Category changed");
    };


    const filteredBooks = books.filter((book) => {
        const searchMatch = book.title.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = selectedCategories.length === 0 || book.categories.some(category => selectedCategories.includes(category.id));
        return searchMatch && categoryMatch;
    });

    return (
        <div className="container mx-auto py-8 px-4 md:px-6">
            <div className="grid md:grid-cols-[240px_1fr] gap-8">
                <div className="bg-background p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="category">
                            <AccordionTrigger className="text-base">Category</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    {categories.map((category) => (
                                        <Label key={category.id} className="flex items-center gap-2 font-normal">
                                            <Checkbox id={`category-${category.id}`}
                                                checked={selectedCategories.includes(category.id)}
                                                onChange={() => handleCategoryChange(category.id)} /> {category.name}
                                        </Label>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="price">
                            <AccordionTrigger className="text-base">Price</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid gap-2">
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="price-under-10" /> Under $10
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="price-10-20" /> $10 - $20
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="price-20-30" /> $20 - $30
                                    </Label>
                                    <Label className="flex items-center gap-2 font-normal">
                                        <Checkbox id="price-over-30" /> Over $30
                                    </Label>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <div className="flex items-center mb-6">
                        <h1 className="text-2xl font-bold">All Books</h1>
                        <div className="ml-auto relative">
                            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                                <svg
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
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                            <Input
                                type="search"
                                placeholder="Search books..."
                                className="pl-8 rounded-md bg-background w-full max-w-[300px]"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredBooks.map((book) => (
                            <BookCard key={book.id} data={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};