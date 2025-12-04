import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide2 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".stat-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 });
        gsap.fromTo(".number", { scale: 0 }, { scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>経営を圧迫する「詰み」</h2>
      <div className="flex-row" style={{ marginTop: '4rem', justifyContent: 'center' }}>
        
        {/* Card 1 */}
        <div className="card stat-card" style={{ flex: 1, maxWidth: '400px' }}>
          <i className="fa-solid fa-arrow-trend-up fa-3x" style={{ color: 'var(--accent-alert)' }}></i>
          <h3 style={{ margin: '1rem 0' }}>賃金高騰</h3>
          <div className="number text-huge" style={{ color: 'var(--accent-alert)' }}>+24%</div>
          <p className="sub-caption">最低賃金上昇率 (5年)</p>
        </div>

        {/* Card 2 */}
        <div className="card stat-card" style={{ flex: 1, maxWidth: '400px' }}>
          <i className="fa-solid fa-user-xmark fa-3x" style={{ color: 'var(--text-secondary)' }}></i>
          <h3 style={{ margin: '1rem 0' }}>採用難</h3>
          <div className="number text-huge" style={{ color: 'var(--text-secondary)' }}>ZERO</div>
          <p className="sub-caption">有効応募数</p>
        </div>

      </div>
    </div>
  );
};
export default Slide2;