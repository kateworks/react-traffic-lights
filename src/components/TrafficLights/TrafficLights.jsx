import { useTrafficLights } from '../../store/TrafficLightsContext';
import { LIGHTS } from '../../utils/const';
import styles from './TrafficLights.module.css';

const { red, yellow, green } = LIGHTS;

const colorClasses = {
  red: styles.lights__color_red,
  yellow: styles.lights__color_yellow,
  green: styles.lights__color_green,
};

function TrafficColor({ color = '', isActive = false }) {
  const lights = useTrafficLights();
  const colorClass = colorClasses[color] || '';
  const blinkClass = (lights.counter > 0) && (lights.counter <= lights.wink) && (isActive) ? 'blink' : '';

  if (!isActive) {
    return <div className={styles.lights__color} />
  }

  const ariaTime = lights.counter ? `, ${lights.counter} seconds left` : '';
  const ariaLabel = `${lights.color} color${ariaTime}`;

  return (
    <div className={`${styles.lights__color} ${colorClass} ${blinkClass}`} aria-label={ariaLabel}>
      <time className={styles.lights__time} aria-hidden>{lights.counter || ''}</time>
    </div>
  );
}

function TrafficLights({ activeColor = '' }) {
  return (
    <div className={styles.lights} aria-label='Traffic lights'>
      <TrafficColor color={red} isActive={activeColor === red} />
      <TrafficColor color={yellow} isActive={activeColor === yellow} />
      <TrafficColor color={green} isActive={activeColor === green}/>
    </div>
  );
}

export default TrafficLights;
