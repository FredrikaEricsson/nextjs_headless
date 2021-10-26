import EducationItem from "./educationItem";

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
    <ul>
      {educationData
        .slice()
        .reverse()
        .map((educationItem) => (
          <li key={educationItem.id}>
            <EducationItem educationItem={educationItem}></EducationItem>
          </li>
        ))}
    </ul>
  );
};

export default EducationList;
