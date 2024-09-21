import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center mb-8'>
      <Link href='/' className='flex gap-2 hover:no-underline'>
        <Image src='/logo-secondary.svg' alt='Westtt logo' width={32} height={24} />
        <h2 className='font-light text-xl'>Westtt</h2>
      </Link>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link href='/work'>Work</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
