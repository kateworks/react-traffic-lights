import { NavLink } from 'react-router-dom';
import styles from './NLink.module.css';

function NLink({ to, end, children }) {
  const activeClass = `${styles.link} ${styles.link_active}`;
  const getClass = (active) => (active ? activeClass : styles.link);

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
