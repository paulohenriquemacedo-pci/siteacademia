import { Helmet } from "react-helmet-async";
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
    <Helmet>
      <title>Sistema A.C.A.D.E.M.I.A — Método de Produtividade Acadêmica para Mestrado, Doutorado e TCC</title>
      <meta name="description" content="Sistema A.C.A.D.E.M.I.A: método de produtividade acadêmica com 8 pilares para mestrandos, doutorandos e graduandos em TCC." />
      <link rel="canonical" href="https://sistemaacademia.com.br/" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sistemaacademia.com.br/" />
      <meta property="og:title" content="Sistema A.C.A.D.E.M.I.A — Método de Produtividade Acadêmica" />
      <meta property="og:description" content="Sistema A.C.A.D.E.M.I.A: método de produtividade acadêmica com 8 pilares para mestrandos, doutorandos e graduandos em TCC." />
      <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/stMEng1BDrXePdtJt7BcMV1OyJl2/social-images/social-1771360563787-1.webp" />
    </Helmet>
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
