// src/App.jsx
import React, { useState } from 'react';
import './App.css';

// 作成したスライドファイルをインポート
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide5 from './components/slides/Slide5';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import Slide15 from './components/slides/Slide15';
import Slide17 from './components/slides/Slide17';
import Slide18 from './components/slides/Slide18';
import Slide20 from './components/slides/Slide20';
import Slide22 from './components/slides/Slide22';
import Slide23 from './components/slides/Slide23';
import Slide25 from './components/slides/Slide25';

function App() {
  // 現在のページ番号（0始まり）
  const [currentPage, setCurrentPage] = useState(0);

  // ロゴデザインの状態管理 (0:Glass, 1:Neon, 2:Tech, 3:Ribbon)
  const [logoStyleIndex, setLogoStyleIndex] = useState(1);

  // 表示するスライドのリスト
  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide5 key="slide5" />,
    <Slide7 key="slide7" />,
    <Slide8 key="slide8" />,
    <Slide13 key="slide13" />,
    <Slide14 key="slide14" />,
    <Slide15 key="slide15" />,
    <Slide17 key="slide17" />,
    <Slide18 key="slide18" />,
    <Slide20 key="slide20" />,
    <Slide22 key="slide22" />,
    <Slide23 key="slide23" />,
    <Slide25 key="slide25" />,
  ];

  // 次へ
  const handleNext = () => {
    if (currentPage < slides.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // 前へ
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // ロゴ切り替え関数
  const toggleLogoStyle = () => {
    // setLogoStyleIndex((prev) => (prev + 1) % 4);
  };

  // ロゴコンポーネントのレンダリング
  const renderLogo = () => {
    switch (logoStyleIndex) {
      case 0: // 案1: フロストグラス
        return (
          <div className="logo-container logo-style-glass" onClick={toggleLogoStyle} title="クリックでデザイン切替">
            <i className="fa-solid fa-star"></i> stera star
          </div>
        );
      case 1: // 案2: ネオン
        return (
          <div className="logo-container logo-style-neon" onClick={toggleLogoStyle} title="クリックでデザイン切替">
            STERA STAR<i className="fa-regular fa-star"></i>
          </div>
        );
      case 2: // 案3: テックタブ
        return (
          <div className="logo-container logo-style-tech" onClick={toggleLogoStyle} title="クリックでデザイン切替">
            <span>stera star</span>
            <span className="sub">REHOPE</span>
          </div>
        );
      default: // 元のリボン
        return (
          <div className="logo-container logo-style-ribbon" onClick={toggleLogoStyle} title="クリックでデザイン切替">
            stera star
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      {/* 共通パーツ */}
      {/* <div className="fixed-ribbon">
        <img src={`${Logo}`} alt="sterastarlogo" />
      </div> */}
      {/* ロゴ表示 (クリックで切り替わります) */}
      {renderLogo()}

      {/* スライド表示エリア：現在のページだけを描画 */}
      <div className="slide-display-area">
        {slides[currentPage]}
      </div>

      {/* ナビゲーション */}
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={currentPage === slides.length - 1}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="page-indicator">
        {currentPage + 1} / {slides.length}
      </div>
    </div>
  );
}

export default App;