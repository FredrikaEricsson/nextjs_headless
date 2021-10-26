import Image from "next/image";
import Logo from "../public/Logo-light.png";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <div className={styles.menuWrapper}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src={Logo} width='160px' height='16px'></Image>
          </Link>
        </div>
        <ul className={styles.menuItems}>
          <Link href='/nyheter-och-press'>Nyheter</Link>
          <Link href='/tjanster'>Tjänster</Link>
          <Link href='/team'>Team</Link>
          <li>Case</li>
          <Link href='/utbildning'>Utbildningar</Link>
          <li>Karriär</li>
          <Link href='/partners'>Partners</Link>
          <li>Kontakt</li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
