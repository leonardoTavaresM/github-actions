import Link from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Home page [alteração]</h1>
      <Link href="/sobre">ir para sobre</Link>
    </div>
  );
}
