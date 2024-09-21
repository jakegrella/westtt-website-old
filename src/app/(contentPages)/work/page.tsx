import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Project } from '@/payload-types';
import ProjectCard from '../../components/ProjectCard';

const payload = await getPayloadHMR({ config });

export default async function Work() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });

  return (
    <main className='h-full flex flex-col gap-2'>
      <h1>Work</h1>
      <div className='grow flex flex-col md:flex-row gap-4'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
