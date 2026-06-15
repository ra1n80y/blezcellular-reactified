import { Container } from 'react-bootstrap';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => (
  <section className={styles.hero}>
    <div className={styles.overlay}>
      <Container>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Container>
    </div>
  </section>
);

export default Hero;
