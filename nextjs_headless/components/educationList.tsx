import EducationItem from "./educationItem";
import styles from "../styles/Education.module.css";

interface IEducationData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IEducationProps {
  educationData: IEducationData[];
}

const EducationList = ({ educationData }: IEducationProps) => {
  return (
    <div className={styles.eduListContainer}>
      <div className={styles.eduPageText}>
        <h1>Vi utbildar dig</h1>
        <h5>
          Ibland kanske man inte riktigt vet vart man ska börja när man vill
          lära sig något helt nytt och främmande eller när man vill utveckla
          sina kunskaper? Oroa dig inte, vi hjälper dig!
        </h5>
        <span>
          Våra utbildningar är till för dig som både är nybörjare eller har en
          gedigen erfarenhet, då vi alla är medvetna om att digitala trender
          konstant förändras med tiden. Behöver du utbilda dig inom webbanalys,
          sociala medier, lära dig om algoritmer eller kanske veta hur du kan
          använda Google Analytics för att optimera både din hemsida, sociala
          kanaler och företaget i sin helhet? Då har du kommit rätt! Nedan
          hittar du våra utbildningar som vi även kan anpassa efter dina behov.
        </span>
      </div>

      <ul className={styles.eduList}>
        {educationData
          .slice()
          .reverse()
          .map((educationItem) => (
            <li key={educationItem.id} className={styles.eduItem}>
              <EducationItem educationItem={educationItem}></EducationItem>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EducationList;
