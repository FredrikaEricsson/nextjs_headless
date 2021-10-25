import PartnersItem from "./partnersItem";

interface IPartnersData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IPartnersProps {
  partnersData: IPartnersData[];
}

const PartnersList = ({ partnersData }: IPartnersProps) => {
  return (
    <ul>
      {partnersData
        .slice()
        .reverse()
        .map((partnersItem) => (
          <li key={partnersItem.id}>
            <PartnersItem partnersItem={partnersItem}></PartnersItem>
          </li>
        ))}
    </ul>
  );
};

export default PartnersList;
