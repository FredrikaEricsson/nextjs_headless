import styles from "../styles/Education.module.css";
interface IEducationData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IEducationDataProps {
  educationItem: IEducationData;
}

const EducationItem = ({ educationItem }: IEducationDataProps) => {
  const regex = /(<([^>]+)>)/gi;
  return (
    <>
      <div className={styles.eduItemImageHeadingWrapper}>
        <div className={styles.eduItemImageWrapper}>
          <img
            src={educationItem.image.sourceUrl}
            alt=''
            className={styles.eduItemImage}
          />
        </div>
        <div className={styles.eduItemTitleWrapper}>
          <h1>{educationItem.title}</h1>
        </div>
      </div>
      <div className={styles.eduItemBodyText}>
        <span>{educationItem.bodyText.replace(regex, "")}</span>
      </div>
    </>
  );
};

export default EducationItem;
