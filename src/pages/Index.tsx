import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import System from "@/components/sections/System";
import NextSteps from "@/components/sections/NextSteps";
import Science from "@/components/sections/Science";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import Manifesto from "@/components/sections/Manifesto";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Problem />
      <System />
      <NextSteps />
      <Science />
      <Products />
      <Testimonials />
      <Manifesto />
    </main>
    <Footer />
  </>
);

export default Index;
