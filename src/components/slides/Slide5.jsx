import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide5 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".balance-item", { y: -30, opacity: 0, stagger: 0.3, duration: 0.8 });
        gsap.from(".support-arrow", { scaleY: 0, transformOrigin: "bottom", delay: 1, duration: 0.8 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>コスト削減の「カラクリ」</h2>
      <p style={{ marginBottom: '4rem' }}>公的支援が運営コストを支えるため、企業の持ち出しは最小限に。</p>
      
      <div className="flex-center" style={{ gap: '4rem', alignItems: 'flex-end', height: '400px' }}>
        
        {/* Left: Cost */}
        <div className="balance-item flex-col" style={{ alignItems: 'center', width: '250px' }}>
          <div className="card" style={{ padding: '2rem', width: '100%', border: '2px solid var(--accent-gold)' }}>
            <h3 className="text-gold" style={{ fontSize: '1.5rem' }}>企業負担</h3>
            <p style={{ margin: 0, fontWeight: 'bold' }}>最小化</p>
          </div>
          <div style={{ height: '100px', width: '4px', background: 'var(--text-secondary)' }}></div>
        </div>

        {/* Icon Center */}
        <div style={{ paddingBottom: '20px' }}>
          <i className="fa-solid fa-scale-balanced fa-4x" style={{ color: 'var(--text-primary)' }}></i>
        </div>

        {/* Right: Subsidy */}
        <div className="balance-item flex-col" style={{ alignItems: 'center', width: '250px' }}>
          <div className="card" style={{ padding: '2rem', width: '100%', background: 'var(--text-primary)', color: 'white' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'white' }}>公的給付</h3>
            <p style={{ margin: 0, opacity: 0.8 }}>運営費をカバー</p>
          </div>
          {/* Support Arrow */}
          <div className="support-arrow" style={{ height: '150px', width: '60px', background: 'linear-gradient(to top, var(--accent-gold), transparent)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '10px' }}>
            <i className="fa-solid fa-angles-up" style={{ color: 'white' }}></i>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Slide5;