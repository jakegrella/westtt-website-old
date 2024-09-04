'use client'
import { Tag } from "@/payload-types";
import Image from "next/image";
import { useState } from "react";

export function TagBadge({ tag, className = '' }: { tag: Tag, className?: string }) {
    return (
      <span className={`px-2 py-1 text-sm rounded border border-foreground ${className}`}>
        {tag.name}
      </span>
    )
  }

type CardProps = { title: string, subtitle: string, description: string[], type?: "primary" | "secondary" }

export function ServiceCard({ title, subtitle, description, type = "primary", className = "" }: CardProps & { className?: string }) {
    return (
      // tall:w-auto tall:shrink
      <div className={`w-11/12 h-full px-2 py-1 flex flex-col justify-between shrink-0 rounded-lg
      tall:md:w-1/3 tall:md:min-h-72
      ${type === "primary" ? "bg-card-blue-10" : "bg-gray-50 text-gray-800"}
      ${className}
      `}>
        <h3>{title}</h3>
        <div>
          <h4 className="pb-2">{subtitle}</h4>
          {description.length > 1
            ? <ul>{description.map(i => <li key={i}>— {i}</li>)}</ul>
            : <p>{description[0]}</p>
          }
        </div>
      </div>
    )
  }

export default function Services() {
    const [focusedService, setFocusedService] = useState<number | null>(0);

    const services = [
      {
        title: "Web Design",
        subtitle: "Crafting Visual Experiences",
        description: ["Your website's first impression matters. I design visually stunning, user-friendly interfaces that reflect your brand's identity. From color schemes to layouts, I ensure your site looks great on every device."]
      },
      {
        title: "Web Development",
        subtitle: "Building with Precision and Performance",
        description: ["Your website is hand-coded for excellence, focusing on mobile-first design, responsiveness, and speed. No website builders here—only custom-built sites tailored to your needs, ensuring a seamless user experience and fast load times."]
      },
      {
        title: "Branding",
        subtitle: "Defining Your Brand's Identity",
        description: ["Your brand's visual story starts here. Whether you need a fresh logo or a complete brand overhaul, I create designs that resonate with your audience and set you apart from the competition."]
      }
    ];

    const handleCircleClick = (index: number) => {
        setFocusedService(index);
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards[index]?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'end' });
    };

    return (
        <section className='flex flex-col w-full h-1/2'>
            <div className='flex justify-between items-center gap-4'>
                <h2 className="mt-4 md:mt-8">Services</h2>
                <div className='flex gap-2 tall:md:hidden'>
                    {services.map((service, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === focusedService ? 'bg-secondary' : 'bg-indigo-5'}`}
                            onClick={() => handleCircleClick(index)}
                            aria-label={`Focus on ${service.title}`}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full grow flex gap-2 md:gap-4 tall:md:flex-row overflow-x-hidden tall:md:overflow-x-auto'>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        {...service}
                        className={`service-card ${index === focusedService ? 'border-2 border-blue-500 tall:md:border-0' : ''}`}
                    />
                ))}
            </div>
        </section>
    )
}
