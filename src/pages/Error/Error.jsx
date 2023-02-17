import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import useFocus from '../../utils/useFocus';
import styles from './Error.module.css';

function ErrorPage() {
  const error = useRouteError();
  const linkRef = useFocus();

  return (
    <main className={styles.error}>
      <h1 className={styles.error__title}>
        {error.status || ''}
      </h1>
      <p className={styles.error__subtitle}>
        {error.statusText || ''}
      </p>
      <p className={styles.error__data}>
        {error.data || ''}
      </p>
      <Link  className={styles.error__link} to='/' ref={linkRef}>
        Back to home
      </Link>
    </main>
  );
}

export default ErrorPage;
