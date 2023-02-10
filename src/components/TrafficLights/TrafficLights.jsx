import styles from './TrafficLights.module.css';
import { LIGHTS } from '../../utils/const';

const { red, yellow, green } = LIGHTS;

const colorClasses = {
  red: styles.lights__color_red,
  yellow: styles.lights__color_yellow,
  green: styles.lights__color_green,
};

function TrafficColor({ color = '', isActive = false }) {
  if (!isActive) {
    return <div className={styles.lights__color} />
  }

  const colorClass = colorClasses[color] || '';
  return (
    <div className={`${styles.lights__color} ${colorClass}`}></div>
  );
}

function TrafficLights({ activeColor = '' }) {
  return (
    <div className={styles.lights}>
      <TrafficColor color={red} isActive={activeColor === red} />
      <TrafficColor color={yellow} isActive={activeColor === yellow} />
      <TrafficColor color={green} isActive={activeColor === green}/>
    </div>
  );
}

export default TrafficLights;
