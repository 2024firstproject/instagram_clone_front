import React, { useState } from "react";
import "./Modal.css"; // 모달에 대한 스타일을 정의한 CSS 파일
import x from '../image/x.png';
import ModalComment from "./ModalComment.js";
import './ModalComment.css';
import comments from '../image/comments.png';

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달을 열기 위한 함수
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="commentcount" onClick={openModal}>
        댓글 5개 모두 보기
      </div>
      <img className='comments' src={comments} onClick={openModal}/>
      {modalOpen && (
        <div className="modalBackground">
            <div className="modalContainer">
                <img className='close' src={x} onClick={closeModal}/>
                <div className='modalprofile'></div>
                <div className="modalname">doong_yi_nuna</div>
                <div className="modalPicture"></div>

                <ModalComment/>
            </div>
          </div>
      )}
    </>
  );
}

export default Modal;
