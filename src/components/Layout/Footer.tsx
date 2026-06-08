import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      &copy; {year} BlezCellular — Developed by Godfrey Ncedo Achu.
    </footer>
  );
};

export default Footer;
