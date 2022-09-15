import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
    filters: ['IT', 'StartUp', 'SW개발', 'Front-end', 'Back-end'],
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
    filters: ['StartUp', 'PM', 'PO'],
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
    filters: ['IT', 'SW개발', 'AI', 'Data Science'],
  },
];

export default function Home() {
  const [innerHeight, setInnerHeght] = useState(0);
  const [modalState, setModalState] = useState({
    isActive: false,
    id: 0,
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      setInnerHeght(window.innerHeight);
    }
  }, []);

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
        <section
          className={styles['hero-section']}
          style={
            innerHeight > 0
              ? { height: `${innerHeight}px` }
              : { height: '100vh' }
          }
        >
          <p className={styles.desc}>
            인턴, 이제는 <span>지원</span>하지 말고
            <br />
            <em>제안</em> 받으세요
          </p>
          <ButtonCta isWhiteBtn={true} style={{ marginTop: '310px' }}>
            채용 제안 받기
          </ButtonCta>
          <div className={styles['ico-arrow-down']}>
            <Image
              src='/assets/icons/ico-arrow-down.svg'
              width={30}
              height={20}
              alt='장식용 이미지'
            />
          </div>
        </section>
        <section className={styles['profile-card-section']}>
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
              <RecruitMsg
                companyInfo='핀테크 스타트업'
                companyName='T사'
                companyColor='#0064FF'
                position='개발자 인턴'
                employee='오민석'
                style={{ zIndex: 5000 }}
              />
            </div>
            <div
              className={styles['recruit-msg-container']}
              style={{ top: '337px', left: '-52px' }}
            >
              <RecruitMsg
                companyInfo='중고거래 스타트업'
                companyName='D사'
                companyColor='#FF7E36'
                position='개발자 인턴'
                style={{ zIndex: -1 }}
              />
            </div>
          </div>
          <ButtonCta style={{ marginTop: '30px' }}>
            지금 프로필 등록하기
          </ButtonCta>
        </section>
        <section className={styles['filter-example-section']}>
          <p className={styles.desc}>
            설정한 기준에 미달하는 회사는
            <br />내 이력서를 볼 수 없으니 안심하세요.
          </p>
          <div className={styles['filter-example-container']}>
            <h5 className={styles.title}>기업 &middot; 산업 필터링</h5>
            <ul>
              {sampleProfiles[0].filters.map((skill, idx) => {
                return <li key={idx}>{skill}</li>;
              })}
            </ul>
          </div>
        </section>
        <section className={styles['profile-list-section']}>
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
          <ButtonCta style={{ marginTop: '130px' }}>
            지금 프로필 등록하기
          </ButtonCta>
        </section>
        <section className={styles['submit-early-seciton']}>
          <div className={styles['dimmed-layer']}></div>
          <p className={styles.desc}>
            먼저 등록한 프로필이
            <br />
            가장 먼저 검토 돼요
          </p>
          <ButtonCta
            isWhiteBtn={true}
            style={{ zIndex: 1, marginTop: '380px' }}
          >
            지금 프로필 등록하기
          </ButtonCta>
          <RecruitMsg
            companyInfo='핀테크 스타트업'
            companyName='T사'
            companyColor='#0064FF'
            position='PM 인턴'
            style={{
              position: 'absolute',
              top: '200px',
              left: '0',
              zIndex: -1,
            }}
          ></RecruitMsg>
          <RecruitMsg
            companyInfo='중고거래 스타트업'
            companyName='D사'
            companyColor='#FF7E36'
            position='개발자 인턴'
            style={{
              position: 'absolute',
              top: '329px',
              left: '60%',
              zIndex: -1,
            }}
          ></RecruitMsg>
          <RecruitMsg
            companyInfo='외국계 소비재 회사'
            companyName='P사'
            companyColor='#007BC9'
            position='세일즈 인턴'
            style={{
              position: 'absolute',
              top: '370px',
              left: '10%',
              zIndex: -1,
            }}
          ></RecruitMsg>
          <RecruitMsg
            companyInfo='패션 스타트업'
            companyName='M사'
            companyColor='#000000'
            position='마케팅 인턴'
            style={{
              position: 'absolute',
              top: '539px',
              left: '60%',
              zIndex: -1,
            }}
          ></RecruitMsg>
          <RecruitMsg
            companyInfo='드라마 제작사'
            companyName='S사'
            companyColor='#000000'
            position='기획 PD 인턴'
            style={{
              position: 'absolute',
              top: '578px',
              left: '-10%',
              zIndex: -1,
            }}
          ></RecruitMsg>
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
