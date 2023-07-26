import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TaskData } from './model';

type Store = {
  tasks: TaskData[];
  add: (task: TaskData) => void;
  remove: (task: TaskData) => void;
  edit: (task: TaskData) => void;
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      tasks: [],
      add: (task) => {
        set(() => ({
          tasks: [...get().tasks, task],
        }));
      },
      remove: (task) => {
        set(() => ({
          tasks: get().tasks.filter((item) => item.id !== task.id),
        }));
      },
      edit: (task) => {
        set(() => ({
          tasks: get().tasks.map((item) => {
            if (item.id === task.id) {
              item.complete = !item.complete;
            }
            return item;
          }),
        }));
      },
    }),
    {
      name: 'task-storage',
    },
  ),
);
