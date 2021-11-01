import ContactItem from "./contactItem";
import styles from "../styles/Contact.module.css";

interface IContactCardData {
  id: string;
  name: string;
  title: string;
  email: string;
  contactImage: {
    sourceUrl: string;
  };
}
interface IContactListProps {
  contactCardData: IContactCardData[];
}

const ContactList = ({ contactCardData }: IContactListProps) => {
  return (
    <>
      <ul className={styles.contactListWrapper}>
        {contactCardData
          .slice()
          .reverse()
          .map((contactItem) => (
            <li className={styles.contactCardWrapper}>
              <ContactItem contactItem={contactItem}></ContactItem>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
