import Image from 'next/image';
import TagBadge from './TagBadge';

type ProjectCardProps = {
  project: any;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.description}
      target='_blank'
      rel='noopener noreferrer'
      className='relative project-card rounded-lg min-h-48 sm:min-h-60 md:min-h-96 max-h-[500px] grow'
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}${project.thumbnail.url}`}
        alt={project.title}
        height={project.thumbnail.height}
        width={project.thumbnail.width}
        className='absolute top-0 left-0 h-full object-cover rounded-lg'
      />
      <div className='absolute bottom-2 left-4 pointer-events-none filter blur-xl text-background'>
        <h3 className='pointer-events-none filter blur-xl'>{project.title}</h3>
        {project.tags.length && (
          <div className='flex gap-2 pt-2 pointer-events-none filter blur-xl'>
            {project.tags.map((tag: any) => (
              <TagBadge key={tag.id} tag={tag} className='pointer-events-none filter blur-xl' />
            ))}
          </div>
        )}
      </div>
      <div className='absolute bottom-2 left-4'>
        <h3>{project.title}</h3>
        {project.tags.length && (
          <div className='flex gap-2 pt-2'>
            {project.tags.map((tag: any) => (
              <TagBadge key={tag.id} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
