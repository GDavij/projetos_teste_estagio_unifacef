import buttonStyle from './button.module.css';
import { DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  iconLeft?: Element;
}

export function ButtonFlat({ children, ...rest }: ButtonProps) {
  return (
    <button
      className={` ${buttonStyle['btn-flat']} ${buttonStyle['btn-default']} `}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonDanger({ children, ...rest }: ButtonProps) {
  return (
    <button
      className={`${buttonStyle['btn-flat']} ${buttonStyle['btn-danger']}`}
      {...rest}
    >
      {children}
    </button>
  );
}
