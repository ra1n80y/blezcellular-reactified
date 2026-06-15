import { Container, Row, Col } from 'react-bootstrap';
import FlipCard from '../components/FlipCard/FlipCard';
import styles from './Contact.module.css';

const contacts = [
  {
    frontIcon: '/icons/insta.svg',
    frontAlt: 'Instagram',
    backText: 'Instagram.com',
    backLink: 'https://www.instagram.com/',
  },
  {
    frontIcon: '/icons/gmail.svg',
    frontAlt: 'Gmail',
    backText: 'Email Us',
    backLink: 'https://mail.google.com/',
  },
  {
    frontIcon: '/icons/x.svg',
    frontAlt: 'Twitter',
    backText: 'X.com',
    backLink: 'https://twitter.com/',
  },
];

const Contact = () => (
  <div className={styles.page}>
    <h1 className={styles.title}>Our Contacts</h1>

    <Container>
      <Row xs={1} sm={3} className="justify-content-center g-2 mt-4">
        {contacts.map((c) => (
          <Col key={c.frontAlt} className="d-flex justify-content-center">
            <FlipCard {...c} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Contact;
