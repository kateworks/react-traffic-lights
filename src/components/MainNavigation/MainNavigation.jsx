import { NLink } from '..';
import styles from './MainNavigation.module.css';

function MainNavigation() {
  const navLinks = [
    { id: 1, title: <NLink to="/" end={true}>Home</NLink> },
    { id: 2, title: <NLink to="/red">Red</NLink> },
    { id: 3, title: <NLink to="/yellow">Yellow</NLink> },
    { id: 4, title: <NLink to="/green">Green</NLink> },
  ];

  const navList = navLinks.map(({id, title}) => (
    <li key={id} className={styles.header__item}>
      {title}
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

export default MainNavigation;
