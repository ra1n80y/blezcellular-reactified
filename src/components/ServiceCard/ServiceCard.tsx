import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, alt, title, description }: ServiceCardProps) => {
  return (
    <article className={styles.card}>
      <img src={icon} alt={alt} className={styles.icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default ServiceCard;
