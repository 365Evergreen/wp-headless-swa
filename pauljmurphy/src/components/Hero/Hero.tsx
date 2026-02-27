import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Paul Murphy
          </h1>
          <p className="hero-subtitle">
           Microsoft 365 and Power Platform specialist
          </p>
          <div className="hero-cta">
            <a href="/contact" className="hero-cta-primary">
              Get Started
            </a>
            <a href="/services" className="hero-cta-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
