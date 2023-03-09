import { useState, useEffect } from 'react';
import { fetchImages } from 'services/fetchImages';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Container } from './Container/Container.styled';

const PER_PAGE = 12;

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (page !== 1) {
      setIsLoading(true);
      setIsBtnActive(false);
      fetchImages(searchQuery, page)
        .then(data => {
          setImages(prevState => [...prevState, ...data.hits]);
          setIsBtnActive(data.hits.length >= PER_PAGE);
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }
  }, [searchQuery, page]);

  const handleSubmit = newSearchQuery => {
    if (!newSearchQuery) {
      return;
    }
    setSearchQuery(newSearchQuery);
    setIsLoading(true);
    setIsBtnActive(false);
    setImages([]);
    setPage(1);
    fetchImages(newSearchQuery)
      .then(data => {
        setImages(data.hits);
        setIsBtnActive(data.totalHits > data.hits.length);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  };
  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = index => {
    setShowModal(true);
    setModalImage(images[index]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {images && (
        <ImageGallery
          images={images}
          isLoading={isLoading}
          openModal={openModal}
        />
      )}
      {isBtnActive && <Button onPagination={handleClick} />}
      {showModal && <Modal onClose={closeModal} modalImage={modalImage} />}
    </Container>
  );
};
