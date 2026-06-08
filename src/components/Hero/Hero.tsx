import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
