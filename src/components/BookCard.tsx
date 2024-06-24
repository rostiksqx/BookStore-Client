import Image from "next/image";

type Repo = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export const getServerSideProps = (async () => {
    const res = await fetch("http://127.0.0.1:8080/api/Books");
    const data: Repo[] = await res.json();

    return { props: { data } }
});

export default function BookCard({ data }: { data: Repo[] }) {
    return (
        <div className="flex flex-col items-center space-y-2">
            <Image
                src={`data:image/jpeg;base64,${data}`}
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
    );
}