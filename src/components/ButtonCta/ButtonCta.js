import { FLIGHT_PROPS_ID } from 'next/dist/shared/lib/constants';
import styles from './ButtonCta.module.css';

const formURL = 'https://tally.so/r/wgDPqK';

export default function ButtonCta({
  id,
  isWhiteBtn,
  style,
  children,
  onClick,
}) {
  return (
    <a
      id={id}
      style={{ ...style }}
      className={isWhiteBtn ? styles['btn-white'] : styles['btn-black']}
      href={formURL}
      onClick={onClick}
    >
      <span>{children}</span>
    </a>
  );
}
