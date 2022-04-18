import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/movie">Movie</Link>
        <Link href="/music">Music</Link>
      </nav>
    </>
  );
}
