import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ images, handlePreview }) {
  return (
    <ul className={css.container}>
      {images.map(({ id, description, webformatURL, largeImage }) => (
        <ImageGalleryItem
          key={id}
          description={description}
          smallImage={webformatURL}
          largeImage={largeImage}
          onClick={() => handlePreview(id)}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  handlePreview: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
