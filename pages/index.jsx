import Meta from '../components/Meta';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Meta title="Home | Next Basics" />
      <h1 className={styles.heading}>
        A simple{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <span className={styles.next}>Next.js</span>
        </a>{' '}
        site
      </h1>
      <h3 className={styles.subheading}>
        which uses basic features of Next like
      </h3>
      <div className={styles.tagsContainer}>
        <div className={styles.tag}>
          <p>Static Site Generation</p>
        </div>
        <div className={styles.tag}>
          <p>CSS Modules</p>
        </div>
        <div className={styles.tag}>
          <p>Dynamic Routes</p>
        </div>
        <div className={styles.tag}>
          <p>Custom 404 Page</p>
        </div>
        <div className={styles.tag}>
          <p>Meta Data for Pages</p>
        </div>
        <div className={styles.tag}>
          <p>Next Image</p>
        </div>
      </div>
      <p className={styles.doc}>
        ...and more, click{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          here
        </a>{' '}
        to view official documentation{' '}
      </p>
    </div>
  );
}
