import modalStyle from './modal.module.css';
import { ReactNode } from 'react';
import auxStyle from '../../aux.module.css';
import Button from '../Button';

export interface BaseModalProps {
  open: boolean;
  closeModal: () => void;
  subject?: string;
  children?: ReactNode;
}

export default function Modal({
  open,
  closeModal,
  subject,
  children,
}: BaseModalProps) {
  return (
    <div
      style={{ display: open ? 'flex' : 'none' }}
      className={`${modalStyle['modal-wrapper']}`}
    >
      <div onClick={closeModal} className={modalStyle.backdrop}></div>
      <div
        className={`${auxStyle.card} ${modalStyle.modal} ${auxStyle.flex} ${auxStyle['flex-col']}`}
      >
        <div
          className={`${auxStyle['w-full']} ${auxStyle.flex} ${auxStyle['justify-between']} `}
        >
          <h2
            className={`${auxStyle['w-full']} ${auxStyle.flex} ${auxStyle['justify-center']} ${auxStyle['items-center']}`}
          >
            {subject}
          </h2>
          <div className={`${auxStyle['w-fit']} ${auxStyle['h-fit']}`}>
            <Button.ButtonFlat onClick={closeModal}>X</Button.ButtonFlat>
          </div>
        </div>
        <article>{children}</article>
      </div>
    </div>
  );
}
