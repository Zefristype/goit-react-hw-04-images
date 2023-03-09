import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, isLoading, openModal }) => {
  return (
    <>
      <Gallery>
        {images &&
          images.map((image, index) => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              openModal={openModal}
              index={index}
            />
          ))}
      </Gallery>
      {isLoading && <Loader />}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};
