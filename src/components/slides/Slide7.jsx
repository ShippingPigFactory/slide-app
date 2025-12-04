import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide7 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".big-stat", { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out" });
        gsap.to(".counter", { innerText: 50000, duration: 2, snap: { innerText: 100 }, ease: "power2.out", 
          onUpdate: function() { this.targets()[0].innerHTML = Math.ceil(this.targets()[0].innerText).toLocaleString() + "<span style='font-size:2rem'>円</span>"; } 
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>実績は「信頼」の証</h2>
      <div className="flex-row" style={{ marginTop: '3rem', justifyContent: 'center', gap: '5rem' }}>
        
        <div style={{ flex: 1, textAlign: 'right' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>平均工賃実績</p>
          <div className="big-stat text-gold" style={{ fontSize: '5rem', fontWeight: '800', lineHeight: 1 }}>
            <span className="counter">0</span>
          </div>
          <p className="sub-caption" style={{ marginTop: '1rem' }}>全国平均の <strong style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>2.17倍</strong></p>
        </div>

        <div style={{ width: '2px', background: '#ddd' }}></div>

        <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <i className="fa-solid fa-check text-gold" style={{ marginRight: '10px' }}></i>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>人材定着率 98%</span>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <i className="fa-solid fa-check text-gold" style={{ marginRight: '10px' }}></i>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>モチベーション向上</span>
          </div>
          <p className="sub-caption">適正な報酬が、高品質な労働力を生む。</p>
        </div>

      </div>
    </div>
  );
};
export default Slide7;