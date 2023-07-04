import { BaseDialogProps } from '../../../components/Dialog/Dialog';
import Dialog from '../../../components/Dialog';
export default function DeleteTaskDialog({
  open,
  closeDialog,
  onOkay,
}: BaseDialogProps) {
  return (
    <Dialog
      open={open}
      closeDialog={closeDialog}
      subject="Delete Task"
      question="Are you Sure you want to delete this Task?"
      onOkay={onOkay}
    />
  );
}
