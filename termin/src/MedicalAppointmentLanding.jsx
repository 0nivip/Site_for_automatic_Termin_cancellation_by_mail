import React from 'react';
import AnimatedStepsSection from './AnimatedStepsSection';
import { AnimatedButtonSection } from './AnimatedButtonSection';
import './MedicalAppointmentLanding.css';

const MedicalAppointmentLanding = () => {
  const benefits = [
    {
      title: "Zeitersparnis:",
      text: "Bis zu 3 Stunden pro Woche gespart"
    },
    {
      title: "DSGVO-konform:",
      text: "Lokale Verarbeitung oder sichere Cloud"
    },
    {
      title: "Keine Schulung nötig:",
      text: "Läuft im Hintergrund"
    },
    {
      title: "Kompatibel:",
      text: "Doctolib, samedi"
    },
    {
      title: "Akzeptierte E-Mails:",
      text: "Fast alles"
    }
  ];

  const handlePrimaryClick = () => {
    console.log('Demo anfragen clicked');
  };

  const handleCTAClick = () => {
    console.log('Kostenlose Demo clicked');
  };

  return (
    <div className="landing-container">
      <HeroSection onPrimaryClick={handlePrimaryClick} />
      <AnimatedStepsSection />
      <BenefitsSection benefits={benefits} />
      <TestimonialSection />
      <CTASection onCTAClick={handleCTAClick} />
    </div>
  );
};

const HeroSection = ({ onPrimaryClick }) => (
  <section className="hero-section">
    <div className="section-container">
      <h1 className="hero-title">
        Weniger klicken. Mehr heilen.
      </h1>
      <p className="hero-subtitle">
        Unser Tool erkennt Terminabsagen in E-Mails – und trägt sie vollautomatisch aus Doctolib oder samedi aus.
      </p>
      <AnimatedButtonSection 
        variant="hero"
        primaryText="Demo anfragen"
        onPrimaryClick={onPrimaryClick}
      />
    </div>
  </section>
);

const BenefitsSection = ({ benefits }) => (
  <section className="benefits-section section-padding">
    <div className="section-container">
      <h2 className="section-title">Vorteile</h2>
      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </div>
    </div>
  </section>
);

const BenefitItem = ({ title, text }) => (
  <div className="benefit-item">
    <div className="benefit-icon"></div>
    <div className="benefit-content">
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-text">{text}</p>
    </div>
  </div>
);

const TestimonialSection = () => (
  <section className="testimonial-section section-padding">
    <div className="section-container">
      <div className="testimonial-card">
        <blockquote className="testimonial-quote">
          "Wir haben weniger Chaos, weniger verpasste Absagen, und der Kalender ist endlich zuverlässig."
        </blockquote>
        <cite className="testimonial-cite">— Dr. H. Möller, Dermatologie Berlin</cite>
      </div>
    </div>
  </section>
);

const CTASection = ({ onCTAClick }) => (
  <section className="cta-section section-padding">
    <div className="section-container">
      <h2 className="cta-title">
        Bereit für stressfreie Terminverwaltung?
      </h2>
      <AnimatedButtonSection 
        variant="cta"
        ctaText="Jetzt kostenlose Demo anfordern"
        onCTAClick={onCTAClick}
      />
    </div>
  </section>
);

export default MedicalAppointmentLanding;