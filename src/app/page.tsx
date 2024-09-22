import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Project } from '@/payload-types';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import ServiceCard from './components/ServiceCard';
// import { LandingCanvas } from './components/LandingCanvas';
import Footer from './components/Footer';
import Header from './components/Header';
import { asl } from './styles/fonts';

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
      {/* <LandingCanvas /> */}

      <section className='relative h-xs:h-screen w-full p-4 bg-gradient-to-b from-blue-9 to-black flex flex-col'>
        <Header />
        <div className='flex flex-col md:flex-col-reverse gap-2'>
          <div className='bg-transparent w-full h-full' />
          <div className='pt-2 w-full md:w-3/4'>
            <h1 className='md:pt-16'>
              Focus on your business,
              <br />
              we&apos;ll dive deep into the design.
            </h1>
            <Button className='mt-4 md:mt-8 flex w-full' icon='ArrowRight' internalLink='/contact'>
              Book a call
            </Button>
          </div>
        </div>
      </section>

      <section className='w-full p-4 flex flex-col gap-2'>
        <h2>Recent Work</h2>
        <div className='h-full flex flex-col md:flex-row gap-4'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className='w-full p-4'>
        <h2>Services</h2>
        <div className='h-full flex flex-col md:flex-row gap-4'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <div className='w-full flex flex-col p-4'>
        <h2>We really care</h2>
        <p className={`${asl.className} text-4xl md:text-6xl text-slate-11 leading-none py-8 md:py-16`}>Our mission at Westtt is to elevate brands through great design.</p>
        <p></p>
        <Button className='mt-4 md:mt-8 flex w-full' icon='ArrowRight' internalLink='/contact'>
          Book a call
        </Button>
      </div>

      <Footer />
    </main>
  );
}
