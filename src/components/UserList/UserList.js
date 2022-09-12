import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

export default function UserList({ userInfo }) {
  return (
    <ul>
      {userInfo.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
}
