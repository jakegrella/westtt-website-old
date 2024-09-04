import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Project } from "@/payload-types";
import Button from './components/Button';
import Services, { ServiceCard } from './components/ServicesSection';
import { Projects } from './components/WorkSection';

const payload = await getPayloadHMR({ config })

export default async function Home() {
  const { docs: projects }: { docs: Project[] } = await payload.find({
    collection: 'projects',
  });

  return (
    <main className='flex flex-col items-center'>
      <div className='absolute top-0 left-0 -z-10 w-screen h-dvh bg-gradient-to-b from-indigo-3 to-indigo-1' />

      <section className='w-full h-[calc(100dvh-92px)] md:h-[calc(100dvh-108px)] flex flex-col md:flex-col-reverse gap-2'>
        <div className='bg-transparent w-full h-full' />
        <div className='pt-2 w-full md:w-2/3'>
          <h1 className='md:pt-16'>Focus on your business,<br />we&apos;ll dive deep into the design.</h1>
          <Button className='mt-4 md:mt-8 flex w-full' icon="ArrowRight" internalLink="/contact">Book a call</Button>
        </div>
      </section>

      <div className='w-full h-[200dvh] tall:h-dvh flex flex-col'>
        <Services />
        <Projects projects={projects} />
      </div>

      <section className='max-w-4xl h-full'>
        <h2>Pricing</h2>
        <p>Choose between two simple options: pay monthly or all at once</p>
        <div className='flex flex-col gap-4 justify-center h-full mt-2 md:flex-row'>
            <ServiceCard
              title="Ongoing"
              subtitle="$0 down, $99/mo, 6 month minimum contract"
              description={["Unlimited edits", "Includes hosting", "24/7 support", "Lifetime updates"]}
              type="secondary"
            />
            <ServiceCard
              title="Upfront"
              subtitle="$1,750 one time"
              description={["$25/mo hosting", "$50/hr site edits"]}
              type="secondary"
            />
        </div>
        <Button className='mt-4 md:mt-8 flex w-full' icon="ArrowRight" internalLink="/contact">Book a call</Button>
      </section>
    </main>
  );
}
