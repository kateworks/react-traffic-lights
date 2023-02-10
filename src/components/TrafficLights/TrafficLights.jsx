import styles from './TrafficLights.module.css';

function TrafficColor({ color = '', isActive = false }) {
  if (!isActive) {
    return <div className={styles.lights__color} />
  }

  let colorClass;

  switch (color) {
    case 'red':
      colorClass = styles.lights__color_red;
      break;
    case 'yellow':
      colorClass = styles.lights__color_yellow;
      break;
    case 'green':
      colorClass = styles.lights__color_green;
      break;
    default:
      colorClass = '';
  }
  
  return (
    <div className={`${styles.lights__color} ${colorClass}`}></div>
  );
}

function TrafficLights({ activeColor = '' }) {
  return (
    <div className={styles.lights}>
      <TrafficColor color='red' isActive={activeColor === 'red'}/>
      <TrafficColor color='yellow' isActive={activeColor === 'yellow'}/>
      <TrafficColor color='green' isActive={activeColor === 'green'}/>
    </div>
  );
}

export default TrafficLights;
