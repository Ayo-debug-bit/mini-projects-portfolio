import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sage-900 text-sage py-4 px-8 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-sage-200">About</Link>
          <Link href="/projects" className="hover:text-sage-200">Projects</Link>
          <Link href="/contact" className="hover:text-sage-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}