import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Create you next Tale</h1>
      <Link href="/tale">Create a Tale</Link>
    </main>
  );
}
