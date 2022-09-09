import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>인재풀 등록</title>
      </Head>
      <main>
        <h2 className={styles.title}>Hello world</h2>
      </main>

      <footer></footer>
    </div>
  );
}
