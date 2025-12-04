import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide3 = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const ctx = gsap.context(() => {
        gsap.from(".option-card", { y: 50, opacity: 0, duration: 0.6, stagger: 0.2 });
        gsap.from(".x-mark", { scale: 0, opacity: 0, delay: 1, duration: 0.5, ease: "back.out" });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isActive]);

  return (
    <div className={`slide-container ${isActive ? 'active' : ''}`} ref={containerRef}>
      <h2>既存の選択肢は「帯に短し...」</h2>
      <div className="flex-row" style={{ marginTop: '2rem', alignItems: 'stretch' }}>
        
        {/* Option 1 */}
        <div className="card option-card" style={{ flex: 1, position: 'relative' }}>
          <div className="x-mark" style={{ position: 'absolute', top: '-20px', right: '-20px', background: '#e74c3c', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}><i className="fa-solid fa-xmark"></i></div>
          <i className="fa-solid fa-people-arrows fa-3x" style={{ color: '#95a5a6', marginBottom: '1.5rem' }}></i>
          <h3>派遣・パート</h3>
          <p style={{ color: '#e74c3c', fontWeight: 'bold', marginTop: '1rem' }}>コスト高・離職</p>
          <p className="sub-caption">単価上昇が止まらず、<br/>定着もしない</p>
        </div>

        {/* Option 2 */}
        <div className="card option-card" style={{ flex: 1, position: 'relative' }}>
          <div className="x-mark" style={{ position: 'absolute', top: '-20px', right: '-20px', background: '#e74c3c', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}><i className="fa-solid fa-xmark"></i></div>
          <i className="fa-solid fa-robot fa-3x" style={{ color: '#95a5a6', marginBottom: '1.5rem' }}></i>
          <h3>ロボット・AI</h3>
          <p style={{ color: '#e74c3c', fontWeight: 'bold', marginTop: '1rem' }}>投資回収・硬直</p>
          <p className="sub-caption">初期投資が過大で、<br/>柔軟性がない</p>
        </div>

        {/* Option 3 (Solution) */}
        <div className="card option-card" style={{ flex: 1, border: '2px solid var(--accent-gold)', background: '#fffcf5' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: 'white', padding: '5px 20px', borderRadius: '20px', fontWeight: 'bold' }}>ANSWER</div>
          <i className="fa-solid fa-hand-holding-heart fa-3x text-gold" style={{ marginBottom: '1.5rem' }}></i>
          <h3 className="text-gold">福祉スキーム</h3>
          <p className="text-gold" style={{ fontWeight: 'bold', marginTop: '1rem' }}>低コスト・安定</p>
          <p className="sub-caption">公的支援を活用し、<br/>安価で安定確保</p>
        </div>

      </div>
    </div>
  );
};
export default Slide3;