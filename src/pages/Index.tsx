import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhatIs from "@/components/sections/WhatIs";
import Problem from "@/components/sections/Problem";
import System from "@/components/sections/System";
import Audience from "@/components/sections/Audience";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <WhatIs />
      <Problem />
      <System />
      <Audience />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
