import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="px-4 py-2 mb-4 font-bold text-white bg-blue-500 rounded"
        onClick={toggleModal}
      >
        모달창 열기
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="p-6 bg-white rounded-lg">
            <h2 className="mb-4 text-2xl font-bold">모달창</h2>
            <p>모달창 내용이 여기에 들어갑니다.</p>
            <button
              className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded"
              onClick={toggleModal}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
