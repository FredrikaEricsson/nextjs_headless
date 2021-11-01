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
interface IContactItemProps {
  contactItem: IContactCardData;
}

const ContactItem = ({ contactItem }: IContactItemProps) => {
  return (
    <>
      <div className={styles.contactCardImageWrapper}>
        <img
          src={contactItem.contactImage.sourceUrl}
          alt=''
          className={styles.contactCardImage}
        />
      </div>
      <div className={styles.contactCardTextWrapper}>
        <span className={styles.contactCardName}>{contactItem.name}</span>
        <span className={styles.contactCardTitle}>{contactItem.title}</span>
        <span className={styles.contactCardEmail}>{contactItem.email}</span>
      </div>
    </>
  );
};

export default ContactItem;
