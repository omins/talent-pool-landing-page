import Image from 'next/image';

import FilterItem from '../FilterItem/FilterItem';

import styles from './UserItem.module.css';

export default function UserItem({ user, onUserClick }) {
  return (
    <li className={styles['user-item']} id={user.id} onClick={onUserClick}>
      <div className={styles.pfp}>
        <Image
          src={user.pfp}
          alt='프로필 사진'
          layout='fill'
          objectFit='cover'
          objectPosition='0 0'
        />
      </div>
      <div className={styles['user-info']}>
        <h3 className={styles.name}>{user.name}</h3>
        <span className={styles.major}>{user.major}</span>
        <span className={styles.school}>{user.school}</span>
        <ul className={styles['filter-list']}>
          {user.filters.map((filter, idx) => {
            return <FilterItem key={idx}>{filter}</FilterItem>;
          })}
        </ul>
      </div>
    </li>
  );
}
