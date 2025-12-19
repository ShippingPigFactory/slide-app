import React from 'react';
import './Slide8.css';

const Slide8 = () => {
  return (
    <div className="slide8-wrapper">
      <div className="s8-header">
        <h2>月次収支シミュレーション（概算）</h2>
        <p className="s8-sub-text">A型10名・B型10名、21日/月フル稼働時のモデルケース</p>
        <div className="s8-accent-line"></div>
      </div>

      <div className="s8-sim-container">

        {/* 1. 収入エリア (青) */}
        <div className="s8-section revenue-section">
          <div className="sec-label">
            <span className="badge-icon"><i className="fa-solid fa-sack-dollar"></i> サービス報酬</span>
          </div>
          <div className="sec-value">
            400<span className="unit">万円</span>
          </div>
        </div>

        <div className="s8-arrow"><i className="fa-solid fa-minus"></i></div>

        {/* 2. 支出エリア (赤枠) */}
        <div className="s8-section expense-section">
          <div className="expense-header">
            <span className="badge-icon red"><i className="fa-solid fa-money-bill-transfer"></i> 支出計</span>
            <span className="header-val">310<span className="unit-s">万円</span></span>
          </div>

          <div className="expense-grid">
            {/* スタッフ */}
            <div className="exp-card">
              <div className="exp-title">スタッフ人件費</div>
              <ul className="exp-list">
                <li>サービス管理者<span>30</span></li>
                <li>職業指導員 × 2<span>40</span></li>
                <li>生活支援員 × 2<span>40</span></li>
              </ul>
              <div className="exp-subtotal">計 110万円</div>
            </div>

            {/* 利用者 */}
            <div className="exp-card">
              <div className="exp-title">利用者工賃</div>
              <ul className="exp-list">
                <li>A型(10名) <span>90</span></li>
                <li>B型(10名) <span>50</span></li>
              </ul>
              <div className="exp-subtotal">計 140万円</div>
            </div>

            {/* 家賃・光熱費 */}
            <div className="exp-card mini">
              <div className="exp-title">家賃・光熱費等</div>
              <div className="exp-single-val">30</div>
            </div>

            {/* 諸経費 */}
            <div className="exp-card mini">
              <div className="exp-title">諸経費</div>
              <div className="exp-single-val">30</div>
            </div>
          </div>
        </div>

        <div className="s8-arrow"><i className="fa-solid fa-equals"></i></div>

        {/* 3. 利益エリア (ゴールド) */}
        <div className="s8-section profit-section">
          <div className="sec-label">
            <span className="badge-icon gold"><i className="fa-solid fa-gem"></i> 営業利益</span>
          </div>
          <div className="sec-value">
            90<span className="unit">万円</span>
          </div>
          <div className="profit-annual">
            年間効果：約 1,080万円
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slide8;