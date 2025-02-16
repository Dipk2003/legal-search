import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">Legal Research AI</h1>
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
