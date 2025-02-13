import './globals.css';
import HeroSection from './components/herosection';
import WhoWeAre from './components/wwa';
import WhatWeOffer from './components/wwo';
import FeatureSection from './components/featuresection';
import Testimonials from './components/testimonials';
import FAQs from './components/faq';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
    <HeroSection />
    <WhoWeAre />
    <WhatWeOffer />
    <FeatureSection />
    <Testimonials />
    <FAQs />
    <Footer />
  </div>
  );
}
