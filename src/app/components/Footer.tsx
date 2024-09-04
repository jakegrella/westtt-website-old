import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-between items-start mt-16 py-8 outline outline-[32px] outline-gray-50 bg-gray-50 text-gray-800">
            <Link href="/" className="flex gap-2">
                <Image src='/logo-secondary.svg' alt="Westtt logo" width={32} height={24}/>
                <h2 className="font-light text-xl">Westtt</h2>
            </Link>
            <div>
                <h3>Company</h3>
                <nav>
                    <ul className="">
                        <li><Link href="/work" className="block py-2">Work</Link></li>
                        <li><Link href="/about" className="block py-2">About</Link></li>
                        {/* <li><Link href="/blog" className="block py-2">Blog</Link></li> */}
                        <li><Link href="/contact" className="block py-2">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
