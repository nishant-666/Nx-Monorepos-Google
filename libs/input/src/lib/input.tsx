import styles from './input.module.css';

/* eslint-disable-next-line */
export interface InputProps {
  placeholder: string;
}

export function Input(props: InputProps) {
  return (
    <div className={styles['container']}>
      <input placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
