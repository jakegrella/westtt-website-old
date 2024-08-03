import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Project } from '@/payload-types';
import Image from 'next/image';

const payload = await getPayloadHMR({ config })

function ProjectCard({project}: {project: Project}) {
  return (
    <div>
      <Image src={project.thumbnail.url} alt={project.title} height={200} width={200} className='aspect-square ' />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* tags */}
    </div>
  )
}

export default async function Work() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });
  console.log('projects', projects[0].thumbnail)

  return (
    <main className="">
      <h1>Work</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
}
