import React from 'react';
import './Slide8.css';

const Slide8 = () => {
  // --- 条件設定 ---
  const revenueTotal = 400; // 収入 (万円)

  // 支出1: スタッフ人件費
  const costStaff = {
    sabikan: 30,
    vocational: 20,
    life: 20,
    instructor: 20
  };
  const totalStaffCost = Object.values(costStaff).reduce((a, b) => a + b, 0); // 90万円

  // 支出2: 利用者賃金・工賃
  const costUser = {
    typeA: 90, // 10名
    typeB: 50  // 10名
  };
  const totalUserCost = costUser.typeA + costUser.typeB; // 140万円

  // 支出3: その他経費 (追加)
  const costFacility = 30; // 家賃光熱費等
  const costMisc = 30;     // 諸経費

  // 支出合計
  const totalExpense = totalStaffCost + totalUserCost + costFacility + costMisc; // 290万円

  // 利益 (手残り)
  const profit = revenueTotal - totalExpense; // 110万円

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
            {revenueTotal}<span className="unit">万円</span>
          </div>
        </div>

        <div className="s8-arrow"><i className="fa-solid fa-minus"></i></div>

        {/* 2. 支出エリア (赤枠) */}
        <div className="s8-section expense-section">
          <div className="expense-header">
            <span className="badge-icon red"><i className="fa-solid fa-money-bill-transfer"></i> 支出計</span>
            <span className="header-val">{totalExpense}<span className="unit-s">万円</span></span>
          </div>

          <div className="expense-grid">
            {/* スタッフ */}
            <div className="exp-card">
              <div className="exp-title">スタッフ人件費</div>
              <ul className="exp-list">
                <li>サビ管 <span>{costStaff.sabikan}</span></li>
                <li>職業指導 <span>{costStaff.vocational}</span></li>
                <li>生活支援 <span>{costStaff.life}</span></li>
                <li>賃金向上 <span>{costStaff.instructor}</span></li>
              </ul>
              <div className="exp-subtotal">計 {totalStaffCost}万</div>
            </div>

            {/* 利用者 */}
            <div className="exp-card">
              <div className="exp-title">利用者工賃</div>
              <ul className="exp-list">
                <li>A型(10名) <span>{costUser.typeA}</span></li>
                <li>B型(10名) <span>{costUser.typeB}</span></li>
              </ul>
              <div className="exp-subtotal">計 {totalUserCost}万</div>
            </div>

            {/* 家賃・光熱費 */}
            <div className="exp-card mini">
              <div className="exp-title">家賃・光熱費等</div>
              <div className="exp-single-val">{costFacility}万</div>
            </div>

            {/* 諸経費 */}
            <div className="exp-card mini">
              <div className="exp-title">諸経費</div>
              <div className="exp-single-val">{costMisc}万</div>
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
            {profit}<span className="unit">万円</span>
          </div>
          <div className="profit-annual">
            年間効果：約 {(profit * 12).toLocaleString()}万円
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slide8;