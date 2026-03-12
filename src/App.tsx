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

function App() {
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

export default App;
