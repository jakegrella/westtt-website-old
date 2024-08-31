'use client'

import Link from "next/link"
import { useMemo } from "react"

type ButtonProps = {
    children: React.ReactNode,
    internalLink?: string,
    externalLink?: { href: string },
    className?: string
    icon?: string
}

export default function Button({ children, internalLink, externalLink, className = '', icon }: ButtonProps) {
    const IconComponent = useMemo(() => {
        if (!icon) return null
        try {
            // dynamically import the icon based on iconName prop
            const { [icon]: Icon } = require('@phosphor-icons/react');
            return Icon;
        } catch (error) {
            console.warn(`Icon "${icon}" not found in icon library.`);
            return null;
        }
    }, [icon])

    const commonClasses = "bg-secondary text-light rounded px-4 py-2 text-base md:text-2xl tracking-tight"

    const buttonContent = icon ?
        <div className="w-full flex justify-between items-center">
            {children}
            {IconComponent && <IconComponent size={24} />}
        </div>
        : children

    if (internalLink) return <Link href={internalLink} className={`${className} ${commonClasses}`}>{buttonContent}</Link>
    else if (externalLink) return <a href={externalLink.href} className={`${className} ${commonClasses}`}>{buttonContent}</a>
    else return <button className={`${className} ${commonClasses}`} onClick={() => { }}>{buttonContent}</button>
}
