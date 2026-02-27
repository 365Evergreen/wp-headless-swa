import './FeaturesGrid.css';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const FeaturesGrid = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance and blazing-fast load times for exceptional user experience.'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Modern Design',
      description: 'Clean, contemporary interfaces that are both beautiful and functional.'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Seamless experience across all devices, from mobile to desktop.'
    },
    {
      id: 4,
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and rock-solid reliability you can trust.'
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Scalable Solutions',
      description: 'Built to grow with your needs, from startup to enterprise.'
    },
    {
      id: 6,
      icon: '💡',
      title: 'Innovation First',
      description: 'Cutting-edge technology and forward-thinking development practices.'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Key Features</h2>
          <p className="features-subtitle">
            Everything you need to build amazing digital experiences
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
