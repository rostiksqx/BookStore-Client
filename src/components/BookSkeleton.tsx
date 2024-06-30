import { Skeleton } from "./ui/skeleton";

export default function BookSkeleton() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[380px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
            </div>
        </div>
    );
}