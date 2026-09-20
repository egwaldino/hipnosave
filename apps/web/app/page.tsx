import { About } from "@/components/landing/About";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";

// TODO: montar a home com Header, Hero, About, Services, Testimonials, ContactForm, Footer
export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
