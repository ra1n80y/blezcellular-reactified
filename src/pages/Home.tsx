import Hero from '../components/Hero/Hero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import Gallery from '../components/Gallery/Gallery';
import LocationMap from '../components/LocationMap/LocationMap';

const Home = () => {
  return (
    <>
      <Hero title="Welcome to Blez Cellular" subtitle="Your one-stop shop for mobile solutions" />
      <ServicesSection />
      <Gallery />
      <LocationMap />
    </>
  );
};

export default Home;
