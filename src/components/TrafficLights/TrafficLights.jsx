import { useEffect, useState } from 'react';
import styles from './TrafficLights.module.css';
import { LIGHTS, DURATIONS } from '../../utils/const';

const { red, yellow, green } = LIGHTS;

const colorClasses = {
  red: styles.lights__color_red,
  yellow: styles.lights__color_yellow,
  green: styles.lights__color_green,
};

function TrafficColor({ color = '', isActive = false }) {
  const [ duration, wink ] = DURATIONS[color] || [ 0, 0 ];
  const [ count, setCount ] = useState(duration);

  useEffect(() => {
    let timerId;

    if (count > 0) {
      timerId = setTimeout(() => {
        setCount((x) => (x - 1));
      }, 1000);  
    }

    if (count === 0) {
      
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    }

  }, [count]);

  const colorClass = colorClasses[color] || '';
  const blinkClass = (count > 0) && (count <= wink) && (isActive) ? 'blink' : '';

  if (!isActive) {
    return <div className={styles.lights__color} />
  }

  return (
    <div className={`${styles.lights__color} ${colorClass} ${blinkClass}`}>
      <time className={styles.lights__time}>{count}</time>
    </div>
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
