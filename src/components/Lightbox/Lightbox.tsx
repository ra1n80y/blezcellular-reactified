import styles from './Lightbox.module.css';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt, onClose }: LightboxProps) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <img src={src} alt={alt} className={styles.image} />
      <p className={styles.caption}>{alt}</p>
    </div>
  );
};

export default Lightbox;
