import { useState, useCallback } from 'react';

import ProfileModal from '../components/ProfileModal/ProfileModal';
import MainContent from '../components/MainContent.js/MainContent';

export default function Home() {
  const [modalState, setModalState] = useState({
    isActive: false,
    id: 0,
  });

  const userClickHandler = useCallback(function (event) {
    setModalState(prev => {
      return {
        isActive: true,
        id: event.target.closest('li').id,
      };
    });
  }, []);

  return (
    <>
      {modalState.isActive && (
        <ProfileModal modalState={modalState} setModalState={setModalState} />
      )}
      <MainContent userClickHandler={userClickHandler} />
    </>
  );
}
