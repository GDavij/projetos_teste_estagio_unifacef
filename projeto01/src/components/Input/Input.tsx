import style from './input.module.css';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  iconLeft?: Element;
}
export default function Input({ ...rest }: InputProps) {
  return (
    <div className={style['input-wrapper']}>
      <input {...rest} className={style.input} />
    </div>
  );
}
