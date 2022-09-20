import styles from './FilterItem.module.css';

export default function FilterItem({ key, children }) {
  return (
    <li key={key} className={styles.item}>
      {children}
    </li>
  );
}
