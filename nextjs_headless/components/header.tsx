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
  secondSubtitle?: string;
  thirdSubtitle?: string;
}

interface IAdress {
  city: string;
  adress: string;
  zip: string;
}

interface IHeroDataProps {
  heroData?: IHeroData;
  adressItems?: IAdress[];
}

const Header = ({ heroData, adressItems }: IHeroDataProps) => {
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

  let adressItem = adressItems
    ?.slice()
    .reverse()
    .map((adressObject) => {
      return (
        <div className={styles.adressItem}>
          <span>{adressObject.city}</span>
          <span>{adressObject.adress}</span>
          <span>{adressObject.zip}</span>
        </div>
      );
    });

  return (
    <>
      {smallHero ? (
        <div className={styles.headerWrapper}>
          <Menu></Menu>
          <div className={styles.heroTitleWrapper}>
            <h1 className={styles.heroTitle}>{heroData?.title}</h1>
          </div>
          <div className={styles.heroImageWrapper}>
            <img
              src={heroData?.heroImage.sourceUrl}
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
            <h6 className={styles.educationHeroHeading}>{heroData?.heading}</h6>

            <h1 className={styles.educationHeroTitle}>{heroData?.title}</h1>

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
              src={heroData?.heroImage.sourceUrl}
              alt=''
              className={styles.educationHeroImage}
            />
          </div>
        </div>
      ) : null}

      {contactHero ? (
        <>
          <div className={styles.contactHeaderWrapper}>
            <Menu></Menu>
            <div className={styles.contactHeroTextWrapper}>
              <h6 className={styles.contactHeroHeading}>{heroData?.heading}</h6>

              <h1 className={styles.contactHeroTitle}>{heroData?.title}</h1>
              <div className={styles.contactHeroSubTitles}>
                <span>{heroData?.subtitle?.replace(regex, "")}</span>
                <span>{heroData?.secondSubtitle?.replace(regex, "")}</span>
                <span>{heroData?.thirdSubtitle?.replace(regex, "")}</span>
              </div>
            </div>

            <div className={styles.contactHeroImageWrapper}>
              <img
                src={heroData?.heroImage.sourceUrl}
                alt=''
                className={styles.contactHeroImage}
              />
            </div>
          </div>
          <div className={styles.heroAdressWrapper}>{adressItem}</div>
        </>
      ) : null}
    </>
  );
};

export default Header;
