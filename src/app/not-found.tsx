import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Not found</h1>
            <Link href="/">Back to home page</Link>
        </>
    );
}