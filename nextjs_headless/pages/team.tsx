import { gql } from "@apollo/client";
import { NextPage } from "next";
import React from "react";
import { client } from "../lib/apolloClient";
import TeamList from "../components/teamList";
import Header from "../components/header";

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
          heroes {
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

const TeamPage: NextPage<ITeamProps> = ({ teamData, heroData }) => {
  return (
    <>
      <Header heroData={heroData}></Header>
      <TeamList teamData={teamData}></TeamList>
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
        response?.data?.pagesTaxonomies?.edges[0]?.node?.heroes.nodes[0] ?? [],
    },
  };
}

export default TeamPage;
