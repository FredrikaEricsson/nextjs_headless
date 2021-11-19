import styles from "../styles/Team.module.css";

interface ITeamData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface ITeamDataProps {
  teamItem: ITeamData;
}

const TeamItem = ({ teamItem }: ITeamDataProps) => {
  const regex = /(<([^>]+)>)/gi;
  return (
    <>
      <div className={styles.textWrapper}>
        <h1>{teamItem.title}</h1>
        <span>{teamItem.bodyText.replace(regex, "")}</span>
      </div>
      <div className={styles.imageWrapper}>
        <img src={teamItem.image.sourceUrl} alt='' />
      </div>
    </>
  );
};

export default TeamItem;
