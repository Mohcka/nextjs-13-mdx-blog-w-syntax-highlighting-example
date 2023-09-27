import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-2xl">Hello!</h1>
      <p>
        You can check out my blog{" "}
        <Link href="/blogs">
          <span className="text-indigo-700">here!</span>
        </Link>
      </p>
    </main>
  );
}
