import { Outlet } from 'react-router-dom';

import { MainNavigation, Footer } from '../../components';
import styles from './Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
