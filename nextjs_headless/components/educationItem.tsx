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
      <h1>{educationItem.title}</h1>
      <span>{educationItem.bodyText.replace(regex, "")}</span>

      <img src={educationItem.image.sourceUrl} alt='' />
    </>
  );
};

export default EducationItem;
