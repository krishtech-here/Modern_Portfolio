import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { InteractiveBackground } from '@/components/InteractiveBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground mb-4 md:mb-0">
                © 2024 Portfolio. Built with passion and modern web technologies.
              </div>
              <div className="text-muted-foreground text-sm">
                Made with React, TypeScript & Tailwind CSS
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
