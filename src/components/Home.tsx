import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  const handlePlayNow = () => {
    window.open('https://apps.apple.com/us/app/memory-tiles-trainer/id6751095012', '_blank');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Train Your Memory with
              <span className="highlight"> Memory Tiles</span>
            </h1>
            <p className="hero-subtitle">
              Challenge your cognitive abilities with our engaging memory training game. 
              Improve concentration, enhance pattern recognition, and boost your mental agility.
            </p>
            <button className="play-button" onClick={handlePlayNow}>
              <span className="button-icon">
                <img src={`${process.env.PUBLIC_URL}/game-icon.jpeg`} alt="Game Icon" width="24" height="24" style={{ borderRadius: '4px' }} />
              </span>
              Download Game
            </button>
          </div>
          <div className="hero-visual">
            <div className="game-preview">
              <div className="tile-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, i) => (
                  <div key={i} className={`tile tile-${i}`}>
                    {number}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Memory Tiles?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src={`${process.env.PUBLIC_URL}/game-icon.jpeg`} alt="Game Training" width="40" height="40" style={{ borderRadius: '4px' }} />
              </div>
              <h3>Game Training</h3>
              <p>Strengthen your memory and cognitive functions through scientifically designed exercises.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick Sessions</h3>
              <p>Perfect for busy schedules - train your mind in just a few minutes a day.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Track Progress</h3>
              <p>Monitor your improvement with detailed statistics and performance metrics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Adaptive Difficulty</h3>
              <p>Game adjusts to your skill level, ensuring optimal challenge and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Unlock Your Mental Potential</h2>
              <p>
                Memory Tiles is more than just a game - it's a comprehensive game training tool 
                designed to enhance your cognitive abilities. Whether you're looking to improve 
                your memory, increase focus, or simply keep your mind sharp, our game provides 
                the perfect platform for mental exercise.
              </p>
              <ul className="benefits-list">
                <li>✅ Improve short-term memory</li>
                <li>✅ Enhance pattern recognition</li>
                <li>✅ Boost concentration and focus</li>
                <li>✅ Increase processing speed</li>
                <li>✅ Maintain cognitive health</li>
              </ul>
            </div>
            <div className="benefits-visual">
              <div className="game-animation" onClick={handlePlayNow}>
                <div className="game-icon">
                  <img src={`${process.env.PUBLIC_URL}/game-icon.jpeg`} alt="Game Training Icon" width="120" height="120" style={{ borderRadius: '8px' }} />
                </div>
                <div className="neural-connections"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Challenge Your Mind?</h2>
          <p>Join thousands of players who are already improving their cognitive abilities</p>
          <button className="cta-button" onClick={handlePlayNow}>
            Download from App Store
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
