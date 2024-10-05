import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <span>Links:</span>
      <ul>
        <li className="mb-2 mt-2 text-blue-500">
          <Link href="/auth">* Login</Link>
        </li>
        <li className="mb-2 mt-2 text-blue-500">
          <Link href="/profile">* Profile</Link>
        </li>
        <li className="mb-2 mt-2 text-blue-500">
          <Link href="/error">* Error</Link>
        </li>
      </ul>
    </>
  );
}
