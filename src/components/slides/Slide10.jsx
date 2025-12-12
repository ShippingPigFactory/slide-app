import React from 'react';
import './Slide10.css';

const Slide10 = () => {
  return (
    <div className="slide10-wrapper">
      <div className="s10-header">
        <h2>コスト削減シミュレーション</h2>
        <p className="s10-sub-text">Before / After で見る劇的なコスト構造の改善</p>
        <div className="s10-accent-line"></div>
      </div>

      <div className="s10-container">
        {/* 導入前 (赤系) */}
        <div className="s10-panel panel-before">
          <div className="s10-panel-header">
            <span className="badge-circle red">前</span>
            <h3>導入前</h3>
          </div>

          <ul className="s10-cost-list">
            <li>
              <span className="label"><i className="fa-solid fa-money-bill-wave"></i> 人件費</span>
              <span className="value red-text">1,800万円/年</span>
            </li>
            <li>
              <span className="label"><i className="fa-solid fa-handshake"></i> 外注費</span>
              <span className="value red-text">480万円/年</span>
            </li>
            <li>
              <span className="label"><i className="fa-solid fa-user-plus"></i> 採用育成費</span>
              <span className="value red-text">240万円/年</span>
            </li>
            <li>
              <span className="label"><i className="fa-solid fa-building"></i> 間接費</span>
              <span className="value red-text">360万円/年</span>
            </li>
          </ul>

          <div className="s10-total-box bg-red">
            <span className="total-label">年間総コスト</span>
            <span className="total-value">2,880万円</span>
          </div>
        </div>

        {/* 矢印エリア */}
        <div className="s10-arrow-area">
          <div className="arrow-text">導入効果</div>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </div>

        {/* 導入後 (青系) */}
        <div className="s10-panel panel-after">
          <div className="s10-panel-header">
            <span className="badge-circle blue">後</span>
            <h3>導入後</h3>
          </div>

          <ul className="s10-cost-list">
            <li>
              <span className="label"><i className="fa-solid fa-coins"></i> 最適化工賃</span>
              <span className="value blue-text">960万円/年</span>
            </li>
            <li>
              <span className="label"><i className="fa-solid fa-piggy-bank"></i> 給付費収入</span>
              <span className="value green-text">-540万円/年</span>
            </li>
            <li>
              <span className="label"><i className="fa-solid fa-user-shield"></i> 支援員コスト</span>
              <span className="value blue-text">360万円/年</span>
            </li>
            <li>
              <span className="label"><i className="fa-solid fa-sliders"></i> 間接費(標準化)</span>
              <span className="value blue-text">210万円/年</span>
            </li>
          </ul>

          <div className="s10-total-box bg-blue">
            <span className="total-label">年間実質コスト</span>
            <span className="total-value">990万円</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10;