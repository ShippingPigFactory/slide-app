import React from 'react';
import './Slide18.css';

const Slide18 = () => {
  return (
    <div className="slide18-wrapper">
      <div className="s18-header">
        <h2>オプションサービス</h2>
        <p className="s18-sub-text">必要に応じて選べる追加サポート</p>
        <div className="s18-accent-line"></div>
      </div>

      <div className="s18-grid-three">
        {/* Option 1: 模擬監査 */}
        <div className="s18-option-card">
          <div className="s18-icon-circle cyan-circle">
            <i className="fa-solid fa-clipboard-check"></i>
          </div>
          <h3>弊社監査部による<br />模擬監査</h3>
          <div className="s18-price-box">
            <span className="price-val">10</span>
            <span className="price-unit">万円(税別)</span>
            <span className="price-note">+ 交通費</span>
          </div>
          <p className="s18-desc">実地指導に向けた事前チェックと<br />改善提案</p>
        </div>

        {/* Option 2: 採用支援 */}
        <div className="s18-option-card">
          <div className="s18-icon-circle blue-circle">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <h3>利用者の<br />採用支援</h3>
          <div className="s18-price-box">
            <span className="price-val">50</span>
            <span className="price-unit">万円(税別)</span>
            <span className="price-note">+ 交通費</span>
          </div>
          <p className="s18-desc">募集戦略の立案から関係各所への同行・<br />見学会の開催などをサポート</p>
        </div>

        {/* Option 3: 業務提携支援 */}
        <div className="s18-option-card">
          <div className="s18-icon-circle navy-circle">
            <i className="fa-solid fa-handshake-simple"></i>
          </div>
          <h3>業務提携<br />支援</h3>
          <div className="s18-price-box">
            <span className="price-val">50</span>
            <span className="price-unit">万円(税別)</span>
            <span className="price-note">+ 交通費</span>
          </div>
          <p className="s18-desc">外部企業とのパートナーシップ構築を<br />支援・仕組化をサポート</p>
        </div>
      </div>
    </div>
  );
};

export default Slide18;