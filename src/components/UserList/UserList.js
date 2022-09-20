import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

export default function UserList({ userInfo, onUserClick, style }) {
  return (
    <ul style={{ ...style }} className={styles.list}>
      {userInfo.map(user => {
        return <UserItem key={user.id} user={user} onUserClick={onUserClick} />;
      })}
    </ul>
  );
}
