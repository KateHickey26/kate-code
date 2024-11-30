import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">kate code</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-400">Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-blue-400">Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-400">Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;