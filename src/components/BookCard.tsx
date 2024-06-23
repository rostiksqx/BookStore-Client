export default function BookCard() {
    return (
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
    );
}