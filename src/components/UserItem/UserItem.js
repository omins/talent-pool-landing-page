import Image from 'next/image';
import styles from './UserItem.module.css';

export default function UserItem({ user, onUserClick }) {
  return (
    <li className={styles['user-item']} id={user.id} onClick={onUserClick}>
      <Image
        src={user.pfp}
        alt={`${user.name} 프로필 사진`}
        width={39}
        height={39}
        className={styles.pfp}
      />
      <div className={styles['user-info']}>
        <h3 className={styles.name}>{user.name}</h3>
        <span className={styles.major}>{user.major}</span>
        <span className={styles.school}>{user.school}</span>
      </div>
    </li>
  );
}
