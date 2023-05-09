import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleESC);
  }
  handleESC = e => {
    console.log('esc');
    if (e.code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { id, webformatURL, close } = this.props;
    return (
      <div className="overlay">
        <div className="modal">
          <img src="${webformatURL}" alt="" />
        </div>
      </div>
    );
  }
}
