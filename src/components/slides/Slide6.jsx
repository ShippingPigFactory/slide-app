import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide6 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".step-box", { x: -30, opacity: 0, stagger: 0.3, duration: 0.8 });
        gsap.from(".arrow-icon", { opacity: 0, x: -10, stagger: 0.3, delay: 0.2, duration: 0.8 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>業務品質の担保</h2>
      <p style={{ marginBottom: '4rem' }}>障害特性に合わせたマニュアル化と、徹底したWチェック体制。</p>
      
      <div className="flex-row" style={{ alignItems: 'center', justifyContent: 'center' }}>
        
        <div className="card step-box" style={{ width: '250px' }}>
          <div style={{ background: '#f0f0f0', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: 'bold' }}>01</div>
          <i className="fa-solid fa-list-check fa-2x" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}></i>
          <h3>標準化</h3>
          <p className="sub-caption">業務の切り出しと<br/>マニュアル作成</p>
        </div>

        <i className="fa-solid fa-angle-right fa-2x arrow-icon" style={{ color: 'var(--accent-gold)' }}></i>

        <div className="card step-box" style={{ width: '250px' }}>
          <div style={{ background: '#f0f0f0', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: 'bold' }}>02</div>
          <i className="fa-solid fa-users-viewfinder fa-2x" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}></i>
          <h3>作業</h3>
          <p className="sub-caption">特性に合った配置と<br/>集中作業</p>
        </div>

        <i className="fa-solid fa-angle-right fa-2x arrow-icon" style={{ color: 'var(--accent-gold)' }}></i>

        <div className="card step-box" style={{ width: '250px', border: '2px solid var(--text-primary)' }}>
          <div style={{ background: 'var(--text-primary)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: 'bold' }}>03</div>
          <i className="fa-solid fa-magnifying-glass fa-2x" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}></i>
          <h3>Wチェック</h3>
          <p className="sub-caption">管理者による<br/>最終検品・納品</p>
        </div>

      </div>
    </div>
  );
};
export default Slide6;