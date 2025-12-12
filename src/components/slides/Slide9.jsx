import React from 'react';
import './Slide9.css';

const Slide9 = () => {
  return (
    <div className="slide9-wrapper">
      <div className="s9-header">
        <h2>効果②：助成金・補助金収入</h2>
        <p className="s9-sub-text">安定した収益源としての給付金</p>
        <div className="s9-accent-line"></div>
      </div>

      <div className="s9-content">
        {/* 左側：月次推移チャート */}
        <div className="s9-card">
          <div className="s9-card-header">
            <i className="fa-solid fa-chart-line"></i>
            <h3>安定した月次収入</h3>
          </div>

          <div className="s9-chart-box line-chart-box">
            {/* CSS簡易折れ線グラフ */}
            <svg viewBox="0 0 400 200" className="s9-svg">
              {/* 補助線 */}
              <line x1="20" y1="180" x2="380" y2="180" stroke="#eee" />
              <line x1="20" y1="100" x2="380" y2="100" stroke="#eee" />
              <line x1="20" y1="20" x2="380" y2="20" stroke="#eee" />

              {/* 右肩上がりの曲線 */}
              <path d="M 30 170 Q 100 120, 200 80 T 370 30"
                fill="none" stroke="#0044CC" strokeWidth="4" strokeLinecap="round" />

              <circle cx="30" cy="170" r="5" fill="#0044CC" />
              <circle cx="115" cy="125" r="5" fill="#0044CC" />
              <circle cx="200" cy="80" r="5" fill="#0044CC" />
              <circle cx="285" cy="50" r="5" fill="#0044CC" />
              <circle cx="370" cy="30" r="5" fill="#0044CC" />
            </svg>
            <div className="s9-axis">
              <span>4月</span><span>6月</span><span>8月</span><span>10月</span><span>12月</span><span>2月</span>
            </div>
          </div>
          <div className="s9-footer-msg">
            毎月安定した給付金で収益基盤を強化
          </div>
        </div>

        {/* 右側：補助金内訳チャート */}
        <div className="s9-card">
          <div className="s9-card-header">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <h3>主な助成金・補助金</h3>
          </div>

          <div className="s9-chart-box bar-chart-box">
            <div className="h-bar-group">
              <div className="h-bar-label">訓練等給付費</div>
              <div className="h-bar-bg">
                <div className="h-bar-fill fill-large"></div>
              </div>
            </div>
            <div className="h-bar-group">
              <div className="h-bar-label">特定処遇改善加算</div>
              <div className="h-bar-bg">
                <div className="h-bar-fill fill-medium"></div>
              </div>
            </div>
            <div className="h-bar-group">
              <div className="h-bar-label">施設整備費補助金</div>
              <div className="h-bar-bg">
                <div className="h-bar-fill fill-small"></div>
              </div>
            </div>

            <div className="s9-scale">
              <span>0</span><span>1,000</span><span>3,000</span><span>5,000(万円)</span>
            </div>
          </div>

          <div className="s9-total-box">
            年間 <span className="highlight">5,000万円</span> 以上の収入源に
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9;