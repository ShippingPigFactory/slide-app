import React from 'react';
import './Slide6.css';

const Slide6 = () => {
  return (
    <div className="slide6-wrapper">
      <div className="s6-header">
        <h2>高工賃でもなお事業伸長</h2>
        <p className="s6-sub-text">すべてのステークホルダーに価値をもたらす両立モデル</p>
        <div className="s6-accent-line"></div>
      </div>

      <div className="s6-content">
        {/* 左側：工賃実績 */}
        <div className="s6-left-panel">
          <div className="s6-card">
            <h3>B型工賃実績</h3>
            <div className="s6-highlight-price">
              50,000<span className="unit">円/月</span>
            </div>
            <div className="s6-comparison-box">
              <p>全国平均比: <strong>2.17倍</strong></p>
              <span className="small-note">※全国平均工賃: 23,053円/月</span>
            </div>
          </div>
        </div>

        {/* 右側：成長グラフ */}
        <div className="s6-right-panel">
          <div className="s6-card">
            <h3>持続的な成長を実現</h3>
            <div className="s6-chart-area">
              <div className="s6-chart-legend">
                <span className="legend-item blue"></span> 出荷処理量
                <span className="legend-item cyan"></span> B型平均工賃
              </div>

              {/* CSSで描く簡易グラフ */}
              <div className="s6-graph-container">
                <svg viewBox="0 0 400 200" className="s6-svg">
                  {/* グリッド */}
                  <line x1="0" y1="180" x2="400" y2="180" stroke="#eee" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#eee" />

                  {/* 折れ線1: 出荷量 (濃い青) */}
                  <polyline points="20,160 110,140 200,110 290,80 380,50"
                    fill="none" stroke="#0044CC" strokeWidth="4" />
                  <circle cx="20" cy="160" r="4" fill="#0044CC" />
                  <circle cx="380" cy="50" r="4" fill="#0044CC" />

                  {/* 折れ線2: 工賃 (水色) */}
                  <polyline points="20,170 110,150 200,130 290,100 380,80"
                    fill="none" stroke="#00A0E9" strokeWidth="4" />
                  <circle cx="20" cy="170" r="4" fill="#00A0E9" />
                  <circle cx="380" cy="80" r="4" fill="#00A0E9" />
                </svg>
                <div className="s6-axis-x">
                  <span>2022 Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                  <span>2023 Q1</span>
                </div>
              </div>
            </div>

            <div className="s6-stats-grid">
              <div className="s6-stat-box">
                <p>出荷処理量（前年比）</p>
                <div className="stat-val">+32% <span className="up-arrow">↑</span></div>
              </div>
              <div className="s6-stat-box">
                <p>EC事業売上（前年比）</p>
                <div className="stat-val">+27% <span className="up-arrow">↑</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6;