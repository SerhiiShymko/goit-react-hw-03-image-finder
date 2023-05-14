import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';
import { BsXLg } from 'react-icons/bs';

class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleESC);
  }
  handleESC = e => {
    console.log('esc');
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { title, currentImageUrl, currentImageDescription, onClose } =
      this.props;
    return (
      <div className={css.overlay} onClick={this.handleClickBackdrop}>
        <div className={css.modal}>
          {title && <h1 className={css.title}>{title}</h1>}
          <button className={css.buttonClose} type="button" onClick={onClose}>
            <BsXLg className={css.icon} />
          </button>
          <img
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}

export default Modal;
