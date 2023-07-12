import { IS_BROWSER } from '$fresh/runtime.ts';
import { JSX } from 'preact';

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'danger' | 'warning' | 'success';
  additionalClass?: string;
}

export function Button(props: ButtonProps) {
  const {variant, additionalClass, ...rest} = props;

  const getButtonClasses = () => {
    switch (variant) {
      case 'danger':
        return 'bg-red-500 hover:bg-red-700 text-white';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-700 text-white';
      case 'success':
        return 'bg-green-500 hover:bg-green-700 text-white';
      default:
        // Primary is default
        return 'bg-blue-500 hover:bg-blue-700 text-white';
    }
  };

  return (
    <button
      {...rest}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-2 py-1 border(gray-100 2) ${getButtonClasses()} ${additionalClass}`}
    />
  );
}
