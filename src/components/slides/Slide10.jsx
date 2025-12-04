import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide10 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".timeline-line", { width: 0, duration: 1.5, ease: "power2.out" });
        gsap.from(".time-point", { scale: 0, opacity: 0, stagger: 0.3, delay: 0.5, ease: "back.out" });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>導入ロードマップ</h2>
      
      <div style={{ position: 'relative', width: '90%', marginTop: '5rem' }}>
        {/* Line */}
        <div className="timeline-line" style={{ position: 'absolute', top: '25px', left: 0, height: '4px', background: 'var(--text-primary)', width: '100%', zIndex: 0 }}></div>
        
        <div className="flex-row" style={{ justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
          
          <div className="time-point" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-base)', border: '4px solid var(--text-primary)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>01</div>
            <h3>適合診断</h3>
            <p className="sub-caption">Month 1</p>
          </div>

          <div className="time-point" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-base)', border: '4px solid var(--text-primary)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>02</div>
            <h3>法人設立</h3>
            <p className="sub-caption">Month 2</p>
          </div>

          <div className="time-point" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-base)', border: '4px solid var(--text-primary)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>03</div>
            <h3>指定申請</h3>
            <p className="sub-caption">Month 3-5</p>
          </div>

          <div className="time-point" style={{ textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--accent-gold)', border: 'none', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><i className="fa-solid fa-flag-checkered"></i></div>
            <h3 className="text-gold">事業開始</h3>
            <p className="sub-caption">Month 6</p>
          </div>

        </div>
      </div>
      
      <p style={{ marginTop: '4rem', fontSize: '0.9rem' }}>※物件選定から開始まで約半年が目安です。</p>
    </div>
  );
};
export default Slide10;