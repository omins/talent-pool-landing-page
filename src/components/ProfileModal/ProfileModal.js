import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import ProfileCard from '../ProfileCard/ProfileCard';

import icoClose from '../../../public/assets/icons/ico-close.svg';
import styles from './ProfileModal.module.css';

export default function ProfileModal({ modalState, setModalState }) {
  function closeModalhandler() {
    setModalState(prev => {
      return {
        isActive: false,
        id: 0,
      };
    });
  }

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return createPortal(
    <>
      <div className={styles.background} onClick={closeModalhandler}>
        <div
          className={styles['card-container']}
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <div className={styles['btn-close']} onClick={closeModalhandler}>
            <span className={styles['btn-txt']}>닫기</span>
            <Image src={icoClose} alt='닫기 아이콘' />
          </div>
          <div className={styles.card}>
            <Image
              src={`/assets/images/profile${modalState.id}.jpg`}
              alt='프로필 카드'
              layout='fill'
            />
          </div>
        </div>
      </div>
    </>,
    document.querySelector('#modal')
  );
}
