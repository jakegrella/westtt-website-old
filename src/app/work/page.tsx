import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Project } from '@/payload-types';
import HorizontalOverflowContainer from '../components/HorizontalOverflowContainer';
import ProjectCard from '../components/ProjectCard';

const payload = await getPayloadHMR({ config });

export default async function Work() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });

  return (
    <main className='w-full h-dvh flex flex-col'>
      <h1>Work</h1>
      <HorizontalOverflowContainer
        items={projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        groupItemIdentifier='project-card'
      />
    </main>
  );
}
