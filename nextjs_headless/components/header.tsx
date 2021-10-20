import Menu from "./menu";

interface IHeroData {
  title: string;
  heroImage: {
    sourceUrl: string;
  };
}

interface IHeroDataProps {
  heroData: IHeroData;
}

const Header = ({ heroData }: IHeroDataProps) => {
  return (
    <>
      <Menu></Menu>
      <h1>{heroData.title}</h1>
      <img src={heroData.heroImage.sourceUrl} alt='' />
    </>
  );
};

export default Header;
