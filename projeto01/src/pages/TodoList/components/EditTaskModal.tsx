import { FormEvent, useEffect, useId, useState } from 'react';
import Modal, { BaseModalProps } from '../../../components/Modal/Modal';
import { Task } from '../../../models/data/Task';
import auxStyle from '../../../aux.module.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

interface EditTaskModalProps extends BaseModalProps {
  taskToEdit: Task | null;
  updateTask: (newTask: Task) => void;
  assigners: string[];
}

export default function EditTaskModal({
  open,
  closeModal,
  taskToEdit,
  assigners,
  updateTask,
}: EditTaskModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assign, setAssign] = useState('');
  const [limit, setLimit] = useState('0');

  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name);
      setDescription(taskToEdit.description);
      setAssign(taskToEdit.assignment);
      setLimit(String(taskToEdit.limit));
    }
  }, [taskToEdit]);

  function handleTaskUpdate(ev: FormEvent) {
    ev.preventDefault();
    if (taskToEdit) {
      const newTask: Task = { ...taskToEdit };
      newTask.name = name;
      newTask.description = description;
      newTask.assignment = assign;
      newTask.limit = Number(limit);
      updateTask(newTask);
      closeModal();
    }
  }

  const nameInputId = useId();
  const descriptionInputId = useId();
  const assignInputId = useId();
  const limitInputId = useId();

  return (
    <Modal
      subject={`Update Task - ${taskToEdit?.name}`}
      open={open}
      closeModal={closeModal}
    >
      {taskToEdit ? (
        <div
          className={`${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['items-center']}`}
        >
          <form
            onSubmit={handleTaskUpdate}
            className={`${auxStyle['w-full']} ${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['gap-1']}`}
          >
            <label htmlFor={nameInputId}>
              <span>Name*</span>
              <Input
                required
                id={nameInputId}
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </label>

            <label htmlFor={descriptionInputId}>
              <span>Description*</span>
              <Input
                required
                id={descriptionInputId}
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
              />
            </label>

            <label htmlFor={assignInputId}>
              <span>Assign*</span>
              <Input
                required
                list="assigns"
                id={assignInputId}
                value={assign}
                onChange={(ev) => setAssign(ev.target.value)}
              />
            </label>
            <datalist id="assigns">
              {assigners.map((v) => (
                <option key={v} value={v} />
              ))}
            </datalist>

            <label htmlFor={limitInputId}>
              <span>Limit*</span>
              <Input
                type="number"
                required
                min="1"
                max="8"
                id={limitInputId}
                value={limit}
                onChange={(ev) => setLimit(ev.target.value)}
              />
            </label>
            <div>
              <Button.ButtonFlat type="submit">Update</Button.ButtonFlat>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h1>Task could not be loaded</h1>
        </div>
      )}
    </Modal>
  );
}
