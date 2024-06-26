import Image from "next/image";
import { Book } from "@/types";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export default function BookCard({ data }: { data: Book }) {
    return (
        <Card>
            <Link href="#" prefetch={false}>
                <Image
                    src={`data:image/jpeg;base64,${data.image}`}
                    width={300}
                    height={400}
                    className="rounded-t-lg object-cover w-full aspect-[3/4]"
                    alt={data.title}
                />
            </Link>
            <CardContent className="p-4">
                <Link href="#" prefetch={false}>
                    <h3 className="text-lg font-semibold">{data.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm">{data.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-semibold">${data.price}</p>
                    <Button variant="outline" size="sm">
                        Add to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}