import TeamItem from "./teamItem";
import styles from "../styles/Team.module.css";

interface ITeamData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface ITeamProps {
  teamData: ITeamData[];
}

const TeamList = ({ teamData }: ITeamProps) => {
  return (
    <div className={styles.listWrapper}>
      <ul>
        {teamData
          .slice()
          .reverse()
          .map((teamItem) => (
            <li key={teamItem.id} className={styles.itemWrapper}>
              <TeamItem teamItem={teamItem}></TeamItem>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TeamList;
