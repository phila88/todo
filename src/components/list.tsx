import { PropsWithChildren, useRef, useState } from 'react';
import { TaskData } from './task';

type Props = {
  addTask(task: TaskData): void;
};

export const List = ({ addTask, children }: PropsWithChildren<Props>) => {
  const dialogReg = useRef<HTMLDialogElement>(null);
  const [task, setTask] = useState<string>('');

  const handleOpen = () => {
    dialogReg.current?.showModal();
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task !== '') {
      const t: TaskData = { id: Date.now(), name: task };
      addTask(t);
    }
    handleClose();
  };

  const handleClose = () => {
    dialogReg.current?.close();
    setTask('');
  };

  return (
    <>
      <div className="flex h-[100dvh] flex-col space-y-2 p-2">
        <h1 className="text-center font-cursive text-5xl drop-shadow-lg sm:text-6xl">
          Todo List
        </h1>
        <div className="flex-1 space-y-3 overflow-y-auto">
          <ul className="m-auto max-w-5xl space-y-2">{children}</ul>
        </div>
        <div className="m-auto w-full max-w-2xl">
          <button
            onClick={handleOpen}
            className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold shadow-md outline-blue hover:brightness-105 active:shadow-none active:brightness-95 disabled:opacity-80 sm:p-3.5 sm:text-2xl"
          >
            Create Task
          </button>
        </div>
      </div>
      <dialog
        ref={dialogReg}
        onCancel={handleClose}
        className="hidden w-[96%] max-w-3xl rounded-xl border-4 border-[#fff]/50 bg-blue p-4 backdrop:bg-[#000]/40 open:block sm:p-8"
      >
        <form onSubmit={handleAddTask} className="flex flex-col space-y-5">
          <label className="text-center text-2xl font-bold text-white sm:text-3xl">
            Enter task
          </label>
          <input
            type="text"
            name="newTask"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full rounded-lg border-blue bg-white p-3 font-semibold text-blue shadow-md outline-blue placeholder:text-blue/50 sm:p-4 sm:text-lg"
          />
          <div className="flex flex-col gap-1 sm:flex-row-reverse sm:gap-3">
            <button
              type="submit"
              disabled={task === ''}
              className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold text-white shadow-md outline-blue hover:brightness-105 active:shadow-none active:brightness-95 disabled:opacity-75 sm:p-3.5 sm:text-2xl"
            >
              Create
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="w-full rounded-lg bg-blue-dark p-2.5 text-lg font-bold text-white shadow-md outline-blue hover:brightness-105 active:shadow-none active:brightness-95 sm:p-3.5 sm:text-2xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};
