import Link from "next/link";
import React from "react";
import { Category } from "@/types";

export default function ExploreByCategory({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="w-full py-8 md:py-12 lg:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore by Category
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our extensive collection of books across a wide range of
              genres.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
          {categories.slice(0, 8).map((category) => (
            <Link
              href={`/books?category=${category.name.replace(/ /g, "-")}`}
              className="flex flex-col items-center justify-center gap-2 rounded-lg py-6 text-center hover:bg-gray-200 transition-colors ease-in-out duration-300"
              prefetch={false}
            >
              <BookIcon className="h-8 w-8" />
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}
