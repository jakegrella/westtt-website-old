import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Project } from "@/payload-types";
import Link from 'next/link';
import { Card, ProjectCard } from './components/Card';
import Button from './components/Button';

const payload = await getPayloadHMR({ config })

type CardProps = {
  title: string, subtitle: string, description: string[], type?: "primary" | "secondary"
}

function ServicesCard({ title, subtitle, description, type = "primary" }: CardProps) {
  return (
    <Card type={type}>
      <h3>{title}</h3>
      <h4 className='pb-2'>{subtitle}</h4>
      {description.length > 1
        ? <ul>{description.map(i => <li key={i}>— {i}</li>)}</ul>
        : <p>{description[0]}</p>
      }
    </Card>
  )
}

export default async function Home() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });

  return (
    <main className='flex flex-col items-center'>
      <div className='absolute top-0 left-0 -z-10 w-dvw h-dvh bg-gradient-to-b from-indigo-3 to-indigo-1'/>

      <section className='w-full h-[calc(100dvh-92px)] md:h-[calc(100dvh-108px)] flex flex-col md:flex-col-reverse gap-2'>
        <div className='bg-blue-900 w-full h-full' />
        <div className='pt-2 w-full md:w-2/3'>
          <h1 className='md:pt-16'>Focus on your business,<br/>we&apos;ll dive deep into the design.</h1>
          <Button className='mt-4 md:mt-8 flex w-full' icon="ArrowRight" internalLink="/contact">Book a call</Button>
        </div>
      </section>

      <section className='w-full mt-4 md:mt-8 h-dvh flex flex-col justify-start items-start border border-red-500'>
        <h2>Services</h2>
        <div className='flex flex-col gap-4 md:flex-row'>
          <ServicesCard
            title="Web Design"
            subtitle="Crafting Visual Experiences"
            description={["Your website's first impression matters. I design visually stunning, user-friendly interfaces that reflect your brand's identity. From color schemes to layouts, I ensure your site looks great on every device."]}
          />
          <ServicesCard
            title="Web Development"
            subtitle="Building with Precision and Performance"
            description={["Your website is hand-coded for excellence, focusing on mobile-first design, responsiveness, and speed. No website builders here—only custom-built sites tailored to your needs, ensuring a seamless user experience and fast load times."]}
          />
          <ServicesCard
            title="Branding"
            subtitle="Defining Your Brand's Identity"
            description={["Your brand's visual story starts here. Whether you need a fresh logo or a complete brand overhaul, I create designs that resonate with your audience and set you apart from the competition."]}
          /></div>

        <h2 className='mt-8'>Recent Work</h2>
        <div className='w-full flex gap-4 overflow-x-scroll'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className='max-w-4xl mb-8 h-full'>
        <h2>Pricing</h2>
        <p>Choose between two simple options: pay monthly or all at once</p>
        <div className='flex flex-col gap-4 justify-center h-full mt-2 py-8 md:flex-row'>
          <div className='w-full md:w-[35%]'>
            <ServicesCard
              title="Ongoing"
              subtitle="$0 down, $99/mo, 6 month minimum contract"
              description={["Unlimited edits", "Includes hosting", "24/7 support", "Lifetime updates"]}
              type="secondary"
            />
          </div>
          <div className='w-full md:w-[35%]'>
            <ServicesCard
              title="Upfront"
              subtitle="$1,750 one time"
              description={["$25/mo hosting", "$50/hr site edits"]}
              type="secondary"
            />
          </div>
        </div>
      </section>

      <section className='max-w-4xl flex justify-center items-center mb-8'>
        <Link href='/contact' className='bg-slate-300 text-gray-800 p-4 rounded-xl text-lg'>
          Get in touch
        </Link>
      </section>
    </main>
  );
}
