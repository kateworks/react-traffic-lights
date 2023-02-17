import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NLink.module.css';

function NLink({ to, end, enabled, children }) {
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

NLink.propTypes = {
  to: PropTypes.string.isRequired,
  end: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  enabled: PropTypes.bool
}

NLink.defaultProps = {
  enabled: true,
};

export default NLink;
