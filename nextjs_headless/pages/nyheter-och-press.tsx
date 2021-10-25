import { gql } from "@apollo/client";
import { NextPage } from "next";
import { client } from "../lib/apolloClient";
import React from "react";
import Header from "../components/header";

interface IHeroData {
  heroData: {
    title: string;
    heroImage: {
      sourceUrl: string;
    };
  };
}

const GET_NEWSPAGE_DATA = gql`
  query getNewsPageData {
    pagesTaxonomies(where: { name: "NewsPage" }) {
      edges {
        node {
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

const NewsPage = (heroData: IHeroData) => {
  console.log(heroData);
  return (
    <>
      <Header heroData={heroData.heroData}></Header>
      <iframe
        id='mnd-iframe'
        width='100%'
        frameBorder='0'
        scrolling='no'
        allow='autoplay; fullscreen'
        aria-label='Nyhetsrum: Avantime'
        src='//avantime.mynewsdesk.com/'
        height='2286'
      ></iframe>
    </>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_NEWSPAGE_DATA,
  });

  return {
    props: {
      heroData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.heroes?.nodes[0] ?? [],
    },
  };
}

export default NewsPage;
