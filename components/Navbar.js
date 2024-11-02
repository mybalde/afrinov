import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          M.I.E Afrinnov
        </Link>
        <div className="flex space-x-4">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
