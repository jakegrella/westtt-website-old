import { Tag } from "@/payload-types"
import Image from "next/image"

export function Card({ children, type = "primary" }: { children: React.ReactNode, type?: "primary" | "secondary" }) {
    return <div className={`flex flex-col h-full p-4 rounded-2xl ${type === 'primary' ? "bg-gray-800" : 'bg-gray-50 text-gray-800'}`}>{children}</div>
}

function TagBadge({ tag }: { tag: Tag }) {
    return (
        <span className='px-2 py-1 rounded-full border border-gray-200'>
            {tag.name}
        </span>
    )
}

export function ProjectCard({ project }: { project: any }) {
    return (
        // <div className='flex flex-col justify-between gap-2 shrink-0 h-[80vh] tall:h-[50vh] max-h-[40rem] max-w-[45%]'>
        <div className='flex flex-col justify-between gap-2 shrink-0 max-h-[40rem] max-w-[45%]'>
            <Image
                src={`${process.env.NEXT_PUBLIC_URL}${project.thumbnail.url}`}
                alt={project.title}
                height={project.thumbnail.height}
                width={project.thumbnail.width}
                className='object-cover grow'
            />
            <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.tags.length &&
                    <div className='flex gap-2 my-4'>
                        {project.tags.map((tag: any) => (
                            <TagBadge key={tag.id} tag={tag} />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}