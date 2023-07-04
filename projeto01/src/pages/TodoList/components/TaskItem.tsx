import Button from '../../../components/Button';

export function TaskItem() {
  return;
  <div
    key={task.id}
    className={` ${auxStyle['card-task']} ${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['gap-2']}`}
  >
    <div className={`${auxStyle.flex}`}>
      <div
        className={`${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['w-full']} ${auxStyle['flex-shrink']}`}
      >
        <div
          style={{
            width: '16rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '1rem',
          }}
        >
          Task - {task.name}
        </div>
        <div style={{ width: '16rem' }}>
          Issued -{' '}
          {task.issued.toLocaleDateString('pt-br', {
            dateStyle: 'short',
          })}
        </div>
      </div>
      <div
        className={`${auxStyle.flex} ${auxStyle['flex-col']} ${auxStyle['w-full']} ${auxStyle['flex-shrink']}`}
      >
        <div
          style={{
            width: '12rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '1rem',
          }}
        >
          Assign To {task.assignment}
        </div>
        <div style={{ width: '12rem' }}>Limit of {task.limit} hours </div>
      </div>
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
  </div>;
}
