import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/placeholder.svg"
              width="550"
              height="700"
              alt="Hero Book"
              className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover Your Next Great Read
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our curated selection of the best books across all genres. Find your next literary adventure
                today.
              </p>
              <Link
                href="#"
                className="bg-black text-white inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors duration-300 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Books</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our hand-picked selection of the best new and popular books.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-12">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="300"
                  alt="Book Cover"
                  className="aspect-[2/3] overflow-hidden rounded-lg object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">The Great Gatsby</h3>
                  <p className="text-muted-foreground">F. Scott Fitzgerald</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="300"
                  alt="Book Cover"
                  className="aspect-[2/3] overflow-hidden rounded-lg object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">To Kill a Mockingbird</h3>
                  <p className="text-muted-foreground">Harper Lee</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="300"
                  alt="Book Cover"
                  className="aspect-[2/3] overflow-hidden rounded-lg object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">1984</h3>
                  <p className="text-muted-foreground">George Orwell</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="300"
                  alt="Book Cover"
                  className="aspect-[2/3] overflow-hidden rounded-lg object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Pride and Prejudice</h3>
                  <p className="text-muted-foreground">Jane Austen</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="300"
                  alt="Book Cover"
                  className="aspect-[2/3] overflow-hidden rounded-lg object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">The Catcher in the Rye</h3>
                  <p className="text-muted-foreground">J.D. Salinger</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-primary p-3">
                  <FigmaIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Fiction</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-secondary p-3">
                  <InfoIcon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Nonfiction</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-accent p-3">
                  <PuzzleIcon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Mystery</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-success p-3">
                  <HeartCrackIcon className="h-6 w-6 text-success-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Romance</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-warning p-3">
                  <FigmaIcon className="h-6 w-6 text-warning-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Fantasy</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-error p-3">
                  <SpaceIcon className="h-6 w-6 text-error-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Sci-Fi</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Bookstore. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function FigmaIcon(props) {
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}


function HeartCrackIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="m12 13-1-1 2-2-3-3 2-2" />
    </svg>
  )
}


function InfoIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function PuzzleIcon(props) {
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
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function SpaceIcon(props) {
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
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
}