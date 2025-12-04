import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide4 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".box", { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.3 });
        gsap.from(".arrow-line", { width: 0, duration: 1, delay: 1 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>第3の選択肢「福祉活用」</h2>
      <p style={{marginBottom: '3rem'}}>ノンコア業務を別会社化し、構造を変える。</p>
      
      <div className="flex-center" style={{ width: '100%', gap: '2rem' }}>
        
        {/* Parent */}
        <div className="card box" style={{ width: '300px', border: '2px solid var(--text-primary)' }}>
          <i className="fa-solid fa-building fa-3x"></i>
          <h3 style={{marginTop: '1rem'}}>御社 (母体)</h3>
          <p className="sub-caption">コア業務に集中</p>
        </div>

        {/* Arrow */}
        <div style={{ flex: 1, position: 'relative', height: '60px' }} className="flex-center">
          <div style={{ position: 'absolute', top: '-20px', fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>業務委託</div>
          <div className="arrow-line" style={{ width: '100%', height: '4px', background: 'var(--accent-gold)' }}></div>
          <i className="fa-solid fa-caret-right fa-2x" style={{ color: 'var(--accent-gold)', position: 'absolute', right: '-10px' }}></i>
        </div>

        {/* Child */}
        <div className="card box" style={{ width: '300px', background: 'var(--text-primary)', color: 'white' }}>
          <i className="fa-solid fa-hand-holding-heart fa-3x" style={{ color: 'var(--accent-gold)' }}></i>
          <h3 style={{marginTop: '1rem', color: 'var(--accent-gold)' }}>新設子会社</h3>
          <p className="sub-caption" style={{color: '#ccc'}}>就労支援事業所</p>
        </div>

      </div>
    </div>
  );
};
export default Slide4;