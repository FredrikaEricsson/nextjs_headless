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
          <Link href='/nyheter-och-press'>
            <div>Nyheter</div>
          </Link>
          <Link href='/tjanster'>
            <div>Tjänster</div>
          </Link>
          <Link href='/team'>
            <div>Team</div>
          </Link>
          <li>Case</li>
          <li>Utbildningar</li>
          <li>Karriär</li>
          <Link href='/partners'>
            <div>Partners</div>
          </Link>
          <li>Kontakt</li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
