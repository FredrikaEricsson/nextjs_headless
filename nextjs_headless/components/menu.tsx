import Image from "next/image";
import Logo from "../public/Logo-light.png";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles.menuWrapper}>
        <div className={styles.logo}>
          <Image src={Logo} width='160px' height='23px'></Image>
        </div>
        <ul className={styles.menuItems}>
          <li>Nyheter</li>
          <li>Tjänster</li>
          <li>Team</li>
          <li>Case</li>
          <li>Utbildningar</li>
          <li>Karriär</li>
          <li>Partners</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
