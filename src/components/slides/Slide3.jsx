import React from 'react';
import './Slide3.css';

const Slide3 = () => {
  return (
    <div className="slide3-wrapper">
      <div className="s3-header">
        <h2>人件費高騰 × 人手不足の深刻な現実</h2>
        <p className="s3-sub-text">データで見るノンコア業務のコスト構造硬直化</p>
        <div className="s3-accent-line"></div>
      </div>

      <div className="s3-charts-container">
        {/* 左グラフ */}
        <div className="s3-chart-box">
          <div className="s3-chart-title">
            <span className="s3-icon">¥</span> 最低賃金の上昇トレンド
          </div>
          <div className="s3-chart-content">
            <div className="s3-line-chart">
              {/* 簡易SVGグラフ */}
              <svg viewBox="0 0 300 150" className="chart-svg">
                <polyline
                  points="10,130 60,110 120,90 180,75 240,45 290,15"
                  fill="none" stroke="#2b7ae0" strokeWidth="4"
                />
                <circle cx="10" cy="130" r="4" fill="#2b7ae0" />
                <circle cx="290" cy="15" r="4" fill="#2b7ae0" />
              </svg>
              <div className="s3-x-axis">
                <span>2016</span><span>2023</span>
              </div>
            </div>
            <div className="s3-legend">
              <span className="dot blue"></span> 全国平均最低賃金(円)
            </div>
            <p className="s3-note">※2016年から継続的な上昇により、5年間で約20%増加</p>
          </div>
        </div>

        {/* 右グラフ */}
        <div className="s3-chart-box">
          <div className="s3-chart-title">
            <span className="s3-icon"><i className="fa-solid fa-user"></i></span> 有効求人倍率の高止まり
          </div>
          <div className="s3-chart-content">
            <div className="s3-bar-chart">
              {[1, 2, 3, 4].map((i) => (
                <div className="bar-group" key={i}>
                  <div className="bar blue" style={{ height: `${30 + i * 5}%` }}></div>
                  <div className="bar orange" style={{ height: `${50 + i * 8}%` }}></div>
                </div>
              ))}
            </div>
            <div className="s3-legend">
              <span className="dot blue"></span> 全業種
              <span className="dot orange"></span> 物流・倉庫業
            </div>
            <p className="s3-note">※コロナ禍を経て再び上昇傾向、特に物流業界は深刻</p>
          </div>
        </div>
      </div>

      <div className="s3-stats-row">
        <div className="s3-stat">
          <h4>物流・出荷業務の人員不足率</h4>
          <div className="stat-val">38.7%</div>
          <p>全業種平均より12.3%高い</p>
        </div>
        <div className="s3-stat border-sides">
          <h4>人件費上昇による粗利益への影響</h4>
          <div className="stat-val">▲8.2%</div>
          <p>過去3年間の平均削減幅</p>
        </div>
        <div className="s3-stat">
          <h4>コスト構造硬直化による事業リスク</h4>
          <div className="stat-val">76.3%</div>
          <p>中小企業が「大きな課題」と回答</p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;