import { NavLink } from 'react-router-dom';
import styles from './NLink.module.css';

function NLink({ to, end, enabled = true, children }) {
  const disabledClass = enabled ? '' : styles.link_disabled;
  const activeClass = `${styles.link} ${styles.link_active} ${disabledClass}`;

  const getClass = (active) => (active ? activeClass : `${styles.link} ${disabledClass}`);

  return (
    <NavLink 
      to={to} 
      className={({isActive}) => getClass(isActive)} end={end}
    >
      {children}
    </NavLink>
  );
}

export default NLink;
