import { Button } from "@/components/ui/button";
import { RainbowText } from "@/components/rainbow-text";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { FeaturesSection } from "@/components/features-section";
import { EssentialsSection } from "@/components/essentials-section";
import { Lightbulb, Box, ServerCog, Gem, Instagram, Twitter, Linkedin, Menu } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold">3D Print Studio</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Bringing <RainbowText>imagination</RainbowText> to life
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover a curated collection of precision 3D prints that push the boundaries of creativity and craftsmanship.
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 rounded-full text-lg font-medium"
            onClick={() => scrollToSection('portfolio')}
          >
            Explore Portfolio
          </Button>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <div id="portfolio">
        <PortfolioGallery />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Essentials Section */}
      <EssentialsSection />

      {/* Technology Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Precision <RainbowText>technology</RainbowText>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Using state-of-the-art 3D printing technology, every piece is crafted with unparalleled accuracy and attention to detail. From concept to creation, we bring your wildest ideas to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span className="text-foreground">0.1mm layer precision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  <span className="text-foreground">Multiple material support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-foreground">Complex geometry capabilities</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="https://images.unsplash.com/photo-1612178991618-2928dcf1f137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern 3D printer in action"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From idea to <RainbowText>reality</RainbowText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures every project meets the highest standards of quality and precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Concept</h3>
              <p className="text-muted-foreground text-sm">Ideation and initial design exploration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Box className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">3D modeling and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ServerCog className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Print</h3>
              <p className="text-muted-foreground text-sm">High-precision 3D printing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gem className="text-white w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Finish</h3>
              <p className="text-muted-foreground text-sm">Post-processing and quality control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to bring your <RainbowText>vision</RainbowText> to life?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next 3D printing project. From prototypes to art pieces, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 rounded-full text-lg font-medium">
              Start a Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 rounded-full text-lg font-medium border-2"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">3D Print Studio</h3>
              <p className="text-primary-foreground/70 text-sm">
                Creating the future, one layer at a time.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>Custom 3D Printing</li>
                <li>Prototyping</li>
                <li>Design Consultation</li>
                <li>Post-Processing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-primary-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; 2024 3D Print Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
