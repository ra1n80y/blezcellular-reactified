import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: "/icons/repair.svg",
    alt: "Repair",
    title: "Cellphone Repair",
    description: "Fast and reliable repairs for all phone models.",
  },
  {
    icon: "/icons/flashing.png",
    alt: "Flashing",
    title: "Flashing",
    description: "Secure flashing to update and fix software issues.",
  },
  {
    icon: "/icons/unlocking.svg",
    alt: "Unlocking",
    title: "Unlocking",
    description: "Unlock your device safely for full functionality.",
  },
  {
    icon: "/icons/upgrade.svg",
    alt: "Software Upgrade",
    title: "Software Upgrade",
    description: "Upgrade your phone software efficiently and safely.",
  },
  {
    icon: "/icons/usb.svg",
    alt: "Accessories",
    title: "Accessories",
    description: "Quality phone accessories to enhance your device experience.",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.container}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
