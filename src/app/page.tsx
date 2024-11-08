"use client";

import { lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useBooks } from "@/context/book-provider";
import BookSkeleton from "@/components/BookSkeleton";
import CategorySkeleton from "@/components/CategorySkeleton";

const BookCard = lazy(() => import("@/components/BookCard"));
const ExploreByCategory = lazy(() => import("@/components/ExploreByCategory"));

export default function Home() {
  const { books, categories } = useBooks();

  return (
    <>
      <section className="w-full py-8 md:py-12 lg:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="/bookstore.webp"
            width="400"
            height="500"
            alt="Hero Book"
            className="mx-auto rounded-xl object-cover object-center sm:w-full"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover Your Next Great Read
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our curated selection of the best books across all genres.
              Find your next literary adventure today.
            </p>
            <Link
              href="/books"
              className="bg-black text-white inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors duration-300 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 lg:py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Books
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our hand-picked selection of the best new and popular
                books.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-12">
            <Suspense fallback={<BookSkeleton />}>
              {books.slice(0, 5).map((book) => (
                <BookCard key={book.id} data={book} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
      <Suspense fallback={<CategorySkeleton />}>
        <ExploreByCategory categories={categories} />
      </Suspense>
    </>
  );
}
