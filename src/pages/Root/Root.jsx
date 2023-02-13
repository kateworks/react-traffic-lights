import { Outlet, useNavigate } from 'react-router-dom';
import { useTrafficLights } from '../../store/TrafficLightsContext';
import { Header, Footer } from '../../components';
import styles from './Root.module.css';
import { useEffect } from 'react';

function RootLayout() {
  const lights = useTrafficLights();
  const navigate = useNavigate();

  useEffect(() => {
    if (lights.isOn) {
      navigate('red');
    } else {
      navigate('/');
    }
  }, [lights.isOn, navigate]);

  const handleToggle = () => {
    lights.toggle();
  };

  return (
    <div className={styles.app}>
      <Header onToggle={handleToggle} />
      <main className={styles.app__content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
