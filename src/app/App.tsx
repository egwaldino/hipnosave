import "aos/dist/aos.css";
import * as AOS from "aos";
import { useEffect } from "react"
import { Box } from "@chakra-ui/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "./pages/home/HeroSection"
import { ContactForm } from "./pages/home/ContactForm"
import { AboutSection } from "./pages/home/AboutSection"
import { ServicesSection } from "./pages/home/ServicesSection"
import { TestimonialsSection } from "./pages/home/TestimonialsSection"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <Box w="100%" h="100%" bgColor="white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </Box>
  )
}

export default App
