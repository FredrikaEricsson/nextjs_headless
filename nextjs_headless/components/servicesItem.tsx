import styles from "../styles/Services.module.css";

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
      <div className={styles.itemWrapper}>
        <div className={styles.imageTitleWrapper}>
          <div className={styles.imageWrapper}>
            <img src={servicesItem.image.sourceUrl} alt='' />
          </div>
          <h3 className={styles.itemTitleWrapper}>{servicesItem.title}</h3>
        </div>
        <span className={styles.itemBodyText}>
          {servicesItem.bodyText.replace(regex, "")}
        </span>
      </div>
    </>
  );
};

export default ServicesItem;
