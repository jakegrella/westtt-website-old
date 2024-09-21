type ServiceCardProps = {
  service: {
    id: number;
    title: string;
    subtitle: string;
    description: string[];
  };
  type?: 'primary' | 'secondary';
  className?: string;
};

const ServiceCard = ({ service, type = 'primary', className }: ServiceCardProps) => {
  return (
    <div
      className={`relative service-card min-h-64 w-11/12 h-tall:md:w-1/3 h-full shrink-0 px-2 py-1 flex flex-col justify-between rounded-lg
        h-tall:w-auto h-tall:shrink
        ${type === 'primary' ? 'bg-card-blue-10' : 'bg-gray-50 text-gray-800'}
        ${className || ''}
      `}
    >
      <h3>{service.title}</h3>
      <div>
        <h4 className='pb-2'>{service.subtitle}</h4>
        {service.description.length > 1 ? (
          <ul>
            {service.description.map((i) => (
              <li key={i}>— {i}</li>
            ))}
          </ul>
        ) : (
          <p>{service.description[0]}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
