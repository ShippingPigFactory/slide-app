import React from 'react';
import './Slide15.css';

const Slide15 = () => {
  return (
    <div className="slide15-wrapper">
      <div className="s15-header">
        <h2>ベーシックプラン詳細</h2>
        <p className="s15-sub-text">立ち上げ支援に特化したスターターパッケージ</p>
        <div className="s15-accent-line"></div>
      </div>

      <div className="s15-container">
        {/* 左サイド：プラン概要 */}
        <div className="s15-left-box basic-theme">
          <h3 className="plan-name">ベーシックプラン</h3>
          <p className="plan-concept">事業の土台作り</p>

          <div className="price-info">
            <span className="label">初期費用</span>
            <span className="price">110万円</span>
          </div>
          <div className="royalty-info">
            <span className="label">月額ロイヤリティ</span>
            <span className="rate">3%</span>
            <span className="note"></span>
          </div>
          <div className="period-info">
            <span className="label">初回監査前に弊社監査部による<br />模擬検査実施</span>
            {/* <span className="val">10万(税別) + 交通費</span> */}
          </div>
          <div className="period-info">
            <span className="label">福祉関連法規変更への随時対応</span>
            {/* <span className="val">10万(税別) + 交通費</span> */}
          </div>
        </div>

        {/* 右サイド：提供内容 */}
        <div className="s15-right-list">
          <h3 className="list-title text-basic">提供内容</h3>

          <div className="service-item">
            <div className="icon-box basic-icon"><i className="fa-solid fa-building"></i></div>
            <div className="text-box">
              <h4>新会社設立・事業所開設</h4>
              <p>最適な会社形態の選定から事業所開設まで一貫サポート</p>
            </div>
          </div>

          <div className="service-item">
            <div className="icon-box basic-icon"><i className="fa-solid fa-file-pen"></i></div>
            <div className="text-box">
              <h4>許認可申請サポート</h4>
              <p>行政手続きをスムーズに進めるための専門知識を提供</p>
            </div>
          </div>

          <div className="service-item">
            <div className="icon-box basic-icon"><i className="fa-solid fa-book"></i></div>
            <div className="text-box">
              <h4>マニュアル・テンプレート一式</h4>
              <p>運営に必要な基本書類・フォーマットをすぐに活用可能</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide15;