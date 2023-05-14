import PropTypes from 'prop-types';
import { BsCloudDownloadFill } from 'react-icons/bs';
import css from './Button.module.css';

function Button({ onNextFetch }) {
  return (
    <button className={css.button} type="button" onClick={onNextFetch}>
      Load more <BsCloudDownloadFill className={css.icon} />
    </button>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;
