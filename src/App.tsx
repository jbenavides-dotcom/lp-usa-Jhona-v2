import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyBar } from './components/layout/StickyBar';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Products } from './components/sections/Products';
import { ProducerAdvantage } from './components/sections/ProducerAdvantage';
import { Process } from './components/sections/Process';
import { Story } from './components/sections/Story';
import { Sustainability } from './components/sections/Sustainability';
import { Reviews } from './components/sections/Reviews';
import { ShippingInfo } from './components/sections/ShippingInfo';
import { CtaFinal } from './components/sections/CtaFinal';

function App() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Products />
        <ProducerAdvantage />
        <Process />
        <Story />
        <Sustainability />
        {/* <Reviews /> */}
        {/* <ShippingInfo /> */}
        {/* <CtaFinal /> */}
      </main>

      <Footer />
      {/* <StickyBar /> */}
    </>
  );
}

export default App;
