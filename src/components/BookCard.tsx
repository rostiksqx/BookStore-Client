import Image from "next/image";
import { Book } from "@/types";

export default function BookCard({ data }: { data: Book }) {
    return (
        <div className="flex flex-col items-center space-y-2">
            <Image
                src={`data:image/jpeg;base64,${data.image}`}
                width="200"
                height="300"
                alt={data.title}
                className="aspect-[2/3] overflow-hidden rounded-lg object-cover"
            />
            <div className="text-center">
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p className="text-muted-foreground">{data.description}</p>
            </div>
        </div>
    );
}