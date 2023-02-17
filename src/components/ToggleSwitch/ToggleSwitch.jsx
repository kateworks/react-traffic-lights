import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.css';

function ToggleSwitch({ name, label, isChecked, onChange }) {
  const toggleState = isChecked || false;
  const labelId = `labelFor-${name}`;

  return (  
    <div className={styles.toggle}>
      <label id={labelId} className={styles.toggle__label}>
        {label}
      </label>
      <label className={styles.toggle__switch}>
        <input
          type='checkbox'
          name={name}
          aria-labelledby={labelId}
          aria-checked={toggleState}
          tabIndex={0}
          className={styles.toggle__input}
          checked={toggleState}
          onChange={onChange}
        />
        <span className={styles.toggle__slider}/>
      </label>
    </div>  
  );
}

ToggleSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ToggleSwitch;
