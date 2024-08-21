import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Project, Tag } from '@/payload-types';
import Image from 'next/image';

const payload = await getPayloadHMR({ config })

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

export default async function Work() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });

  return (
    <main>
      <h1>Work</h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
