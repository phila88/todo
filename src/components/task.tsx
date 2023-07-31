import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { TaskData } from '../types';
import { useStore } from '../store';

type Props = {
  data: TaskData;
};

export const Task = ({ data }: Props) => {
  const { edit, remove } = useStore();

  return (
    <li className="group flex items-center space-x-2 rounded-md p-2 transition focus-within:bg-blue-dark/75 hover:bg-blue-dark/75">
      <Checkbox.Root
        checked={data.complete}
        onCheckedChange={() => edit(data)}
        id={data.id.toString()}
        className={`flex h-5 w-5 appearance-none items-center justify-center rounded transition hover:brightness-105 active:brightness-95 ${
          data.complete ? 'bg-mint' : 'bg-white'
        } outline-blue checked:bg-white`}
      >
        <Checkbox.Indicator className="text-white">
          <CheckIcon className="h-5 w-5" />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <label
        htmlFor={data.id.toString()}
        className={`flex-1 text-lg font-medium transition ${
          data.complete ? 'opacity-75' : ''
        }`}
      >
        {data.complete ? <del>{data.name}</del> : data.name}
      </label>

      <button
        onClick={() => remove(data)}
        className="invisible flex h-5 w-5 items-center justify-center rounded-full bg-white text-2xl font-medium leading-none text-blue transition hover:visible hover:brightness-105 active:brightness-95 group-focus-within:visible group-hover:visible"
      >
        {'\u00d7'}
      </button>
    </li>
  );
};
