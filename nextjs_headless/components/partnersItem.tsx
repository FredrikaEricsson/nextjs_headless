import styles from "../styles/Partners.module.css";

interface IPartnersData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IPartnersDataProps {
  partnersItem: IPartnersData;
}

const PartnersItem = ({ partnersItem }: IPartnersDataProps) => {
  const regex = /(<([^>]+)>)/gi;
  return (
    <>
      <div className={styles.itemWrapper}>
        <div className={styles.imageWrapper}>
          <img src={partnersItem.image.sourceUrl} alt='' />
        </div>
        <h1>{partnersItem.title}</h1>
        <span>{partnersItem.bodyText.replace(regex, "")}</span>
      </div>
    </>
  );
};

export default PartnersItem;
