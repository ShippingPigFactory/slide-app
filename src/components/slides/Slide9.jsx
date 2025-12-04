import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide9 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.to(".bar-fill", { height: "var(--h)", duration: 1.5, ease: "power3.out", stagger: 0.3 });
        gsap.to(".val", { opacity: 1, y: 0, delay: 1.5, duration: 0.5 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>圧倒的な経済合理性</h2>
      
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '6rem', height: '400px', marginTop: '2rem' }}>
        
        {/* Current */}
        <div style={{ textAlign: 'center', width: '150px' }}>
          <div className="val" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', opacity: 0, transform: 'translateY(20px)' }}>3,000万</div>
          <div style={{ height: '300px', width: '100%', background: '#e0e0e0', borderRadius: '10px 10px 0 0', position: 'relative' }}>
             <div className="bar-fill" style={{ position: 'absolute', bottom: 0, width: '100%', background: '#95a5a6', borderRadius: '10px 10px 0 0', height: 0, '--h': '100%' }}></div>
          </div>
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>現状コスト</p>
        </div>

        <i className="fa-solid fa-arrow-right fa-3x" style={{ marginBottom: '150px', color: 'var(--text-secondary)' }}></i>

        {/* Future */}
        <div style={{ textAlign: 'center', width: '150px' }}>
          <div className="val text-gold" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', opacity: 0, transform: 'translateY(20px)' }}>800万</div>
          <div style={{ height: '300px', width: '100%', background: '#e0e0e0', borderRadius: '10px 10px 0 0', position: 'relative' }}>
             <div className="bar-fill" style={{ position: 'absolute', bottom: 0, width: '100%', background: 'var(--accent-gold)', borderRadius: '10px 10px 0 0', height: 0, '--h': '27%', boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)' }}></div>
          </div>
          <p className="text-gold" style={{ marginTop: '1rem', fontWeight: 'bold' }}>実質負担</p>
        </div>

      </div>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>※公的給付活用による実質負担減（約70%削減）</p>
    </div>
  );
};
export default Slide9;