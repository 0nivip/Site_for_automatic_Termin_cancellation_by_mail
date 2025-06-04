import React, { useState, useEffect, useRef } from 'react';
import './AnimatedStepsSection.css';

const AnimatedStepsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleCards(prev => [...prev, 0]), 200);
            setTimeout(() => setVisibleCards(prev => [...prev, 1]), 400);
            setTimeout(() => setVisibleCards(prev => [...prev, 2]), 600);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stepData = [
    {
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-Mail Absage",
      content: ["Eine Absage per E-Mail kommt rein"],
      summary: "1. Eine Absage per E-Mail kommt rein",
      showExample: true
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Automatische Erkennung",
      content: [
        "Unser Tool erkennt automatisch – und",
        "löscht den Termin aus Doctolib oder samedi"
      ],
      summary: "2. Unser Tool erkennt sie automatisch – und löscht den Termin in Doctolib oder samedi"
    },
    {
      icon: (
        <svg width="40" height="40" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l2 2 4-4m5-7a2 2 0 00-2-2H7a2 2 0 00-2 2v9a2 2 0 002-2V8z" />
        </svg>
      ),
      title: "Stressfrei",
      content: [
        "Der Kalender ist aktuell. Kein",
        "Klick, kein Stress"
      ],
      summary: "3. Der Kalender ist aktuell. Kein Klick, kein Stress"
    }
  ];

  return (
    <div className="steps-section" ref={sectionRef}>
      <div className="steps-container">
        <h2 className="section-title">Wie es funktioniert</h2>
        <div className="steps-grid">
          {stepData.map((step, index) => (
            <StepCard
              key={index}
              index={index}
              delay={200 + (index * 200)}
              isVisible={visibleCards.includes(index)}
              {...step}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ 
  index, 
  icon, 
  title, 
  content, 
  summary, 
  delay, 
  isVisible, 
  showExample = false 
}) => {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowGlow(true), delay + 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const cardClasses = `step-card ${isVisible ? 'visible' : ''}`;
  const numberClasses = `step-number ${isVisible ? 'visible' : ''}`;
  const glowClasses = `glow-effect ${showGlow ? 'active' : ''}`;

  return (
    <div 
      className={cardClasses}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      <div 
        className={numberClasses}
        style={{ animationDelay: `${delay + 300}ms` }}
      >
        {index + 1}
      </div>

      <div className={glowClasses}></div>

      <div className="step-icon">
        <div className="step-icon-pulse"></div>
        {icon}
      </div>

      <h3 className="step-title">{title}</h3>

      <div className="step-content">
        {content.map((item, i) => (
          <div
            key={i}
            className="step-item"
            style={{ animationDelay: `${delay + 400 + (i * 100)}ms` }}
          >
            <span className="bullet"></span>
            <span>{item}</span>
          </div>
        ))}
        
        {showExample && (
          <div className="step-example">
            <div className="email-preview">
              <div className="email-icon">📧</div>
              <span className="email-text">Guten Tag...</span>
            </div>
          </div>
        )}
      </div>

      <div className="step-summary">
        <p className="summary-text">{summary}</p>
      </div>
    </div>
  );
};

export default AnimatedStepsSection;