import { useState, useEffect } from 'react';
import Task from './components/task';
import List from './components/list';
import { TaskData } from './types';
import { useStore } from './store';

function App() {
  const { tasks, add } = useStore();
  const [task, setTask] = useState<string>('');
  const todoList = tasks.map((t: TaskData) => <Task key={t.id} data={t} />);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if (task !== '') {
      const d = Date.now();
      add({ id: d, name: task });
      setTask('');
    }
  };

  // TODO: remove
  useEffect(() => {
    console.log('Tasks:', tasks);
  }, [tasks]);

  return tasks.length === 0 ? (
    <div className="flex h-[100dvh] flex-col items-center justify-between p-2 font-sans">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="text-center font-cursive text-5xl drop-shadow-lg sm:text-6xl">
          Todo List
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl flex-1 flex-col justify-center space-y-5 sm:space-y-7"
      >
        <input
          autoComplete="off"
          type="text"
          name="task"
          placeholder="Enter first task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full rounded-lg bg-white p-3 font-semibold text-blue shadow-md outline-blue placeholder:text-blue/50 sm:p-4 sm:text-lg"
        />
        <button
          type="submit"
          disabled={!task}
          className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold shadow-md outline-blue transition enabled:hover:brightness-105 enabled:active:shadow-none enabled:active:brightness-95 disabled:opacity-75 sm:p-3.5 sm:text-2xl"
        >
          Create Task
        </button>
      </form>
      <div className="flex flex-1 flex-col justify-end">
        <span>
          <a
            target="_blank"
            href="https://icons8.com/icon/9zYn1cnry6pn/simple-line-tick-or-checkmark-in-box"
          >
            Favicon
          </a>{' '}
          by{' '}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </span>
      </div>
    </div>
  ) : (
    <List>{todoList}</List>
  );
}

export default App;
