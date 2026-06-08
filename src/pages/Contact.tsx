import FlipCard from "../components/FlipCard/FlipCard";
import styles from "./Contact.module.css";

const contacts = [
  {
    frontIcon: "/icons/insta.svg",
    frontAlt: "Instagram",
    backText: "Instagram.com",
    backLink: "https://www.instagram.com/",
  },
  {
    frontIcon: "/icons/gmail.svg",
    frontAlt: "Gmail",
    backText: "Email Us",
    backLink: "https://mail.google.com/",
  },
  {
    frontIcon: "/icons/x.svg",
    frontAlt: "Twitter",
    backText: "X.com",
    backLink: "https://twitter.com/",
  },
];

const Contact = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Our Contacts</h1>

      <div className={styles.cardGrid}>
        {contacts.map((contact) => (
          <FlipCard key={contact.frontAlt} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
