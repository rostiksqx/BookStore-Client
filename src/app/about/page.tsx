import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="bg-muted py-12 md:py-24">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Book Store</h2>
            <p className="text-muted-foreground mb-6">
              Book Store is a beloved independent bookstore that has been
              serving the community for over 20 years. Founded by a passionate
              team of book lovers, our mission is to curate a diverse selection
              of literature, foster a love of reading, and provide a cozy and
              welcoming space for our customers.
            </p>
          </div>
          <Image
            src="/bookstore.webp"
            width={400}
            height={700}
            alt="Bookworm's Haven"
            className="mx-auto rounded-lg"
          />
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Discover Our Curated Selection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="hover:-translate-y-4 transition-transform ease-in-out duration-300 p-6 rounded-lg shadow-lg">
              <BookIcon className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Curated Book Selection</h3>
              <p className="text-muted-foreground">
                Our knowledgeable staff carefully selects a diverse range of
                books, from the latest bestsellers to hidden gems, to cater to
                every literary taste.
              </p>
            </div>
            <div className="hover:-translate-y-4 transition-transform ease-in-out duration-300 bg-card p-6 rounded-lg shadow-lg">
              <UserIcon className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Knowledgeable Staff</h3>
              <p className="text-muted-foreground">
                Our passionate team of book enthusiasts is always ready to
                provide personalized recommendations and engage in
                thought-provoking discussions.
              </p>
            </div>
            <div className="hover:-translate-y-4 transition-transform ease-in-out duration-300 bg-card p-6 rounded-lg shadow-lg">
              <SofaIcon className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cozy Reading Nooks</h3>
              <p className="text-muted-foreground">
                Discover the perfect spot to curl up with a good book in our
                inviting and comfortable reading areas, complete with plush
                seating and natural lighting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-muted-foreground mb-6">
                1107 Pearl St, Boulder USA 80302
              </p>
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
                Email: info@bookstore.com
              </p>
            </div>
            <div>
              <Image
                src="/address.png"
                width="600"
                height="400"
                alt="Book Store Storefront"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
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

function SofaIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}
