import React, { useEffect, useState } from 'react';
import * as ga from '../../lib/ga';

import Head from 'next/head';
import Image from 'next/image';

import RecruitMsg from '../RecruitMsg/RecruitMsg';
import ButtonCta from '../ButtonCta/ButtonCta';
import UserList from '../UserList/UserList';

import styles from './MainContent.module.css';

const sampleProfiles = [
  {
    id: 0,
    name: '오민석',
    major: '체육교육과 | 소프트웨어벤처',
    school: '고려대학교',
    pfp: '/assets/images/pfp0.png',
    filters: ['스타트업', '개발', '웹프론트엔드'],
  },
  {
    id: 1,
    name: '엄다혜',
    major: '불어불문학과 | 경영학과',
    school: '고려대학교',
    pfp: '/assets/images/pfp1.png',
    filters: ['스타트업', '기획', 'PM/PO'],
  },
  {
    id: 2,
    name: '한국일',
    major: '정치외교학과',
    school: '고려대학교',
    pfp: '/assets/images/pfp2.jpeg',
    filters: ['스타트업', '개발'],
  },
];

export default React.memo(function MainContent({ userClickHandler }) {
  const [innerHeight, setInnerHeght] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      setInnerHeght(window.innerHeight);
    }
  }, []);

  function ctaClickHandler(event) {
    const id = event.target.closest('a').id;
    if (id !== undefined) {
      ga.event({
        action: 'click_cta',
        params: {
          ctaLocation: id,
        },
      });
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>김인턴</title>
      </Head>
      <main className={styles['main-container']}>
        <section
          className={styles['hero-section']}
          style={
            innerHeight > 0
              ? { height: `${innerHeight}px` }
              : { height: '100vh' }
          }
        >
          <h1 className={styles.title}>
            <Image src='/assets/images/logo.png' alt='김인턴' layout='fill' />
          </h1>
          <p className={styles.desc}>
            인턴, 이제는 <span>지원</span>하지 말고
            <br />
            <em>제안</em>받으세요
          </p>
          <Image
            src='/assets/images/main-background.png'
            alt='장식용 이미지'
            width={343}
            height={234}
          />
          <ButtonCta
            isWhiteBtn={true}
            style={{ marginTop: '33px' }}
            onClick={ctaClickHandler}
            id='hero_section_cta'
          >
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
            <div className={styles['profile-card']}>
              <Image
                src='/assets/images/profile0.jpg'
                alt='프로필 카드'
                layout='fill'
                objectFit='cover'
                className={styles['profile-card-img']}
              />
            </div>
            <div
              className={styles['recruit-msg-container']}
              style={{ top: '62px', left: '85px' }}
            >
              <RecruitMsg
                companyInfo='핀테크 스타트업'
                companyName='T사'
                companyColor='#0064FF'
                position='개발자 인턴'
                employee='오민석'
                style={{ zIndex: 5000, pointerEvents: 'none' }}
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
                style={{ zIndex: -1, pointerEvents: 'none' }}
              />
            </div>
          </div>
        </section>
        <section className={styles['filter-example-section']}>
          <p className={styles.desc}>
            설정한 기준에 미달하는 회사는
            <br />내 이력서를 볼 수 없으니 안심하세요.
          </p>
          <div className={styles['filter-img-container']}>
            <Image
              src='/assets/images/standard.jpg'
              alt='희망기준'
              layout='fill'
              className={styles['filter-img']}
            />
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
          <ButtonCta
            style={{ marginTop: '130px' }}
            onClick={ctaClickHandler}
            id='profile_list_section_cta'
          >
            지금 프로필 등록하기
          </ButtonCta>
        </section>
        <section
          className={styles['submit-early-seciton']}
          style={
            innerHeight > 0
              ? { height: `${innerHeight}px` }
              : { height: '100vh' }
          }
        >
          <div className={styles['dimmed-layer']}></div>
          <p className={styles.desc}>
            먼저 등록한 프로필이
            <br />
            가장 먼저 검토 돼요
          </p>
          <div className={styles['recruit-msg-img']}>
            <Image
              src='/assets/images/recruitMsg.png'
              alt='리크루팅 제안'
              layout='fill'
            />
          </div>
          <ButtonCta
            isWhiteBtn={true}
            style={{ zIndex: 1, marginTop: '48px' }}
            onClick={ctaClickHandler}
            id='submit_early_section_cta'
          >
            지금 프로필 등록하기
          </ButtonCta>
        </section>
      </main>
      <footer></footer>
    </div>
  );
});
