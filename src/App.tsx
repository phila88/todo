import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const todoList = tasks.map((t: string) => <p>{t}</p>);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const newTask = formJson['task'].toString();

    if (newTask !== '') setTasks([...tasks, newTask]);
  };

  return (
    <div className="py-2 px-3 sm:px-0 max-w-lg m-auto space-y-4">
      <div className="text-center font-semibold text-2xl">Todo App</div>
      <form onSubmit={handleSubmit} className="space-x-1">
        <label>
          Task:{' '}
          <input
            type="text"
            name="task"
            className="p-1 border-2 border-black rounded"
          />
        </label>
        <button type="submit" className="p-1.5 bg-yellow-500 rounded">
          Create Task
        </button>
      </form>
      <ul className="space-y-2">{todoList}</ul>
    </div>
  );
}

export default App;
