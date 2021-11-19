import PartnersItem from "./partnersItem";
import styles from "../styles/Partners.module.css";

interface IPartnersData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IPartnersProps {
  partnersData: IPartnersData[];
}

const PartnersList = ({ partnersData }: IPartnersProps) => {
  return (
    <>
      <div className={styles.pageHeadingWrapper}>
        <h2>Avantime Partners</h2>
      </div>
      <div className={styles.pageDescriptionWrapper}>
        <span>
          Vi samarbetar med flera branschledande företag för att kunna förse
          våra kunder med så bra digitala lösningar som möjligt och säkerställa
          att de maximerar nyttan av våra tjänster.
        </span>
      </div>

      <ul className={styles.listWrapper}>
        {partnersData
          .slice()
          .reverse()
          .map((partnersItem) => (
            <li key={partnersItem.id}>
              <PartnersItem partnersItem={partnersItem}></PartnersItem>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PartnersList;
