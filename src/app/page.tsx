import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-white block text-center">Thanks for coming!</p>
      <Link href="/analytics" className="block text-white p-8 bg-indigo-950 ring-indigo-900 rounded">Analytics</Link>
    </main>
  );
}
