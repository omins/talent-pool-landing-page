import Head from 'next/head';
import Image from 'next/image';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import RecruitMsg from '../components/RecruitMsg/RecruitMsg';

import styles from '../../styles/Home.module.css';

const sampleProfiles = [
  {
    name: '오민석',
    school: '고려대학교',
    schoolYear: '4',
    major: '체육교육과 / 소프트웨어벤처',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum facilisis cursus. Sed vulputate est eu porttitor fringilla.',
    pfp: '/assets/images/sihyun.jpg',
    skills: ['IT', 'StartUp', 'SW개발', 'Front-end', 'Back-end'],
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>인재풀 등록</title>
      </Head>
      <header></header>
      <main>
        <section>
          <ProfileCard userInfo={sampleProfiles[0]} isShadow={true} />
          <RecruitMsg />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
