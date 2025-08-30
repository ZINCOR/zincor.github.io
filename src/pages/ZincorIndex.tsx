import { Navbar } from '@/components/zincor/Navbar';
import { Hero } from '@/components/zincor/Hero';
import { FeatureCards } from '@/components/zincor/FeatureCards';
import { Footer } from '@/components/zincor/Footer';

const ZincorIndex = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
};

export default ZincorIndex;