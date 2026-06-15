import styles from './FlipCard.module.css';

interface FlipCardProps {
  frontIcon: string;
  frontAlt: string;
  backText: string;
  backLink: string;
}

const FlipCard = ({ frontIcon, frontAlt, backText, backLink }: FlipCardProps) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={frontIcon} alt={frontAlt} />
        </div>
        <div className={styles.back}>
          <a href={backLink} target="_blank" rel="noopener noreferrer">
            {backText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
