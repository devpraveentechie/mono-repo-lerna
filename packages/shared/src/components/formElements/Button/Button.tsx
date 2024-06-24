import classNames from 'classnames';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode | string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  color?: string;
  equalHeightToSibling?: boolean;
  customClasses?: string;
  noStyle?: boolean;
};

function whichColor(color: string) {
  if (color === 'black') {
    return 'bg-black hover:bg-gray-700';
  } else if (color === 'white') {
    return 'bg-transparent text-black text-bark-cobalt border border-bark-cobalt';
  } else {
    return 'border border-transparent text-white bg-bark-cobalt hover:bg-bark-cobalt';
  }
}

const buttonClasses = [
  'shadow-sm rounded-md',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  'text-md font-apercu-medium',
  'focus:ring-bark-cobalt',
  'transition duration-200'
];
export function Button({
  children,
  type = 'button',
  onClick,
  disabled,
  fullWidth = true,
  color = 'blue',
  equalHeightToSibling,
  customClasses = '',
  noStyle = false
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={
        !noStyle
          ? classNames(buttonClasses, [customClasses], `${whichColor(color)}`, {
              'bg-slate-200 hover:bg-slate-200': disabled,
              'w-full': fullWidth,
              'h-12': !equalHeightToSibling
            })
          : ''
      }
      type={type}
    >
      {children}
    </button>
  );
}
