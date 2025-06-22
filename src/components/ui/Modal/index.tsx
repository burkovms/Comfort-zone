'use client';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.scss';

type Props = {
  image?: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, image, isOpen, onClose }: Props) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {createPortal(
        <div className={styles.modal}>
          <div onClick={onClose} className={`${styles.close} text-lg`}>
            Закрити
          </div>
          {image && <img src={image} alt="Background" className={styles.img}></img>}
          <div className={styles.wrap}>{children}</div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default Modal;
