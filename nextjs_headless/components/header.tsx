import Menu from "./menu";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

interface IHeroData {
  title: string;
  heroImage: {
    sourceUrl: string;
  };
  heading?: string;
  subtitle?: string;
}

interface IAdress {
  city: string;
  adress: string;
  zip: string;
}

interface IHeroDataProps {
  heroData: IHeroData;
  adresses?: IAdress[];
}

const Header = ({ heroData }: IHeroDataProps) => {
  const router = useRouter();
  let route = router.route;

  const [smallHero, setSmallHero] = useState(true);
  const [eduHero, setEduHero] = useState(false);
  const [contactHero, setContactHero] = useState(false);
  useEffect(() => {
    if (route === "/utbildning") {
      setEduHero(true);
      setSmallHero(false);
    }
    if (route === "/kontakt") {
      setContactHero(true);
      setSmallHero(false);
    }
  }, []);
  const regex = /(<([^>]+)>)/gi;

  return (
    <>
      {smallHero ? (
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
      ) : null}
      {eduHero ? (
        <div className={styles.educationHeaderWrapper}>
          <Menu></Menu>
          <div className={styles.educationHeroTitleWrapper}>
            <h6 className={styles.educationHeroHeading}>{heroData.heading}</h6>

            <h1 className={styles.educationHeroTitle}>{heroData.title}</h1>

            <h4 className={styles.educationHeroSubTitle}>
              {heroData?.subtitle?.replace(regex, "")}
            </h4>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                className={styles.arrowIcon}
              />
            </div>
          </div>

          <div className={styles.educationHeroImageWrapper}>
            <img
              src={heroData.heroImage.sourceUrl}
              alt=''
              className={styles.educationHeroImage}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
