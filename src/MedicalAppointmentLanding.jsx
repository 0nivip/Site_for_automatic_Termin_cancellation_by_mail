import React from 'react';
import AnimatedStepsSection from './AnimatedStepsSection';
import { AnimatedButtonSection } from './AnimatedButtonSection';
import './MedicalAppointmentLanding.css';


const MedicalAppointmentLanding = () => {
  const benefits = [
    {
      title: "Maximale Zeitersparnis",
      text: "Sparen Sie bis zu 3 Stunden pro Woche durch vollautomatische Terminverwaltung. Keine manuellen Löschungen mehr – unser System erkennt Absagen sofort und aktualisiert Ihren Kalender in Echtzeit.",
      icon: "⏱️"
    },
    {
      title: "100% DSGVO-konform",
      text: "Ihre Patientendaten bleiben sicher. Wahlweise lokale Verarbeitung oder sichere Cloud-Lösung mit deutschen Servern. Alle Datenschutzbestimmungen werden strikt eingehalten.",
      icon: "🔒"
    },
    {
      title: "Plug & Play Installation",
      text: "Keine Schulungen, keine komplizierte Einrichtung. Das System läuft vollautomatisch im Hintergrund und integriert sich nahtlos in Ihren bestehenden Workflow.",
      icon: "⚡"
    },
    {
      title: "Universelle Kompatibilität",
      text: "Funktioniert perfekt mit Doctolib, samedi und anderen gängigen Praxismanagementsystemen. Einfache Integration ohne Systemwechsel erforderlich.",
      icon: "🔗"
    },
    {
      title: "Intelligente E-Mail-Erkennung",
      text: "Erkennt Terminabsagen in fast allen E-Mail-Formaten und Sprachen. Selbst informelle Nachrichten wie 'kann heute nicht kommen' werden zuverlässig verarbeitet.",
      icon: "🧠"
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
      <div className="benefits-grid">
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
        <div className="feature-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="feature-card-content">
                <h3 className="feature-title">Ärzte stimmen zu</h3>
                <div className="feature-image">
                  <img
                    src={require("./Photo.png")}
                    alt="Arzt Portrait"
                  />
                </div>
              </div>
            </div>
            <div className="card-back">
              <blockquote className="testimonial-quote">
                Wir haben weniger Chaos, weniger verpasste Absagen, und der Kalender ist endlich zuverlässig.
              </blockquote>
              <cite className="testimonial-cite">— Dr. H. Möller, Dermatologie Berlin</cite>
            </div>
          </div>
        </div>
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