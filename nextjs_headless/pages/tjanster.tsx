import { gql } from "@apollo/client";
import React from "react";
import { client } from "../lib/apolloClient";
import Header from "../components/header";
import ServicesList from "../components/servicesList";
import styles from "../styles/Services.module.css";

interface IServicesData {
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

interface IServicesProps {
  servicesData: IServicesData[];
  heroData: IHeroData;
}

const GET_SERVICESPAGE_DATA = gql`
  query getServicesPageData {
    pagesTaxonomies(where: { name: "ServicesPage" }) {
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

const ServicesPage = ({ servicesData, heroData }: IServicesProps) => {
  return (
    <>
      <Header heroData={heroData}></Header>
      <div className={styles.pageWrapper}>
        <ServicesList servicesData={servicesData}></ServicesList>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_SERVICESPAGE_DATA,
  });

  return {
    props: {
      servicesData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.infoCards?.nodes ?? [],
      heroData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.smallHeroes.nodes[0] ??
        [],
    },
  };
}

export default ServicesPage;
