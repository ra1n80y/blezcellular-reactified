import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Hero from '../components/Hero/Hero';
import styles from './About.module.css';

const missions = [
  {
    icon: '/icons/protection.svg',
    alt: 'Protection',
    title: 'Protection',
    description:
      'Driven by integrity and built on technology - we repair in smarter, faster and more sustainable ways, keeping your phone safer.',
  },
  {
    icon: '/icons/support.svg',
    alt: 'Support',
    title: 'Support',
    description:
      "We believe in long-term solutions that ensure you don't have to come back quickly. Fast, robust, and reliable customer service.",
  },
  {
    icon: '/icons/community.svg',
    alt: 'Community',
    title: 'Community',
    description:
      'We connect not just devices - but people. Empowering local growth through accessible tech solutions that are highly affordable.',
  },
];

const About = () => (
  <>
    <Hero title="About Blez Cellular" subtitle="Learn more about us below." />

    <Container className="bg-service-gradient rounded shadow-sm my-4 py-4">
      <h2 className="text-center">Who We Are</h2>
      <p className="text-center">
        At <strong>Blez Cellular</strong>, we’re more than a mobile repair shop - we’re reliable
        agents ensuring that people are always able to connect, communicate, and stay powered in the
        digital age. With roots in reliable technology and a passion for community-driven service,
        our goal is to make premium maintenance experiences accessible to everyone.
      </p>
    </Container>

    <Container className="bg-service-gradient rounded shadow-sm my-4 py-4 text-center">
      <h2>Our Mission</h2>
      <p>
        We aim to bridge the gap between affordability and performance - ensuring our customers
        enjoy top-tier repair quality, personalized device support, and a future-ready experience.
      </p>
      <Row xs={1} md={3} className="g-3 mt-3 justify-content-center">
        {missions.map((m) => (
          <Col key={m.title}>
            <Card className={`text-center p-3 h-100 mission-card ${styles.missionCard}`}>
              <Card.Img variant="top" src={m.icon} alt={m.alt} className={styles.missionIcon} />
              <Card.Body>
                <Card.Title>{m.title}</Card.Title>
                <Card.Text>{m.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    <Container className="bg-service-gradient rounded shadow-sm my-4 py-4 text-center">
      <h2>Get in Touch</h2>
      <p>
        Have questions? We’re just a click away. Reach out to us on{' '}
        <strong style={{ color: '#920909' }}>078 609 0672</strong> and discover how Blez Cellular
        can help power your world. Visit the{' '}
        <Link to="/contact" className={styles.link}>
          Contacts
        </Link>{' '}
        tab for more details.
      </p>
    </Container>
  </>
);

export default About;
