import AboutSection from "../components/home/AboutSection/AboutSection";
import ContactForm from "../components/home/ContactForm/ContactForm";
import HeroSection from "../components/home/HeroSection/HeroSection";
import HowItWorks from "../components/home/HowItWorks/HowItWorks";
import Testimonials from "../components/home/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
export default Home;
