import { useTrafficLights } from '../../store/TrafficLightsContext';
import { NLink, ToggleSwitch } from '..';
import { navLinks } from '../../utils/const';
import styles from './Header.module.css';

function Header({ onToggle }) {
  const lights = useTrafficLights();

  const navList = navLinks.map(({id, title, link, end}) => (
    <li key={id} className={styles.header__item}>
      <NLink to={link} end={end || false} enabled={!lights.isOn}>
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
          isChecked={lights.isOn}
          onChange={onToggle}
        />
      </nav>
    </header>
  );
}

export default Header;
