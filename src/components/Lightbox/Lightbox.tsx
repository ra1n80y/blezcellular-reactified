import { useEffect, useCallback } from "react";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt, onClose }: LightboxProps) => {
  // Close with Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent page scroll while lightbox is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className={styles.image} />
        <p className={styles.caption}>{alt}</p>
      </div>
    </div>
  );
};

export default Lightbox;
