import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import React from "react";
import Header from "../components/header";
import ContactList from "../components/contactList";
import styles from "../styles/Contact.module.css";
import ContactForm from "../components/contactForm";

interface IContactCardData {
  id: string;
  name: string;
  title: string;
  email: string;
  contactImage: {
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
  secondSubtitle?: string;
  thirdSubtitle?: string;
}
interface IAdress {
  city: string;
  adress: string;
  zip: string;
}

interface IContactPageProps {
  contactCardData: IContactCardData[];
  heroData: IHeroData;
  adressData: IAdress[];
}
const GET_CONTACTPAGE_DATA = gql`
  query getContactPageData {
    pagesTaxonomies(where: { name: "ContactPage" }) {
      edges {
        node {
          bigHeroes {
            nodes {
              title
              heroImage {
                sourceUrl
              }
              heading
              subtitle
              secondSubtitle
              thirdSubtitle
            }
          }
        }
      }
    }
    contactCards {
      nodes {
        id
        name
        title
        email
        contactImage {
          sourceUrl
        }
      }
    }
    adresses {
      nodes {
        city
        adress
        zip
      }
    }
  }
`;

const ContactPage = ({
  adressData,
  heroData,
  contactCardData,
}: IContactPageProps) => {
  return (
    <>
      <Header heroData={heroData} adressItems={adressData}></Header>
      <div className={styles.contactPageWrapper}>
        <ContactList contactCardData={contactCardData}></ContactList>
        <ContactForm></ContactForm>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await client.query({
    query: GET_CONTACTPAGE_DATA,
  });

  return {
    props: {
      contactCardData: response?.data?.contactCards?.nodes ?? [],
      heroData:
        response?.data?.pagesTaxonomies?.edges[0]?.node?.bigHeroes.nodes[0] ??
        [],
      adressData: response?.data?.adresses?.nodes ?? [],
    },
  };
}

export default ContactPage;
