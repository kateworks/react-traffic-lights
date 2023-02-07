import styles from './TrafficLights.module.css';

function TrafficLights() {
  return (
    <div className={styles.lights}>
      <div className={styles.lights__color}></div>
      <div className={styles.lights__color}></div>
      <div className={styles.lights__color}></div>
    </div>
  );
}

export default TrafficLights;
