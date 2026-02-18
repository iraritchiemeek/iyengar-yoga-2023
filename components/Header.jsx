import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="w-full container mx-auto py-8">
        <div className="text-xl font-bold px-3 leading-6">
          <Link href="/">Iyengar Yoga Centre<span><br/>of Wellington<br/>New Zealand</span></Link>
        </div>
      </nav>
    </header>
  );
}
