import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhatIs from "@/components/sections/WhatIs";
import Problem from "@/components/sections/Problem";
import System from "@/components/sections/System";
import Audience from "@/components/sections/Audience";
import BlogSection from "@/components/sections/BlogSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <SectionDivider />
      <WhatIs />
      <SectionDivider />
      <Problem />
      <SectionDivider />
      <System />
      <SectionDivider />
      <Audience />
      <SectionDivider />
      <BlogSection />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;

export default Index;
