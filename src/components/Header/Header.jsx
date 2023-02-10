import { useContext } from 'react';
import TrafficLightsContext from '../../store/TrafficLightsContext';
import { NLink, ToggleSwitch } from '..';
import { navLinks } from '../../utils/const';
import styles from './Header.module.css';

function Header() {
  const ctx = useContext(TrafficLightsContext);

  const handleChange = () => {
    ctx.toggle();
  };

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
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          {navList}
        </ul>
        <ToggleSwitch 
          name="toggle-button" 
          isChecked={ctx.isOn}
          onChange={handleChange}
        />
      </nav>
    </header>
  );
}

export default Header;
