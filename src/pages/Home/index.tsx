import ContactSection from '../../components/Home/ContactSection';
import FAQSection from '../../components/Home/FAQSection';
import HeroSection from '../../components/Home/HeroSection';
import StakeSection from '../../components/Home/StakeSection';
import TeamSection from '../../components/Home/TeamSection';
import ValueSection from '../../components/Home/ValueSection';

const Home = () => {
  return (
    <div className='text-center md:text-left'>
      <HeroSection />
      <StakeSection />
      <ValueSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;
