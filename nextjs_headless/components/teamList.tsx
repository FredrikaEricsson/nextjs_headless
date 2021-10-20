import TeamItem from "./teamItem";

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
    <ul>
      {teamData.map((teamItem) => (
        <li key={teamItem.id}>
          <TeamItem teamItem={teamItem}></TeamItem>
        </li>
      ))}
    </ul>
  );
};

export default TeamList;
