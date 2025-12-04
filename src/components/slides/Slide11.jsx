import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide11 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".vision-circle", { scale: 0, opacity: 0, duration: 1, stagger: 0.3, ease: "elastic.out(1, 0.7)" });
        gsap.from(".plus", { opacity: 0, rotate: -90, delay: 0.8, duration: 0.5 });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>3年後のビジョン</h2>
      <p style={{ marginBottom: '4rem' }}>「利益」と「社会的責任」の両立を実現する企業へ。</p>
      
      <div className="flex-center" style={{ gap: '2rem' }}>
        
        <div className="vision-circle flex-col" style={{ width: '300px', height: '300px', borderRadius: '50%', background: 'white', boxShadow: 'var(--shadow-soft)', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fa-solid fa-chart-line fa-3x" style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}></i>
          <h3>Profit</h3>
          <p className="sub-caption">筋肉質な経営</p>
        </div>

        <div className="plus">
          <i className="fa-solid fa-plus fa-3x" style={{ color: '#ccc' }}></i>
        </div>

        <div className="vision-circle flex-col" style={{ width: '300px', height: '300px', borderRadius: '50%', background: 'white', boxShadow: 'var(--shadow-soft)', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fa-solid fa-users fa-3x" style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}></i>
          <h3>Social</h3>
          <p className="sub-caption">障害者雇用・地域貢献</p>
        </div>

      </div>

      <h3 className="text-gold" style={{ marginTop: '3rem', fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>Sustainable Growth</h3>
    </div>
  );
};
export default Slide11;