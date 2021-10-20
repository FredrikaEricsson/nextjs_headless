import { gql } from "@apollo/client";
import { NextPage } from "next";
import { client } from "../lib/apolloClient";

interface IHero {
  hero: any;
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

const Hero: NextPage = ({ hero }: any) => {
  console.log(hero);
  return <></>;
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_HERO_TITLE,
  });

  return {
    props: {
      hero: response?.data ?? [],
    },
  };
}

export default Hero;
