import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useTrafficLights } from '../../store/TrafficLightsContext';
import { Header, Footer } from '../../components';
import styles from './Root.module.css';

function RootLayout() {
  const lights = useTrafficLights();
  const navigate = useNavigate();

  useEffect(() => {
    if (lights.isOn) {
      navigate(lights.color);
    } 
  }, [lights.color]);

  useEffect(() => {    
    if (lights.isOn) {
      lights.start();
    } else {
      navigate('/');
      lights.stop();
    }
  }, [lights.isOn]);

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
