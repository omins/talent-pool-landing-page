import Head from 'next/head';
import Image from 'next/image';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import RecruitMsg from '../components/RecruitMsg/RecruitMsg';
import ButtonCta from '../components/ButtonCta/ButtonCta';
import UserList from '../components/UserList/UserList';

import styles from '../../styles/Home.module.css';

const sampleProfiles = [
  {
    id: 0,
    name: '오민석',
    school: '고려대학교',
    schoolYear: '4',
    major: '체육교육과 / 소프트웨어벤처',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum facilisis cursus. Sed vulputate est eu porttitor fringilla.',
    pfp: '/assets/images/sihyun.jpg',
    skills: ['IT', 'StartUp', 'SW개발', 'Front-end', 'Back-end'],
  },
  {
    id: 1,
    name: '제페토',
    school: '고려대학교',
    schoolYear: '3',
    major: ' 경영학과 / 소프트웨어벤처',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum facilisis cursus. Sed vulputate est eu porttitor fringilla.',
    pfp: '/assets/images/zepeto.jpeg',
    skills: ['StartUp', 'PM', 'PO'],
  },
  {
    id: 2,
    name: '미모지',
    school: '고려대학교',
    schoolYear: '4',
    major: '컴퓨터학과',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum facilisis cursus. Sed vulputate est eu porttitor fringilla.',
    pfp: '/assets/images/memoji.png',
    skills: ['IT', 'SW개발', 'AI', 'Data Science'],
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>인재풀 등록</title>
      </Head>
      <div className={styles['common-inner']}>
        <header></header>
        <main className={styles['main-container']}>
          <section className={styles['page-second']}>
            <div className={styles['profile-card-container']}>
              <ProfileCard userInfo={sampleProfiles[0]} isShadow={true} />
              <div
                className={styles['recruit-msg-container']}
                style={{ top: '171px', left: '85px' }}
              >
                <RecruitMsg zIndex={5000} />
              </div>
              <div
                className={styles['recruit-msg-container']}
                style={{ top: '337px', left: '-52px' }}
              >
                <RecruitMsg zIndex={-1} />
              </div>
            </div>
            <ButtonCta style={{ marginTop: '30px' }} />
          </section>
          <section>
            <UserList userInfo={sampleProfiles} />
          </section>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}
