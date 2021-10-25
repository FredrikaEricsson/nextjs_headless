import ServicesItem from "./servicesItem";

interface IServicesData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IServicesProps {
  servicesData: IServicesData[];
}

const ServicesList = ({ servicesData }: IServicesProps) => {
  return (
    <ul>
      {servicesData
        .slice()
        .reverse()
        .map((servicesItem) => (
          <li key={servicesItem.id}>
            <ServicesItem servicesItem={servicesItem}></ServicesItem>
          </li>
        ))}
    </ul>
  );
};

export default ServicesList;
