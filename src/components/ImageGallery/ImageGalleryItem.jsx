import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, index, openModal }) => {
  return (
    <GalleryItem onClick={() => openModal(index)}>
      <Image src={image.webformatURL} alt={image.tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  openModal: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
