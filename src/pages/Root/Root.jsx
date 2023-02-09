import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../../components';
import styles from './Root.module.css';

function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
