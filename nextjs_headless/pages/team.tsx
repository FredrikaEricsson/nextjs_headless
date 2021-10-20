import { gql } from "@apollo/client";
import { NextPage } from "next";
import React from "react";
import { client } from "../lib/apolloClient";
import TeamList from "../components/teamList";

interface ITeamData {
  id: string;
  title: string;
  bodyText: string;
  image: {
    sourceUrl: string;
  };
}

interface ITeamProps {
  teamData: ITeamData[];
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
        }
      }
    }
  }
`;

const TeamPage: NextPage<ITeamProps> = ({ teamData }) => {
  return (
    <>
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
    },
  };
}

export default TeamPage;
