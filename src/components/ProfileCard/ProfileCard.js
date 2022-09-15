import Image from 'next/image';
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
          <div className={styles['school-info']}>
            <div className={styles['title-group']}>
              <h5 className={styles['category-title']}>학년</h5>
              <span
                className={styles['category-subtitle']}
              >{`${userInfo.schoolYear}학년`}</span>
            </div>
            <div className={styles['school-info-group']}>
              <div className={styles['img-background']}>
                <Image
                  src='/assets/icons/ico-academy.svg'
                  alt='학사모 로고'
                  width={7}
                  height={6}
                />
              </div>
              <div className={styles['school-detail']}>
                <span className={styles.school}>{userInfo.school}</span>
                <span className={styles.major}>{userInfo.major}</span>
              </div>
            </div>
          </div>
          <div className={styles['user-info']}>
            <div className={styles['desc-group']}>
              <h5 className={styles['category-title']}>자기소개</h5>
              <p className={styles['user-desc']}>{userInfo.description}</p>
            </div>
            <div className={styles['skill-group']}>
              <h5 className={styles['category-title']}>전문분야 및 스킬</h5>
              <ul className={styles['skill-list']}>
                {userInfo.filters.map((skill, idx) => {
                  return (
                    <li key={idx} className={styles['skill-item']}>
                      <span>{skill}</span>
                    </li>
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
