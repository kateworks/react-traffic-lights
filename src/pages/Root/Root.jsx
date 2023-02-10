import { Outlet } from 'react-router-dom';
import TrafficLightsProvider from '../../store/TrafficLightsProvider';
import { Header, Footer } from '../../components';
import styles from './Root.module.css';

function RootLayout() {
  return (
    <TrafficLightsProvider>
      <div className={styles.app}>
        <Header />
        <main className={styles.app__content}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </TrafficLightsProvider>
  );
}

export default RootLayout;
