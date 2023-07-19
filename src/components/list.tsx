import { useRef, useState } from 'react';

export const List = ({ children }: React.PropsWithChildren) => {
  const dialogReg = useRef<HTMLDialogElement>(null);
  const [task, setTask] = useState<string>('');

  const handleOpen = () => {
    dialogReg.current?.showModal();
  };

  const handleClose = () => {
    dialogReg.current?.close();
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
            className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold shadow-md outline-blue hover:bg-mint-light active:bg-mint-dark active:shadow-none disabled:opacity-80 sm:p-3.5 sm:text-2xl"
          >
            Create Task
          </button>
        </div>
      </div>
      <dialog
        className="hidden w-[96%] max-w-3xl flex-col space-y-5 rounded-xl border-4 border-[#fff]/50 bg-blue p-4 backdrop:bg-[#000]/40 open:flex sm:p-8"
        ref={dialogReg}
      >
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
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
          <button
            disabled={task === ''}
            onClick={handleClose}
            className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold text-white shadow-md outline-blue hover:bg-mint-light active:bg-mint-dark active:shadow-none disabled:opacity-75 sm:p-3.5 sm:text-2xl"
          >
            Create
          </button>
          <button
            onClick={handleClose}
            className="w-full rounded-lg bg-blue-dark p-2.5 text-lg font-bold text-white shadow-md outline-blue hover:brightness-110 active:shadow-none active:brightness-90 sm:p-3.5 sm:text-2xl"
          >
            Cancel
          </button>
        </div>
      </dialog>
    </>
  );
};