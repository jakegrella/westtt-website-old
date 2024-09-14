import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Project } from '@/payload-types';
import Button from './components/Button';
import HorizontalOverflowContainer from './components/HorizontalOverflowContainer';
import ProjectCard from './components/ProjectCard';
import ServiceCard from './components/ServiceCard';
import { LandingCanvas } from './components/LandingCanvas';

const payload = await getPayloadHMR({ config });

export default async function Home() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });

  const services = [
    {
      id: 0,
      title: 'Web Design',
      subtitle: 'Crafting Visual Experiences',
      description: [
        "Your website's first impression matters. I design visually stunning, user-friendly interfaces that reflect your brand's identity. From color schemes to layouts, I ensure your site looks great on every device.",
      ],
    },
    {
      id: 1,
      title: 'Web Development',
      subtitle: 'Building with Precision and Performance',
      description: [
        'Your website is hand-coded for excellence, focusing on mobile-first design, responsiveness, and speed. No website builders here—only custom-built sites tailored to your needs, ensuring a seamless user experience and fast load times.',
      ],
    },
    {
      id: 2,
      title: 'Branding',
      subtitle: "Defining Your Brand's Identity",
      description: [
        "Your brand's visual story starts here. Whether you need a fresh logo or a complete brand overhaul, I create designs that resonate with your audience and set you apart from the competition.",
      ],
    },
  ];

  return (
    <main className='flex flex-col items-center gap-4'>
      <div className='absolute top-0 left-0 -z-10 w-screen h-dvh bg-gradient-to-b from-indigo-3 to-indigo-1' />

      <div className='absolute top-10 left-10 -z-[5]'>
        <LandingCanvas />
      </div>

      <section className='w-full h-[calc(100dvh-92px)] md:h-[calc(100dvh-108px)] flex flex-col md:flex-col-reverse gap-2'>
        <div className='bg-transparent w-full h-full' />
        <div className='pt-2 w-full md:w-2/3'>
          <h1 className='md:pt-16'>
            Focus on your business,
            <br />
            we&apos;ll dive deep into the design.
          </h1>
          <Button className='mt-4 md:mt-8 flex w-full' icon='ArrowRight' internalLink='/contact'>
            Book a call
          </Button>
        </div>
      </section>

      <div className='w-full h-[200dvh] tall:h-dvh flex flex-col gap-4'>
        <HorizontalOverflowContainer
          title='Services'
          items={services.map((service: any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          groupItemIdentifier='service-card'
        />
        <HorizontalOverflowContainer
          title='Recent Work'
          items={projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          groupItemIdentifier='project-card'
        />
      </div>

      <section className='h-full'>
        <h2>Pricing</h2>
        <p>Choose between two simple options: pay monthly or all at once</p>
        <div className='flex flex-col gap-4 justify-center h-full mt-2 md:flex-row'>
          <ServiceCard
            service={{
              id: 3,
              title: 'Ongoing',
              subtitle: '$0 down, $99/mo, 6 month minimum contract',
              description: [
                'Unlimited edits',
                'Includes hosting',
                '24/7 support',
                'Lifetime updates',
              ],
            }}
            type='secondary'
          />
          <ServiceCard
            service={{
              id: 4,
              title: 'Upfront',
              subtitle: '$1,750 one time',
              description: ['$25/mo hosting', '$50/hr site edits'],
            }}
            type='secondary'
          />
        </div>
        <Button className='mt-4 md:mt-8 flex w-full' icon='ArrowRight' internalLink='/contact'>
          Book a call
        </Button>
      </section>
    </main>
  );
}
