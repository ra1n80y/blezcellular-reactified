import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Lightbox from '../Lightbox/Lightbox';
import styles from './Gallery.module.css';

const images = [
  { src: '/blez-shop1.jpg', alt: 'Inventory shelf as well as pending repairs' },
  { src: '/blez-shop2.jpg', alt: 'Repair section/Main workstation' },
  {
    src: '/blez-shop3.jpg',
    alt: 'Rework station with hot air gun and soldering iron for more comprehensive repairs',
  },
  {
    src: '/blez-shop4.jpg',
    alt: 'Smartphone-related accessories such as phone cases, screen protectors and USB cables',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <Container className="bg-gallery-gradient rounded shadow-sm my-4 py-4 text-center">
      <h2 style={{ color: 'gold' }}>Gallery</h2>
      <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
        {images.map((img) => (
          <div key={img.src} className={styles.item}>
            <img
              src={img.src}
              alt={img.alt}
              className={styles.thumbnail}
              onClick={() => setSelectedImage(img)}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </Container>
  );
};

export default Gallery;
