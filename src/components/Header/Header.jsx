import React from 'react';
import PropTypes from 'prop-types';
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
      <nav className={styles.header__nav} aria-label='Traffic lights controls'>
        <ul className={styles.header__list} aria-label='Change color manually'>
          {navList}
        </ul>
        <ToggleSwitch 
          name='toggle-button' 
          label='Auto mode:'
          isChecked={lights.isOn}
          onChange={onToggle}
        />
      </nav>
    </header>
  );
}

Header.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Header;
