import { gql } from "@apollo/client";

import { client } from "../lib/apolloClient";

interface IHeroData {
  heroData: {
    title: string;
  };
}
const GET_HERO_TITLE = gql`
  query getStartPageHeroTitle {
    pagesTaxonomies(where: { name: "StartPage" }) {
      nodes {
        heroes {
          nodes {
            title
          }
        }
      }
    }
  }
`;

const Hero = (hero: IHeroData) => {
  return (
    <>
      <h1>{hero.heroData.title}</h1>
    </>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_HERO_TITLE,
  });

  return {
    props: {
      heroData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.heroes.nodes[0] ?? [],
    },
  };
}

export default Hero;
