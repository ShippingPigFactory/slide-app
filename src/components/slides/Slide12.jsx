import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide12 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.fromTo(".cta-box", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <div className="card cta-box" style={{ padding: '5rem', border: '2px solid var(--accent-gold)' }}>
        <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>無料シミュレーション実施中</p>
        <h2 style={{ fontSize: '3.5rem', margin: '0 0 3rem 0', fontFamily: 'var(--font-serif)' }}>CONTACT US</h2>
        <button style={{
          padding: '20px 60px', fontSize: '1.5rem', fontWeight: 'bold', 
          background: 'var(--text-primary)', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer'
        }}>
          診断を依頼する
        </button>
      </div>
    </div>
  );
};
export default Slide12;