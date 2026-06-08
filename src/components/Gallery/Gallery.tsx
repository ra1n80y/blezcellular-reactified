import { useState } from "react";
import Lightbox from "../Lightbox/Lightbox.tsx";
import styles from "./Gallery.module.css";

const images = [
  { src: "/blez-shop1.jpg", alt: "Inventory shelf as well as pending repairs" },
  { src: "/blez-shop2.jpg", alt: "Repair section/Main workstation" },
  {
    src: "/blez-shop3.jpg",
    alt: "Rework station with hot air gun and soldering iron for more comprehensive repairs",
  },
  {
    src: "/blez-shop4.jpg",
    alt: "Smartphone-related accessories such as phone cases, screen protectors and USB cables",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className={styles.container}>
      <h2 style={{ color: "gold" }}>Gallery</h2>
      <div className={styles.carousel}>
        {images.map((img) => (
          <div key={img.src} className={styles.item}>
            <img
              src={img.src}
              alt={img.alt}
              onClick={() => setSelectedImage(img)}
              className={styles.thumbnail}
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
    </section>
  );
};

export default Gallery;
