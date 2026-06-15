import styles from './MissionCard.module.css';

interface MissionCardProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const MissionCard = ({ icon, alt, title, description }: MissionCardProps) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MissionCard;
