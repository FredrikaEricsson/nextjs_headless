import { gql } from "@apollo/client";
import React from "react";
import { client } from "../lib/apolloClient";
import Header from "../components/header";
import EducationList from "../components/educationList";
import styles from "../styles/Education.module.css";

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
  heading?: string;
  subtitle?: string;
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
          bigHeroes {
            nodes {
              title
              heroImage {
                sourceUrl
              }
              heading
              subtitle
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
      <div className={styles.eduPageWrapper}>
        <EducationList educationData={educationData}></EducationList>
      </div>
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
        response?.data?.pagesTaxonomies?.edges[0]?.node?.bigHeroes.nodes[0] ??
        [],
    },
  };
}

export default EducationPage;
