import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import MissionCard from "../components/MissionCard/MissionCard";
import styles from "./About.module.css";

const missions = [
  {
    icon: "/icons/protection.svg",
    alt: "Protection",
    title: "Protection",
    description:
      "Driven by integrity and built on technology - we repair in smarter, faster and more sustainable ways, keeping your phone safer.",
  },
  {
    icon: "/icons/support.svg",
    alt: "Support",
    title: "Support",
    description:
      "We believe in long-term solutions that ensure you don't have to come back quickly. Fast, robust, and reliable customer service.",
  },
  {
    icon: "/icons/community.svg",
    alt: "Community",
    title: "Community",
    description:
      "We connect not just devices - but people. Empowering local growth through accessible tech solutions that are highly affordable.",
  },
];

const About = () => {
  return (
    <>
      <Hero title="About Blez Cellular" subtitle="Learn more about us below." />

      {/* Who We Are */}
      <section className={styles.container}>
        <h2>Who We Are</h2>
        <p>
          At <strong>Blez Cellular</strong>, we’re more than a mobile repair
          shop - we’re reliable agents ensuring that people are always able to
          connect, communicate, and stay powered in the digital age. With roots
          in reliable technology and a passion for community-driven service, our
          goal is to make premium maintenance experiences accessible to
          everyone.
        </p>
      </section>

      {/* Our Mission */}
      <section className={styles.container}>
        <h2>Our Mission</h2>
        <p>
          We aim to bridge the gap between affordability and performance -
          ensuring our customers enjoy top-tier repair quality, personalized
          device support, and a future-ready experience.
        </p>

        <div className={styles.missionGrid}>
          {missions.map((mission) => (
            <MissionCard key={mission.title} {...mission} />
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section className={styles.container}>
        <h2>Get in Touch</h2>
        <p>
          Have questions? We’re just a click away. Reach out to us on{" "}
          <strong style={{ color: "#920909" }}>078 609 0672</strong> and
          discover how Blez Cellular can help power your world. Visit the{" "}
          <Link to="/contact" className={styles.link}>
            Contacts
          </Link>{" "}
          tab for more details.
        </p>
      </section>
    </>
  );
};

export default About;
