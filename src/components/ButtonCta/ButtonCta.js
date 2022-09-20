import { FLIGHT_PROPS_ID } from 'next/dist/shared/lib/constants';
import styles from './ButtonCta.module.css';

const formURL = 'https://forms.gle/EZVsz6cFMypp92Rt8';
const whiteBtnTxt = '채용 제안 받기';
const blackBtnTxt = '지금 프로필 등록하기';

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
      // href={formURL}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
