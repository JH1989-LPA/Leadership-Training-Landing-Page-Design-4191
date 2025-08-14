import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import TrustLogos from './sections/TrustLogos';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import BusinessCase from './sections/BusinessCase';
import TestimonialsSection from './sections/TestimonialsSection';
import TrainerSection from './sections/TrainerSection';
import BonusSection from './sections/BonusSection';
import ExtendedSocialProof from './sections/ExtendedSocialProof';
import CTASection from './sections/CTASection';
import GuaranteeSection from './sections/GuaranteeSection';
import Footer from './sections/Footer';
import LeadModal from './common/LeadModal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-montserrat bg-white">
      <HeroSection onOpenModal={openModal} />
      <TrustLogos />
      <ProblemSection />
      <SolutionSection />
      <BusinessCase onOpenModal={openModal} />
      <TestimonialsSection onOpenModal={openModal} />
      <TrainerSection />
      <BonusSection />
      <ExtendedSocialProof onOpenModal={openModal} />
      <CTASection onOpenModal={openModal} />
      <GuaranteeSection />
      <Footer onOpenModal={openModal} />
      
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LandingPage;