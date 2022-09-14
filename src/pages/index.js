import { useState } from 'react';
import Head from 'next/head';

import ProfileCard from '../components/ProfileCard/ProfileCard';
import RecruitMsg from '../components/RecruitMsg/RecruitMsg';
import ButtonCta from '../components/ButtonCta/ButtonCta';
import UserList from '../components/UserList/UserList';
import ProfileModal from '../components/ProfileModal/ProfileModal';

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
  const [modalState, setModalState] = useState({
    isActive: false,
    id: 0,
  });

  function userClickHandler(event) {
    setModalState(prev => {
      return {
        isActive: true,
        id: event.target.closest('li').id,
      };
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>인재풀 등록</title>
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>Logo</h1>
      </header>
      <main className={styles['main-container']}>
        <section className={styles['page-first']}>
          <p className={styles.desc}>
            인턴, 이제는 <span>지원</span>하지 말고
            <br />
            <em>제안</em> 받으세요
          </p>
          <ButtonCta isWhiteBtn={true} style={{ marginTop: '310px' }} />
        </section>
        <section className={styles['page-second']}>
          <p className={styles.desc}>
            이미 만들어놓은 이력서와
            <br />
            원하는 회사 기준만 입력하면
            <br />
            <em>인턴 제안</em>이 찾아와요!
          </p>
          <div className={styles['profile-card-container']}>
            <ProfileCard
              userInfo={sampleProfiles[0]}
              isShadow={true}
              style={{ marginTop: '35px' }}
            />
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
        <section className={styles['page-third']}>
          <p className={styles.desc}>
            이미 등록한 분들의
            <br />
            프로필도 확인해보세요!
          </p>
          <UserList
            userInfo={sampleProfiles}
            onUserClick={userClickHandler}
            style={{ marginTop: '115px' }}
          />
          <ButtonCta style={{ marginTop: '130px' }} />
        </section>
      </main>
      <footer></footer>
      {modalState.isActive && (
        <ProfileModal
          userInfo={sampleProfiles[modalState.id]}
          setModalState={setModalState}
        />
      )}
    </div>
  );
}
