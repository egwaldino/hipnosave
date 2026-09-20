import { About } from "@/components/landing/about/About";
import { Blog } from "@/components/landing/blog/Blog";
import { Faq } from "@/components/landing/faq/Faq";
import { Footer } from "@/components/landing/footer/Footer";
import { Hero } from "@/components/landing/hero/Hero";
import { Services } from "@/components/landing/services/Services";
import { Stats } from "@/components/landing/stats/Stats";
import { Testimonials } from "@/components/landing/testimonials/Testimonials";
import { TrustedBy } from "@/components/landing/trusted-by/TrustedBy";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Stats />
      <TrustedBy />
      <Testimonials />
      <Blog />
      <Faq />
      <Footer />
    </div>
  );
}
