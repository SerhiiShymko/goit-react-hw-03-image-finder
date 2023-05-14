import { BiLoaderCircle } from 'react-icons/bi';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <BiLoaderCircle className={css.loader} />
    </div>
  );
}

export default Loader;
