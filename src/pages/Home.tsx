import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeatureBenefits from '../components/home/FeatureBenefits';
import Voice from '../components/home/Voice';
import Functions from '../components/home/Functions';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeatureBenefits />
      <Functions />
      {/* <Voice /> */}
      <Pricing />
      <FAQ />
      {/* <CTA /> */}
    </Layout>
  );
};

export default Home; 