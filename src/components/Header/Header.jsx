import { NLink } from '..';
import { navLinks } from '../../utils/const';
import styles from './Header.module.css';

function Header() {

  const navList = navLinks.map(({id, title, link, end}) => (
    <li key={id} className={styles.header__item}>
      <NLink to={link} end={end || false}>
        {title}        
      </NLink>
    </li>
  ));

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        Traffic lights
      </h1>
      <nav>
        <ul className={styles.header__list}>
          {navList}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
