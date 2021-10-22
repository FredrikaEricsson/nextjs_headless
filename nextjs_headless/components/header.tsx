import Menu from "./menu";
import styles from "../styles/Header.module.css";

interface IHeroData {
  title: string;
  heroImage: {
    sourceUrl: string;
  };
}

interface IHeroDataProps {
  heroData: IHeroData;
}

const Header = ({ heroData }: IHeroDataProps) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <Menu></Menu>
        <div className={styles.heroTitleWrapper}>
          <h1 className={styles.heroTitle}>{heroData.title}</h1>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src={heroData.heroImage.sourceUrl}
            alt=''
            className={styles.heroImage}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
