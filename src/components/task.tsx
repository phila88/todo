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
    {/* TODO: Fix checkbox styling */}
    {/* <div className="relative flex items-center">
        <input
          type="checkbox"
          name="task-check"
          id={t.id}
          className="h-5 w-5 appearance-none rounded bg-white checked:bg-mint hover:checked:brightness-105 active:brightness-95"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="absolute inset-0 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div> */}
    <input
      type="checkbox"
      name="task-check"
      id="task-check"
      className="peer h-6 w-6 accent-mint"
      checked={data.complete ?? false}
      onChange={onChange}
    />
    <span className="flex-1 text-lg font-semibold peer-checked:text-white/60">
      {data.complete ? <del>{data.name}</del> : data.name}
    </span>
    <button
      onClick={onClose}
      className="hidden h-6 w-6 rotate-45 rounded-full bg-white font-bold text-blue-dark group-hover:block"
    >
      +
    </button>
  </li>
);
