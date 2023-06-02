import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    lgImage: PropTypes.string.isRequired,
    currentImageDescription: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = element => {
    if (element.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { lgImage, currentImageDescription } = this.props;
    return (
      <div className={css.backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={lgImage} alt={currentImageDescription} />
        </div>
      </div>
    );
  }
}
