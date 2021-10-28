import { gql } from "@apollo/client";
import React from "react";
import { client } from "../lib/apolloClient";
import TeamList from "../components/teamList";
import Header from "../components/header";
import styles from "../styles/Team.module.css";

interface ITeamData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface IHeroData {
  title: string;
  heroImage: {
    sourceUrl: string;
  };
}

interface ITeamProps {
  teamData: ITeamData[];
  heroData: IHeroData;
}

const GET_TEAMPAGE_DATA = gql`
  query getTeamPageData {
    pagesTaxonomies(where: { name: "TeamPage" }) {
      edges {
        node {
          infoCards {
            nodes {
              id
              title
              bodyText
              image {
                sourceUrl
              }
            }
          }
          smallHeroes {
            nodes {
              title
              heroImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

const TeamPage = ({ teamData, heroData }: ITeamProps) => {
  return (
    <>
      <Header heroData={heroData}></Header>
      <div className={styles.pageWrapper}>
        <TeamList teamData={teamData}></TeamList>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_TEAMPAGE_DATA,
  });

  return {
    props: {
      teamData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.infoCards?.nodes ?? [],
      heroData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.smallHeroes.nodes[0] ??
        [],
    },
  };
}

export default TeamPage;
