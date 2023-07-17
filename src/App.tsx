import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const todoList = tasks.map((t: string) => <p>{t}</p>);
  const [task, setTask] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // TODO: remove
  useEffect(() => {
    console.log('Tasks:', tasks);
  }, [tasks]);

  return (
    <div className="flex h-screen flex-col items-center justify-between p-2 font-sans text-white">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="text-center font-cursive text-5xl drop-shadow-lg sm:text-6xl">
          Todo List
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg flex-1 flex-col justify-center space-y-4"
      >
        <label>
          {/* Task:{' '} */}
          <input
            type="text"
            name="task"
            placeholder="Enter first task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="shadow- w-full rounded-lg bg-white p-3 font-semibold text-blue outline-blue placeholder:text-blue/50"
          />
        </label>
        <button
          type="submit"
          disabled={!task}
          className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold shadow-md outline-blue hover:bg-mint-light active:bg-mint-dark active:shadow-none disabled:opacity-75"
        >
          Create Task
        </button>
      </form>
      {/* <ul className="space-y-2">{todoList}</ul> */}
      <div className="flex-1" />
    </div>
  );
}

export default App;
