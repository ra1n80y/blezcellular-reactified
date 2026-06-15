import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: '/icons/repair.svg',
    alt: 'Repair',
    title: 'Cellphone Repair',
    description: 'Fast and reliable repairs for all phone models.',
  },
  {
    icon: '/icons/flashing.png',
    alt: 'Flashing',
    title: 'Flashing',
    description: 'Secure flashing to update and fix software issues.',
  },
  {
    icon: '/icons/unlocking.svg',
    alt: 'Unlocking',
    title: 'Unlocking',
    description: 'Unlock your device safely for full functionality.',
  },
  {
    icon: '/icons/upgrade.svg',
    alt: 'Software Upgrade',
    title: 'Software Upgrade',
    description: 'Upgrade your phone software efficiently and safely.',
  },
  {
    icon: '/icons/usb.svg',
    alt: 'Accessories',
    title: 'Accessories',
    description: 'Quality phone accessories to enhance your device experience.',
  },
];

const ServicesSection = () => (
  <Container className="bg-service-gradient rounded shadow-sm my-4 py-4">
    <h2 className="text-center">Our Services</h2>
    <Row xs={1} sm={2} md={3} lg={5} className="g-3 mt-3 justify-content-center">
      {services.map((s) => (
        <Col key={s.title}>
          <Card className="text-center p-3 h-100 service-card">
            <Card.Img variant="top" src={s.icon} alt={s.alt} className={styles.icon} />
            <Card.Body>
              <Card.Title>{s.title}</Card.Title>
              <Card.Text>{s.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ServicesSection;
