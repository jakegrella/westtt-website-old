'use client'

import Image from "next/image";
import { useState } from "react";
import { TagBadge } from "./ServicesSection";

export function Projects({ projects }: { projects: any }) {
    const [focusedProject, setFocusedProject] = useState<number | null>(0);

    const handleCircleClick = (index: number) => {
        setFocusedProject(index);
        const projectCards = document.querySelectorAll('.project-card');
        projectCards[index]?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'end' });
    };

    return (
        <section className='flex flex-col w-full h-1/2'>
          <div className='flex justify-between items-center gap-4'>
                <h2 className="mt-4 md:mt-8">Recent Work</h2>
                <div className='flex gap-2 tall:hidden'>
                    {projects.map((project: any, index: number) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === focusedProject ? 'bg-secondary' : 'bg-indigo-5'}`}
                            onClick={() => handleCircleClick(index)}
                            aria-label={`Focus on ${project.title}`}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full grow flex gap-2 md:gap-4 tall:flex-col tall:md:flex-row overflow-x-hidden tall:overflow-x-auto'>
            {projects.map((project: any) => (
              <div
                key={project.id}
                className="relative project-card w-11/12 tall:md:w-1/3 h-full shrink-0 rounded-lg
                    tall:w-auto tall:shrink tall:md:min-h-72"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}${project.thumbnail.url}`}
                  alt={project.title}
                  height={project.thumbnail.height}
                  width={project.thumbnail.width}
                  className='absolute top-0 left-0 h-full object-cover rounded-lg -z-[1]'
                />
                <div className="absolute bottom-2 left-4 pointer-events-none filter blur-xl text-background">
                    <h3 className="pointer-events-none filter blur-xl">{project.title}</h3>
                    {project.tags.length &&
                        <div className='flex gap-2 pt-2 pointer-events-none filter blur-xl'>
                            {project.tags.map((tag: any) => (
                                <TagBadge key={tag.id} tag={tag} className="pointer-events-none filter blur-xl" />
                            ))}
                        </div>
                    }
                </div>
                <div className="absolute bottom-2 left-4">
                    <h3>{project.title}</h3>
                    {project.tags.length &&
                        <div className='flex gap-2 pt-2'>
                            {project.tags.map((tag: any) => (
                                <TagBadge key={tag.id} tag={tag} />
                            ))}
                        </div>
                    }
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}
