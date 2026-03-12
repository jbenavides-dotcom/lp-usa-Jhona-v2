import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Products } from './components/sections/Products';
import { ProducerAdvantage } from './components/sections/ProducerAdvantage';
import { Process } from './components/sections/Process';
import { Story } from './components/sections/Story';
import { Sustainability } from './components/sections/Sustainability';
import { Faq } from './components/sections/Faq';
import { Reviews } from './components/sections/Reviews';
import { LandingStory } from './pages/LandingStory';
import { LandingShop } from './pages/LandingShop';
import { LandingSeo } from './pages/LandingSeo';
import { StickyShopBar } from './components/shared/StickyShopBar';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Process />
        <ProducerAdvantage />
        <Sustainability />
        <Story />
        <Faq />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<LandingStory />} />
        <Route path="/shop" element={<LandingShop />} />
        <Route path="/geisha-coffee" element={<LandingSeo />} />
      </Routes>
      <StickyShopBar />
    </>
  );
}

export default App;
