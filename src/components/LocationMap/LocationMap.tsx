import styles from "./LocationMap.module.css";

const LocationMap = () => {
  return (
    <section className={styles.container}>
      <h2 style={{ color: "cyan" }}>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1760793808870!6m8!1m7!1sikHFU1eXbwijKzgpgJcBAA!2m2!1d-26.02448990699033!2d27.9238913510492!3f260.5309005760797!4f1.6033834957156188!5f0.7820865974627469"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Blez Cellular location"
      />
    </section>
  );
};

export default LocationMap;
