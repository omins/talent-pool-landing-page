import styles from './RecruitMsg.module.css';
export default function RecruitMsg({
  style,
  companyInfo,
  companyName,
  companyColor,
  position,
  employee,
}) {
  return (
    <div className={styles['msg-box']} style={{ ...style }}>
      <p className={styles['msg-content']}>
        {companyInfo ? companyInfo : '채용팀'}{' '}
        <span
          style={{
            color: `${companyColor ? companyColor : 'inherit'}`,
            fontWeight: '700',
          }}
        >
          {companyName ? companyName : ''}
        </span>
        에서 {employee ? employee : 'OOO'}
        님께
        <br />
        <em>{position ? position : '새로운 인턴'} 포지션 제안</em>을
        보내왔습니다.
      </p>
      <div className={styles['btn-more']}>
        <span>제안 확인하기</span>
      </div>
    </div>
  );
}
