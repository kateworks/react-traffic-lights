import { Outlet } from 'react-router-dom';
import TrafficLightsProvider from '../../store/TrafficLightsProvider';
import { Header, Footer } from '../../components';
import styles from './Root.module.css';

function RootLayout() {
  return (
    <TrafficLightsProvider>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </TrafficLightsProvider>
  );
}

export default RootLayout;
