import styles from './ButtonCta.module.css';

const formURL = 'https://forms.gle/EZVsz6cFMypp92Rt8';
const whiteBtnTxt = '채용 제안 받기';
const blackBtnTxt = '지금 프로필 등록하기';

export default function ButtonCta({ isWhiteBtn, style }) {
  return (
    <a
      style={{ ...style }}
      className={isWhiteBtn ? styles['btn-white'] : styles['btn-black']}
      href={formURL}
    >
      {isWhiteBtn ? whiteBtnTxt : blackBtnTxt}
    </a>
  );
}
