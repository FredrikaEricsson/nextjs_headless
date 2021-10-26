import { gql } from "@apollo/client";
import React from "react";
import { client } from "../lib/apolloClient";
import Header from "../components/header";
import EducationList from "../components/educationList";

interface IEducationData {
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

interface IEducationProps {
  educationData: IEducationData[];
  heroData: IHeroData;
}

const GET_EDUCATIONPAGE_DATA = gql`
  query getEducationPageData {
    pagesTaxonomies(where: { name: "EduPage" }) {
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

const EducationPage = ({ educationData, heroData }: IEducationProps) => {
  return (
    <>
      <Header heroData={heroData}></Header>
      <EducationList educationData={educationData}></EducationList>
    </>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_EDUCATIONPAGE_DATA,
  });

  return {
    props: {
      educationData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.infoCards?.nodes ?? [],
      heroData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.heroes.nodes[0] ?? [],
    },
  };
}

export default EducationPage;
