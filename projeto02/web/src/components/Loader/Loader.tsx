import loaderStyle from './loader.module.css';

export function Loader() {
  return <span className={loaderStyle['rotate-infinite']}>+</span>;
}
