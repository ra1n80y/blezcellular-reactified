import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-white text-center py-3 mt-auto">
      <Container>&copy; {year} BlezCellular — Developed by Godfrey Ncedo Achu.</Container>
    </footer>
  );
};

export default Footer;
