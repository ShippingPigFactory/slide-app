import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide8 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".shield-card", { y: 30, opacity: 0, stagger: 0.2, duration: 0.8 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>鉄壁のコンプライアンス</h2>
      <p style={{ marginBottom: '4rem' }}>「利益」よりも「法令遵守」を最優先する運営体制。</p>
      
      <div className="flex-row" style={{ justifyContent: 'center', gap: '2rem' }}>
        
        <div className="card shield-card" style={{ width: '300px' }}>
          <i className="fa-solid fa-scale-balanced fa-3x" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}></i>
          <h3>法令遵守</h3>
          <p className="sub-caption">行政書士・社労士による<br/>定期監査の実施</p>
        </div>

        <div className="card shield-card" style={{ width: '300px', border: '2px solid var(--accent-gold)' }}>
          <i className="fa-solid fa-shield-halved fa-3x text-gold" style={{ marginBottom: '1.5rem' }}></i>
          <h3 className="text-gold">実地指導対策</h3>
          <p className="sub-caption">行政監査を想定した<br/>マニュアルと模擬監査</p>
        </div>

        <div className="card shield-card" style={{ width: '300px' }}>
          <i className="fa-solid fa-file-contract fa-3x" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}></i>
          <h3>透明性</h3>
          <p className="sub-caption">クリアな会計処理と<br/>実績報告の徹底</p>
        </div>

      </div>
    </div>
  );
};
export default Slide8;