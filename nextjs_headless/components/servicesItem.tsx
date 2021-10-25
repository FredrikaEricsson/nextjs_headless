interface IServicesData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IServicesDataProps {
  servicesItem: IServicesData;
}

const ServicesItem = ({ servicesItem }: IServicesDataProps) => {
  const regex = /(<([^>]+)>)/gi;
  return (
    <>
      <h1>{servicesItem.title}</h1>
      <span>{servicesItem.bodyText.replace(regex, "")}</span>

      <img src={servicesItem.image.sourceUrl} alt='' />
    </>
  );
};

export default ServicesItem;
