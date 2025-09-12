import StickyNavbar from '../components/StickyNavbar';
import Footer from '../components/Footer';
import ContactHero from './component/contact-hero';
import TravelContactSection from './component/travel-contact-section';
import ContactForm from './component/contact-form';

export default function ContactPage() {
  return (
    <div>
      <StickyNavbar />
      <ContactHero />
      <TravelContactSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
