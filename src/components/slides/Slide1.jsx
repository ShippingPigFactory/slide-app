import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide1 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.fromTo("h1", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
        gsap.fromTo(".subtitle", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 1 });
        gsap.fromTo(".line", { width: 0 }, { width: "100px", delay: 0.8, duration: 1, ease: "power2.out" });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <div className="flex-col" style={{alignItems: 'center'}}>
        <p className="subtitle" style={{ letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 'bold' }}>
          Strategic Business Solution
        </p>
        <h1 style={{textAlign: 'center'}}>
          COST STRUCTURE<br />
          <span style={{ color: 'var(--text-secondary)', fontSize: '3rem' }}>REFORMATION</span>
        </h1>
        <div className="line" style={{ height: '4px', background: 'var(--accent-gold)', margin: '2rem 0' }}></div>
        <p style={{ fontSize: '1.2rem' }}>就労支援スキーム活用型・経営改革支援</p>
      </div>
    </div>
  );
};
export default Slide1;