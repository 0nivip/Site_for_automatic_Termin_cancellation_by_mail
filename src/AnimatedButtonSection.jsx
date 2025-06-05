import React, { useState, useEffect } from 'react';
import './AnimatedButtonSection.css';

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  className = '',
  showIcon = false,
  autoPulse = false,
  delay = 0,
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (autoPulse && variant === 'cta') {
      const interval = setInterval(() => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [autoPulse, variant]);

  const handleClick = (e) => {
    if (disabled) return;

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    // Brief visual feedback before redirect
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    // Call the onClick handler (which should handle the redirect)
    if (onClick) {
      // Small delay to show the click animation before redirect
      setTimeout(() => {
        onClick(e);
      }, 150);
    }
  };

  const baseClasses = [
    'animated-button',
    variant === 'primary' ? 'btn-animated-primary' : 'btn-animated-cta',
    isClicked ? 'pulse' : '',
    className
  ].filter(Boolean).join(' ');

  const buttonStyle = {
    animationDelay: `${delay}ms`,
    pointerEvents: disabled ? 'none' : 'auto',
    opacity: disabled ? 0.5 : undefined
  };

  return (
    <button
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled}
      style={buttonStyle}
      {...props}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size
          }}
        />
      ))}

      {children}
      {showIcon && (
        <span className="button-icon">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </button>
  );
};


export const AnimatedPrimaryButton = ({ children, ...props }) => (
  <AnimatedButton variant="primary" showIcon={true} {...props}>
    {children}
  </AnimatedButton>
);


export const AnimatedCTAButton = ({ children, ...props }) => (
  <AnimatedButton 
    variant="cta" 
    showIcon={true} 
    autoPulse={false}
    {...props}
  >
    {children}
  </AnimatedButton>
);


export const AnimatedButtonSection = ({ 
  primaryText = "Demo anfragen",
  ctaText = "Jetzt kostenlose Demo anfordern",
  onPrimaryClick,
  onCTAClick,
  showBoth = false,
  variant = 'hero' 
}) => {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked - redirecting...');
    if (onPrimaryClick) onPrimaryClick();
  };

  const handleCTAClick = () => {
    console.log('CTA button clicked - redirecting...');
    if (onCTAClick) onCTAClick();
  };

  if (variant === 'hero') {
    return (
      <div style={{ textAlign: 'center' }}>
        <AnimatedPrimaryButton 
          onClick={handlePrimaryClick}
          delay={300}
        >
          {primaryText}
        </AnimatedPrimaryButton>
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div style={{ textAlign: 'center' }}>
        <AnimatedCTAButton 
          onClick={handleCTAClick}
          delay={500}
        >
          {ctaText}
        </AnimatedCTAButton>
      </div>
    );
  }

  return (
    <div style={{ 
      textAlign: 'center', 
      display: 'flex', 
      gap: '16px', 
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <AnimatedPrimaryButton 
        onClick={handlePrimaryClick}
        delay={300}
      >
        {primaryText}
      </AnimatedPrimaryButton>
      <AnimatedCTAButton 
        onClick={handleCTAClick}
        delay={500}
      >
        {ctaText}
      </AnimatedCTAButton>
    </div>
  );
};

export default AnimatedButton;