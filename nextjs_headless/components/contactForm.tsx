import styles from "../styles/Contact.module.css";

const ContactForm = () => {
  return (
    <>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactFormTitleWrapper}>
          <span>Kontakta oss</span>
        </div>

        <form action='post'>
          <div className={styles.contactFormWrapper}>
            <div className={styles.contactInputWrapper}>
              <input type='text' placeholder='Namn' />
              <input type='text' placeholder='E-post' />
              <input type='text' placeholder='Telefon' />
            </div>
            <div className={styles.messageInputWrapper}>
              <textarea
                rows={5}
                placeholder='Ditt meddelande'
                className={styles.messageInputBox}
              />
              <div className={styles.checkboxWrapper}>
                <input type='checkbox' />
                <span>Jag godkänner Avantimes integritetspolicy</span>
              </div>
            </div>
          </div>
          <div className={styles.sendButtonWrapper}>
            <input type='button' value='Skicka' />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
