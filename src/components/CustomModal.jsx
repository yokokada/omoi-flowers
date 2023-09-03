// CustomModal.jsx
import React from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div style={{ width: '300px', margin: '100px auto', padding: '20px', background: 'white' }}>
        {children}
        <button onClick={onClose} style={{ display: 'block', marginTop: '20px' }}>閉じる</button>
      </div>
    </div>
  );
}

export default CustomModal;
