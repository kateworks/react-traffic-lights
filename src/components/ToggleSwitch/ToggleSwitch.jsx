import styles from './ToggleSwitch.module.css';

function ToggleSwitch({ name, isChecked, onChange }) {
  const toggleState = isChecked || false;

  return (    
    <label className={styles.toggle}>
      <input
        type="checkbox"
        name={name}
        aria-label='Toggle switch'
        aria-checked={toggleState}
        tabIndex={0}
        className={styles.toggle__input}
        checked={toggleState}
        onChange={onChange}
      />

      <span className={styles.toggle__slider}/>
    </label>
  );
}

export default ToggleSwitch;
