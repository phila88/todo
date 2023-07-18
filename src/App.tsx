import { useState, useEffect } from 'react';
import { Task, TaskData } from './components/task';

function App() {
  const [taskList, setTaskList] = useState<TaskData[]>([]);
  const [task, setTask] = useState<string>('');
  const todoList = taskList.map((t: TaskData) => (
    <Task
      key={t.id}
      data={t}
      onChange={() => {
        const arr = taskList.map((item) => {
          if (item.id === t.id) {
            item.complete = !item.complete;
          }
          return item;
        });
        setTaskList(arr);
      }}
      onClose={() => {
        const arr = taskList.filter((item) => item.id !== t.id);
        setTaskList(arr);
      }}
    />
  ));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if (task !== '') {
      const d = Date.now();
      setTaskList([...taskList, { id: d, name: task }]);
      setTask('');
    }
  };

  // TODO: remove
  useEffect(() => {
    console.log('Tasks:', taskList);
  }, [taskList]);

  return taskList.length === 0 ? (
    <div className="flex h-[100dvh] flex-col items-center justify-between p-2 font-sans text-white">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="text-center font-cursive text-5xl drop-shadow-lg sm:text-6xl">
          Todo List
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl flex-1 flex-col justify-center space-y-5 sm:space-y-7"
      >
        <label>
          {/* Task:{' '} */}
          <input
            type="text"
            name="task"
            placeholder="Enter first task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full rounded-lg bg-white p-3 font-semibold text-blue shadow-md outline-blue placeholder:text-blue/50 sm:p-4 sm:text-lg"
          />
        </label>
        <button
          type="submit"
          disabled={!task}
          className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold shadow-md outline-blue hover:bg-mint-light active:bg-mint-dark active:shadow-none disabled:opacity-75 sm:p-3.5 sm:text-2xl"
        >
          Create Task
        </button>
      </form>
      <div className="flex-1" />
    </div>
  ) : (
    <div className="flex h-[100dvh] flex-col space-y-2 p-2 text-white">
      <h1 className="sticky z-10 text-center font-cursive text-5xl drop-shadow-lg sm:text-6xl">
        Todo List
      </h1>
      <div className="flex-1 space-y-3 overflow-y-auto">
        <ul className="m-auto max-w-5xl space-y-2">{todoList}</ul>
      </div>
      <div className="m-auto w-full max-w-2xl">
        <button className="w-full rounded-lg bg-mint p-2.5 text-lg font-bold shadow-md outline-blue hover:bg-mint-light active:bg-mint-dark active:shadow-none disabled:opacity-80 sm:p-3.5 sm:text-2xl">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
