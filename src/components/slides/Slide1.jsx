import React from 'react';
import './Slide1.css';

const Slide1 = () => {
  return (
    <div className="slide1-wrapper">

      <h1 className="s1-title">
        <p className="s1-main">就労支援フランチャイズ</p>
        <div className="s1-accent-bar"></div>
        <p>コスト構造改革支援事業</p>
      </h1>

      <p className="s1-subtitle">
        ノンコア業務のコスト削減と<br />
        安定した労働力確保を同時に実現
      </p>

      <ul className="s1-features">
        <li>
          <span className="s1-check"><i className="fa-solid fa-check"></i></span>
          2年間の実証済みモデル
        </li>
        <li>
          <span className="s1-check"><i className="fa-solid fa-check"></i></span>
          初期費用110万円から
        </li>
        <li>
          <span className="s1-check"><i className="fa-solid fa-check"></i></span>
          御社の課題に向き合う伴奏型支援
        </li>
      </ul>
    </div>
  );
};

export default Slide1;