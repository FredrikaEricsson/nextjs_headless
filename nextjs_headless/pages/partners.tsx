import { gql } from "@apollo/client";
import React from "react";
import { client } from "../lib/apolloClient";
import Header from "../components/header";
import PartnersList from "../components/partnersList";
import styles from "../styles/Partners.module.css";

interface IPartnersData {
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

interface IPartnersProps {
  partnersData: IPartnersData[];
  heroData: IHeroData;
}

const GET_PARTNERSPAGE_DATA = gql`
  query getPartnersPageData {
    pagesTaxonomies(where: { name: "PartnersPage" }) {
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

const PartnersPage = ({ partnersData, heroData }: IPartnersProps) => {
  return (
    <>
      <Header heroData={heroData}></Header>
      <div className={styles.pageWrapper}>
        <PartnersList partnersData={partnersData}></PartnersList>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_PARTNERSPAGE_DATA,
  });

  return {
    props: {
      partnersData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.infoCards?.nodes ?? [],
      heroData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.smallHeroes.nodes[0] ??
        [],
    },
  };
}

export default PartnersPage;
