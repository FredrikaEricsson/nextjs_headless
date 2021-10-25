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
      <h1>{partnersItem.title}</h1>
      <span>{partnersItem.bodyText.replace(regex, "")}</span>

      <img src={partnersItem.image.sourceUrl} alt='' />
    </>
  );
};

export default PartnersItem;
