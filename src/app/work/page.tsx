import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Project } from '@/payload-types';

const payload = await getPayloadHMR({ config })

export default async function Work() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });

  return (
    <main>
      <h1>Work</h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {/* {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))} */}
      </div>
    </main>
  );
}
