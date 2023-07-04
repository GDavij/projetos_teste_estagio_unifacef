import auxStyle from '../../aux.module.css';
import Button from '../Button';
import { ButtonFlat } from '../Button/Button';
import dialogStyle from './dialog.module.css';

export interface BaseDialogProps {
  open: boolean;
  closeDialog: () => void;
  subject?: string;
  question?: string;
  onOkay: () => void | Promise<void>;
  onDecline?: () => void | Promise<void>;
  onOkayText?: string;
  onDeclineText?: string;
}

export default function Dialog({
  open,
  closeDialog,
  subject,
  question,
  onOkay,
  onDecline,
  onOkayText,
  onDeclineText,
}: BaseDialogProps) {
  return (
    <div
      style={{ display: open ? 'flex' : 'none' }}
      className={`${dialogStyle['dialog-wrapper']}`}
    >
      <div onClick={closeDialog} className={dialogStyle.backdrop}></div>
      <div
        className={`${auxStyle.card} ${dialogStyle.dialog} ${auxStyle.flex} ${auxStyle['flex-col']}`}
      >
        <div
          className={`${auxStyle['w-full']} ${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['items-center']} `}
        >
          <h2>{subject}</h2>
          <p className={auxStyle['mb-2']}>{question}</p>
          <div
            className={`${auxStyle.flex} ${auxStyle['justify-center']} ${auxStyle['gap-2']}`}
          >
            <Button.ButtonDanger
              onClick={async () => {
                if (onDecline) await onDecline();
                closeDialog();
              }}
            >
              {onDeclineText ?? 'Decline'}
            </Button.ButtonDanger>
            <ButtonFlat
              onClick={async () => {
                await onOkay();
                closeDialog();
              }}
            >
              {onOkayText ?? 'Accept'}
            </ButtonFlat>
          </div>
        </div>
      </div>
    </div>
  );
}
