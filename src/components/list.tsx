import { PropsWithChildren, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useStore } from '../store';

export const List = ({ children }: PropsWithChildren) => {
  const { add } = useStore();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [task, setTask] = useState<string>('');
  const { ref: intersectRef, inView } = useInView();

  const handleOpen = () => {
    dialogRef.current?.showModal();
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task !== '') {
      add({ id: Date.now(), name: task });
    }
    handleClose();
  };

  const handleClose = () => {
    dialogRef.current?.close();
    setTask('');
  };

  return (
    <>
      <div ref={intersectRef} />

      <header
        className={`sticky top-0 z-10 space-y-2 p-2 transition ${
          !inView ? 'bg-blue-dark/75 shadow-md backdrop-blur' : ''
        }`}
      >
        <h1 className="text-center font-cursive text-5xl drop-shadow-lg sm:text-6xl">
          Todo List
        </h1>
        <div className="m-auto w-full max-w-2xl">
          <button
            onClick={handleOpen}
            className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold shadow-md outline-blue transition hover:brightness-105 active:shadow-none active:brightness-95 disabled:opacity-80 sm:p-3.5 sm:text-2xl"
          >
            Create Task
          </button>
        </div>
      </header>

      <div className="space-y-3 p-2">
        <ul className="m-auto max-w-5xl space-y-2">{children}</ul>
      </div>

      <dialog
        ref={dialogRef}
        onCancel={handleClose}
        className="hidden w-[96%] max-w-3xl rounded-xl border-4 border-[#fff]/50 bg-blue p-3 backdrop:bg-[#000]/40 open:block sm:p-8"
      >
        <form onSubmit={handleAddTask} className="flex flex-col space-y-5">
          <label className="text-center text-2xl font-bold text-white sm:text-3xl">
            Enter task
          </label>
          <input
            autoComplete="off"
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
              className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold text-white shadow-md outline-blue transition enabled:hover:brightness-105 enabled:active:shadow-none enabled:active:brightness-95 disabled:opacity-75 sm:p-3.5 sm:text-2xl"
            >
              Create
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="w-full rounded-lg bg-blue-dark p-2.5 text-lg font-bold text-white shadow-md outline-blue transition hover:brightness-105 active:shadow-none active:brightness-95 sm:p-3.5 sm:text-2xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default List;
