import React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

export default React.memo(function UserList({ userInfo, onUserClick, style }) {
  return (
    <ul style={{ ...style }} className={styles.list}>
      {userInfo.map(user => {
        return <UserItem key={user.id} user={user} onUserClick={onUserClick} />;
      })}
    </ul>
  );
});
