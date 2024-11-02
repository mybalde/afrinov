import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">M.I.E Afrinnov</h1>
        <nav>
          <Link href="/" className="px-4">Accueil</Link>
          <Link href="/services" className="px-4">Services</Link>
          <Link href="/contact" className="px-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
