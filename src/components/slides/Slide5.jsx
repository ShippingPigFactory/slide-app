import React from 'react';
import './Slide5.css';

const Slide5 = () => {
  return (
    <div className="slide5-wrapper">
      <div className="s5-header">
        <h2>就労支援スキーム活用</h2>
        <p className="s5-sub-text">コスト削減と収益向上を同時に実現する革新的モデル</p>
        <div className="s5-accent-line"></div>
      </div>

      {/* スキーム図エリア */}
      <div className="s5-scheme-container">
        {/* 左：母体企業 */}
        <div className="s5-box company-box">
          <div className="s5-icon"><i className="fa-solid fa-building"></i></div>
          <h3>母体企業</h3>
          <p>既存事業運営</p>
        </div>

        {/* 中央：循環矢印（SVG） */}
        <div className="s5-connection-cycle">
          <svg viewBox="0 0 300 100" className="cycle-svg">
            <defs>
              {/* 青い矢印の先端 */}
              <marker id="arrow-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#00A0E9" />
              </marker>
              {/* 黄色の矢印の先端 */}
              <marker id="arrow-gold" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#FFC107" />
              </marker>
            </defs>

            {/* 上の矢印（業務委託）：左から右へ */}
            <path d="M 10 50 Q 150 -10 290 50" fill="none" stroke="#00A0E9" strokeWidth="6" markerEnd="url(#arrow-blue)" />

            {/* 下の矢印（納品）：右から左へ */}
            <path d="M 290 70 Q 150 130 10 70" fill="none" stroke="#FFC107" strokeWidth="6" markerEnd="url(#arrow-gold)" />
          </svg>

          {/* ラベル */}
          <div className="cycle-label label-top">
            <span className="label-bg blue">業務委託</span>
          </div>
          <div className="cycle-label label-bottom">
            <span className="label-bg gold">納品</span>
          </div>
        </div>

        {/* 右：就労支援施設 */}
        <div className="s5-box facility-box">
          <div className="s5-icon"><i className="fa-solid fa-users"></i></div>
          <h3>就労支援施設</h3>
          <p>A型/B型/ハイブリッド</p>
        </div>
      </div>

      {/* 下部の3つのボックス */}
      <div className="s5-bottom-grid">
        <div className="s5-feature-card">
          <h4>ノンコア業務の外製化</h4>
          {/* <p><i className="fa-solid fa-check"></i> 出荷・検品・軽作業など</p> */}
        </div>
        <div className="s5-feature-card">
          <h4>助成金収益による実質コストの削減</h4>
          {/* <p><i className="fa-solid fa-yen-sign"></i> </p> */}
        </div>
        {/* <div className="s5-feature-card">
          <h4>伴走支援</h4>
          <p><i className="fa-solid fa-hands-helping"></i> 設立から許認可取得まで</p>
        </div> */}
      </div>
    </div>
  );
};

export default Slide5;