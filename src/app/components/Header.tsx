import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center mb-8">
            <Link href="/"><Image src='/logo-white.svg' alt="Westtt" width={24} height={24} /></Link>
            <nav>
                <ul className="flex gap-4">
                    {/* <li><Link href="/work">Work</Link></li> */}
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
