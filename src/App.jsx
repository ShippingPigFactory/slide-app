import React, { useState, useEffect } from 'react';
import './App.css';

// 全スライドのインポート
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12;

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container">
      
      {/* プレゼンテーション構成 */}
      <Slide1 isActive={currentSlide === 0} />
      <Slide2 isActive={currentSlide === 1} />
      <Slide3 isActive={currentSlide === 2} />
      <Slide4 isActive={currentSlide === 3} />
      <Slide5 isActive={currentSlide === 4} />
      <Slide6 isActive={currentSlide === 5} />
      <Slide7 isActive={currentSlide === 6} />
      <Slide8 isActive={currentSlide === 7} />
      <Slide9 isActive={currentSlide === 8} />
      <Slide10 isActive={currentSlide === 9} />
      <Slide11 isActive={currentSlide === 10} />
      <Slide12 isActive={currentSlide === 11} />

      {/* Controls */}
      <div className="controls">
        <button className="nav-btn" onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></button>
        <button className="nav-btn" onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></button>
      </div>

      {/* Slide Counter & Progress */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>
        {String(currentSlide + 1).padStart(2, '0')} <span style={{opacity: 0.5}}>/</span> {totalSlides}
      </div>
      <div className="progress-bar" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
    </div>
  );
};

export default App;