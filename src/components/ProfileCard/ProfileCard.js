import Image from 'next/image';
import FilterItem from '../FilterItem/FilterItem';
import styles from './ProfileCard.module.css';

export default function ProfileCard({ userInfo, isShadow, style }) {
  return (
    <div
      style={{ ...style }}
      className={`${styles['profile-card']} ${
        isShadow ? styles['shadow'] : ''
      }`}
    >
      <div className={styles['profile-header']}>
        <div className={styles['profile-header-info']}>
          <h3 className={styles.name}>{userInfo.name}</h3>
          <span className={styles.major}>{userInfo.major}</span>
          <span className={styles.school}>{userInfo.school}</span>
        </div>
        <Image
          className={styles.pfp}
          src={userInfo.pfp}
          alt={`${userInfo.name} 프로필 사진`}
          width={40}
          height={40}
        />
      </div>
      <div className={styles['profile-detail']}>
        <div className={styles['profile-detail-header']}>
          <h4 className={styles.title}>프로필</h4>
        </div>
        <div className={styles['profile-detail-main']}>
          <div className={styles['resume-group']}>
            <h5 className={styles['category-title']}>이력서</h5>
            <a
              href={userInfo.resumeURL}
              className={styles['resume-link']}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={styles['img-background']}>
                <Image
                  src='/assets/icons/ico-url.svg'
                  alt='이력서 링크'
                  width={10}
                  height={10}
                  className={styles.ico}
                />
              </div>
            </a>
          </div>
          <div className={styles['user-info']}>
            <div className={styles['desc-group']}>
              <h5 className={styles['category-title']}>자기소개</h5>
              <p className={styles['user-desc']}>{userInfo.description}</p>
            </div>
            <div className={styles['info-group-container']}>
              <div className={styles['title-group']}>
                <h5 className={styles['category-title']}>고용형태</h5>
                <div className={styles['employment-status-group']}>
                  <span className={styles['employment-status']}>구직중</span>
                  <div className={styles['ico-toggle-active']}>
                    <Image
                      src='/assets/icons/ico-toggle-active.svg'
                      alt='장식용 이미지'
                      width={11}
                      height={7}
                    />
                  </div>
                </div>
              </div>
              <ul className={styles['info-list']}>
                {userInfo.employmentType.map((type, idx) => {
                  return (
                    <FilterItem key={idx}>
                      <span>{type}</span>
                    </FilterItem>
                  );
                })}
              </ul>
            </div>
            <div className={styles['info-group-container']}>
              <h5 className={styles['category-title']}>희망기업</h5>
              <ul className={styles['info-list']}>
                {userInfo.desiredCompanyType.map((type, idx) => {
                  return (
                    <FilterItem key={idx}>
                      <span>{type}</span>
                    </FilterItem>
                  );
                })}
              </ul>
            </div>
            <div className={styles['info-group-container']}>
              <h5 className={styles['category-title']}>희망직무</h5>
              <ul className={styles['info-list']}>
                {userInfo.desiredJob.map((job, idx) => {
                  return (
                    <FilterItem key={idx}>
                      <span>{job}</span>
                    </FilterItem>
                  );
                })}
              </ul>
            </div>
            <div className={styles['info-group-container']}>
              <h5 className={styles['category-title']}>희망기준</h5>
              <ul className={styles['info-list']}>
                {userInfo.filters.map((filter, idx) => {
                  return (
                    <FilterItem key={idx}>
                      <span>{filter}</span>
                    </FilterItem>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
