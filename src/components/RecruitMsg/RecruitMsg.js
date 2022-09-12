import styles from './RecruitMsg.module.css';
export default function RecruitMsg() {
  return (
    <div className={styles['msg-box']}>
      <p className={styles['msg-content']}>
        채용 담당자가 오민석님께
        <br />
        새로운 <em>인턴 포지션 제안</em>을 보내왔습니다.
      </p>
      <div className={styles['btn-more']}>
        <span>제안 확인하기</span>
      </div>
    </div>
  );
}
