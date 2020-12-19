import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './game.css';
import Memo from '../components/Memo';
import InfoMemo from '../components/InfoMemo';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Lato',
  },
};
Modal.setAppElement('#root');
export default function Game() {
  const [leftEven, setLeftEven] = useState(6);
  const [ressource, setRessource] = useState({});
  const [win, setWin] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (leftEven === 0) {
      setWin(true);
    }
  }, [leftEven]);

  useEffect(() => {
    (async () => {
      if (ressource.title) {
        await sleep(250);
        openModal();
      }
    })();
  }, [ressource]);

  return (
    <div className="game_page">
      <h2>
        Jouer{' '}
        {win && (
          <button
            className="buttonMemo"
            type="button"
            onClick={() => {
              setWin(false);
              setLeftEven(6);
            }}
          >
            Rejouer
          </button>
        )}
      </h2>
      {win === true ? (
        <Memo changeLeftEven={setLeftEven} infoToModal={setRessource} />
      ) : (
        <InfoMemo />
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="buttonMemo" type="button" onClick={closeModal}>
          Fermer
        </button>
        <h2 style={{ fontFamily: 'Oswald' }}>{ressource.title}</h2>

        <div>{ressource.description}</div>
      </Modal>
    </div>
  );
}
