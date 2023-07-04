import auxStyle from '../../aux.module.css';
import { FormEvent, useId, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Task } from '../../models/data/Task';
import EditTaskModal from './components/EditTaskModal';
import DeleteTaskDialog from './components/DeleteTaskDialog';
function App() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [taskCount, setTaskCount] = useState(2);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 0,
      name: 'Dissertation',
      assignment: 'Bob',
      description: 'Write a Dissertation',
      issued: new Date(),
      limit: 2,
    },
    {
      id: 1,
      name: 'Encrypt Bob Disertation',
      assignment: 'Alice',
      description: 'Encrypt Dissertation to send to web',
      issued: new Date(),
      limit: 2,
    },
  ]);

  function updateTask(newTask: Task) {
    const actualTasks = [...tasks];
    const taskPos = actualTasks.findIndex((v) => v.id === newTask.id);
    actualTasks[taskPos] = newTask;
    setTasks(actualTasks);
  }

  function deleteTask(task: Task | null) {
    if (task) {
      const actualTasks = [...tasks];
      const taskPos = actualTasks.findIndex((v) => v.id === task.id);
      actualTasks.splice(taskPos, 1);
      setTasks(actualTasks);
    }
  }

  const [assigners, setAssigners] = useState<string[]>(['Bob', 'Alice']);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assign, setAssing] = useState('');
  const [limit, setLimit] = useState('2');

  function handleTaskSubmit(ev: FormEvent) {
    ev.preventDefault();
    const task: Task = {
      id: taskCount,
      name,
      description,
      assignment: assign,
      issued: new Date(),
      limit: Number(limit),
    };

    setTaskCount((prev) => prev++);
    if (!assigners.includes(assign)) setAssigners((prev) => [...prev, assign]);

    setTasks((prev) => [...prev, task]);

    setName('');
    setDescription('');
    setAssing('');
    setLimit('2');
  }

  const nameInputId = useId();
  const DescriptionInputId = useId();
  const AssignInputId = useId();
  const LimitInputId = useId();

  return (
    <>
      <div className="app-wrapper">
        <form
          onSubmit={handleTaskSubmit}
          className={`${auxStyle.card} ${auxStyle['p-2']} ${auxStyle['w-1-2']} ${auxStyle['sm-w-90']}`}
        >
          <div className={`${auxStyle.flex} ${auxStyle['gap-2']}  `}>
            <div
              className={` ${auxStyle['w-1-2']} ${auxStyle['flex-grow-0']} ${auxStyle['flex-shrink-0']} ${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['gap-2']}`}
            >
              <label
                htmlFor={nameInputId}
                className={`${auxStyle.flex} ${auxStyle['flex-col']}`}
              >
                <span>Name*</span>
                <Input
                  required
                  id={nameInputId}
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </label>
              <label
                htmlFor={DescriptionInputId}
                className={`${auxStyle.flex} ${auxStyle['flex-col']}`}
              >
                <span>Description*</span>
                <Input
                  required
                  id={DescriptionInputId}
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                />
              </label>
              <label
                htmlFor={AssignInputId}
                className={`${auxStyle.flex} ${auxStyle['flex-col']}`}
              >
                <span>Assign*</span>
                <Input
                  required
                  id={AssignInputId}
                  value={assign}
                  onChange={(ev) => setAssing(ev.target.value)}
                  list="assigments"
                />

                <datalist id="assigments">
                  {assigners.map((v) => (
                    <option key={v} value={v} />
                  ))}
                </datalist>
              </label>
              <label
                htmlFor={LimitInputId}
                className={`${auxStyle.flex} ${auxStyle['flex-col']}`}
              >
                <span>Limit* (Hours)</span>
                <Input
                  required
                  min={1}
                  max={8}
                  type="number"
                  id={LimitInputId}
                  value={limit}
                  onChange={(ev) => setLimit(ev.target.value)}
                />
              </label>
            </div>
            <div
              className={`${auxStyle['w-full']} ${auxStyle.flex} ${auxStyle['flex-col']}`}
            >
              <h1
                className={`${auxStyle['w-full']} ${auxStyle.flex} ${auxStyle['justify-center']}`}
              >
                TODO LIST
              </h1>
              <div
                className={`${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['justify-between']} ${auxStyle['items-center']} ${auxStyle['h-full']} `}
              >
                <p>Register Your Tasks</p>
                <div className={`${auxStyle['w-full']}`}>
                  <Button.ButtonFlat type="submit">Register</Button.ButtonFlat>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          className={`${auxStyle['w-1-2']} ${auxStyle.card}  ${auxStyle['p-2']} ${auxStyle['sm-w-90']}`}
        >
          <h1>Your Tasks</h1>
          <div
            className={`${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['gap-4']}`}
          >
            {tasks.map((task) => (
              <div
                key={task.id}
                className={` ${auxStyle['card-task']} ${auxStyle['w-full']} ${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['gap-1']}`}
              >
                <div
                  className={`${auxStyle.flex} ${auxStyle['w-full']} ${auxStyle['text-overflow-elipsis']} `}
                >
                  Task - {task.name}
                </div>
                <div
                  className={`${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['w-full']} ${auxStyle['text-overflow-elipsis']} ${auxStyle['description-container']} `}
                >
                  <p className={auxStyle['description-title']}>Description</p>
                  <div>{task.description}</div>
                </div>
                <div
                  className={`${auxStyle.flex} ${auxStyle['w-full']} ${auxStyle['text-overflow-elipsis']} `}
                >
                  Created at{' '}
                  {task.issued.toLocaleDateString('pt-br', {
                    dateStyle: 'short',
                  })}
                </div>
                <div
                  className={`${auxStyle.flex} ${auxStyle['w-full']} ${auxStyle['text-overflow-elipsis']} `}
                >
                  <span>{task.limit} hours left</span>
                </div>
                <div className={`${auxStyle.flex} ${auxStyle['gap-2']}`}>
                  <Button.ButtonFlat
                    onClick={() => {
                      setSelectedTask(task);
                      setOpenEditModal(true);
                    }}
                  >
                    Edit
                  </Button.ButtonFlat>
                  <Button.ButtonDanger
                    onClick={() => {
                      setSelectedTask(task);
                      setOpenDeleteDialog(true);
                    }}
                  >
                    Delete
                  </Button.ButtonDanger>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EditTaskModal
        open={openEditModal}
        closeModal={() => setOpenEditModal(false)}
        taskToEdit={selectedTask}
        updateTask={updateTask}
        assigners={assigners}
      />
      <DeleteTaskDialog
        open={openDeleteDialog}
        closeDialog={() => setOpenDeleteDialog(false)}
        onOkay={() => {
          if (selectedTask) deleteTask(selectedTask);
        }}
      />
    </>
  );
}

export default App;
