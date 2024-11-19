import { NextPage } from 'next';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Education from './components/Education';



const Home: NextPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <Education/>
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
