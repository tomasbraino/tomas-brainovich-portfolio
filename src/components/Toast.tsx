import React from 'react';

interface ToastProps {
  message: string | null;
  type?: 'info' | 'success';
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container" id="toast-notifications">
      <div className="toast-item" id="active-toast">
        <span className="material-symbols-outlined">check_circle</span>
        <span>{message}</span>
      </div>
    </div>
  );
};
