import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center mb-8">
            <Link href="/" className="flex gap-2">
                <Image src='/logo-white.svg' alt="Westtt" width={24} height={24} />
                <h2 className="font-light text-xl">Westtt</h2>
            </Link>
            <div>
                <h4>Company</h4>
                <nav>
                    <ul className="">
                        <li><Link href="/work">Work</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
