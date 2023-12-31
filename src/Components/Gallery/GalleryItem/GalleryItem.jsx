import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import styles from "./GalleryItem.module.css";

const GalleryItem = ({ image, index, images }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.item}>
      <img
        src={image.thumbnail}
        alt={image.alt}
        className={styles.image}
        loading="lazy"
        onClick={handleOpenModal}
      />
      {modalOpen && (
        <Modal
          image={image}
          onClose={handleCloseModal}
          images={images}
          currentIndex={index}
        />
      )}
    </div>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GalleryItem;
