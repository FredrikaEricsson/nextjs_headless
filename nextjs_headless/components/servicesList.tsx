import ServicesItem from "./servicesItem";
import styles from "../styles/Services.module.css";

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
    <>
      <h2 className={styles.pageHeadingWrapper}>Mot en ny framtid</h2>
      <span className={styles.pageDescriptionWrapper}>
        Tillsammans med dig gör vi ditt företag redo för framtiden. Läs mer om
        vårt erbjudande inom fyra tjänsteområden.
      </span>

      <ul className={styles.listWrapper}>
        {servicesData
          .slice()
          .reverse()
          .map((servicesItem) => (
            <li key={servicesItem.id}>
              <ServicesItem servicesItem={servicesItem}></ServicesItem>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ServicesList;
