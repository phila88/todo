import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export type TaskData = {
  id: number;
  name: string;
  complete?: boolean;
};

type Props = {
  data: TaskData;
  onClose(): void;
  onChange(): void;
};

export const Task = ({ data, onChange, onClose }: Props) => (
  <li className="group flex items-center space-x-2 rounded-md p-2 hover:bg-blue-dark/75">
    <Checkbox.Root
      checked={data.complete}
      onCheckedChange={onChange}
      id={data.id.toString()}
      className={`flex h-5 w-5 appearance-none items-center justify-center rounded hover:brightness-105 active:brightness-95 ${
        data.complete ? 'bg-mint' : 'bg-white'
      } outline-blue checked:bg-white`}
    >
      <Checkbox.Indicator className="text-white">
        <CheckIcon className="h-5 w-5" />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label
      htmlFor={data.id.toString()}
      className={`flex-1 text-lg font-medium ${
        data.complete ? 'opacity-75' : ''
      }`}
    >
      {data.complete ? <del>{data.name}</del> : data.name}
    </label>

    <button
      onClick={onClose}
      className="hidden h-5 w-5 items-center justify-center rounded-full bg-white text-2xl font-medium leading-none text-blue group-hover:flex"
    >
      {'\u00d7'}
    </button>
  </li>
);
