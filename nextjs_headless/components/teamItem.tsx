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
      <h1>{teamItem.title}</h1>
      <p>{teamItem.bodyText.replace(regex, "")}</p>
      <img src={teamItem.image.sourceUrl} alt='' width='100px' />
    </>
  );
};

export default TeamItem;
