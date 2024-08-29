import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Project } from "@/payload-types";
import Image from "next/image";
import Link from 'next/link';
import { Card, ProjectCard } from './components/Card';

const payload = await getPayloadHMR({ config })

type CardProps = {
  imageSource: string, imageAlt: string, title: string, subtitle: string, description: string[], type?: "primary" | "secondary"
}

function ServicesCard({ imageSource, imageAlt, title, subtitle, description, type = "primary" }: CardProps) {
  return (
    <Card type={type}>
      <Image src={imageSource} alt={imageAlt} />
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
      <div className='relative w-full'>
        <div className='rounded-3xl bg-blue-500 w-full h-[calc(100vh-132px)]'/>
        <div
          className='bg-background
          rounded-tr-2xl md:rounded-tr-3xl
          max-w-xs
          absolute p-2 left-0
          -bottom-4 md:max-w-lg md:bottom-0
          before:content-[""] before:absolute before:left-0 before:-top-10 before:w-10 before:h-10
          before:rounded-[50%] before:transparent before:shadow-[-18px_18px_0_rgba(0,0,0,1)]
          after:content-[""] after:absolute after:-right-10 after:bottom-0 after:w-10 after:h-10
          after:rounded-[50%] after:transparent after:shadow-[-18px_18px_0_rgba(0,0,0,1)]'
          >
          <h2 className='mt-1'>Westtt is a Los Angeles-based web design, development and branding studio.</h2>
          <p className="big">We want to work with great people, companies, and brands.</p>
        </div>
      </div>

      <section className='max-w-4xl mt-16 mb-8 h-full'>
        <h2>Services</h2>
        <div className='flex flex-col gap-4 md:flex-row'>
          <ServicesCard
            imageSource=""
            imageAlt=""
            title="Web Design"
            subtitle="Crafting Visual Experiences"
            description={["Your website's first impression matters. I design visually stunning, user-friendly interfaces that reflect your brand's identity. From color schemes to layouts, I ensure your site looks great on every device."]}
          />
          <ServicesCard
            imageSource=""
            imageAlt=""
            title="Web Development"
            subtitle="Building with Precision and Performance"
            description={["Your website is hand-coded for excellence, focusing on mobile-first design, responsiveness, and speed. No website builders here—only custom-built sites tailored to your needs, ensuring a seamless user experience and fast load times."]}
          />
          <ServicesCard
            imageSource=""
            imageAlt=""
            title="Branding"
            subtitle="Defining Your Brand's Identity"
            description={["Your brand's visual story starts here. Whether you need a fresh logo or a complete brand overhaul, I create designs that resonate with your audience and set you apart from the competition."]}
          /></div>
      </section>

      <section className='max-w-4xl mb-8'>
        <h2>Recent Work</h2>
        <div className='flex gap-4 w-full overflow-x-scroll'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className='max-w-4xl mb-8 h-full'>
        <h2>Pricing</h2>
        <p className="big">Choose between two simple options: pay monthly or all at once</p>
        <div className='flex flex-col gap-4 justify-center h-full mt-2 py-8 md:flex-row'>
          <div className='w-full md:w-[35%]'>
            <ServicesCard
              imageSource=""
              imageAlt=""
              title="Ongoing"
              subtitle="$0 down, $99/mo, 6 month minimum contract"
              description={["Unlimited edits", "Includes hosting", "24/7 support", "Lifetime updates"]}
              type="secondary"
            />
          </div>
          <div className='w-full md:w-[35%]'>
            <ServicesCard
              imageSource=""
              imageAlt=""
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
