import React from 'react';
import './Slide8.css';

const Slide8 = () => {
  // --- 条件設定 ---
  const personCount = 2;       // 作業人数
  const daysPerMonth = 21;     // 月出勤日数
  const hoursPerDay = 4;       // 1日稼働時間

  const wageGeneral = 1300;    // 一般時給
  const wageTypeB = 700;       // B型工賃
  const subsidyPerPerson = 80000; // 助成金(月額/人)
  const adminRatio = 0.5;      // 管理者工数(0.5人分)

  // --- コスト計算 ---
  const costGeneral = wageGeneral * hoursPerDay * daysPerMonth * personCount; // 218,400

  // B型コスト
  const costWageB = wageTypeB * hoursPerDay * daysPerMonth * personCount; // 117,600
  const costAdmin = wageGeneral * hoursPerDay * daysPerMonth * adminRatio; // 54,600
  const costGrossB = costWageB + costAdmin; // 172,200
  const totalSubsidy = subsidyPerPerson * personCount; // 160,000

  // 実質負担
  const costNetB = costGrossB - totalSubsidy; // 12,200

  // 削減額・率
  const costDiff = costGeneral - costNetB;
  const reductionRate = Math.round((costDiff / costGeneral) * 100);

  // グラフ用パーセンテージ計算 (一般雇用コストを100%とする)
  const pctNet = (costNetB / costGeneral) * 100;
  const pctSubsidy = (totalSubsidy / costGeneral) * 100;

  return (
    <div className="slide8-wrapper">
      <div className="s8-header">
        <h2>運営実績シミュレーション</h2>
        <p className="s8-sub-text">管理者配置と助成金活用を含めた実質コスト比較（{personCount}名チーム）</p>
        <div className="s8-accent-line"></div>
      </div>

      <div className="s8-content">
        {/* 左側：詳細条件 */}
        <div className="s8-left-panel">
          <div className="s8-card condition-card">
            <h3><i className="fa-solid fa-calculator"></i> 試算条件</h3>
            <div className="condition-grid">
              <div className="condition-item">
                <span className="c-label">稼働</span>
                <span className="c-val">{hoursPerDay}h × {daysPerMonth}日</span>
              </div>
              <div className="condition-item">
                <span className="c-label">管理者</span>
                <span className="c-val">{adminRatio}人力</span>
              </div>
              <div className="condition-item highlight-bg">
                <span className="c-label">助成金</span>
                <span className="c-val">{subsidyPerPerson.toLocaleString()} 円/人</span>
              </div>
            </div>
          </div>

          <div className="s8-card comparison-detail">
            <h3>コスト構成内訳</h3>
            <div className="breakdown-list">
              <div className="breakdown-row general-row">
                <div className="bd-head"><span className="badge gray">一般雇用</span></div>
                <div className="bd-content">
                  <div className="bd-item">
                    <span>人件費 ({personCount}名)</span>
                    <strong>{costGeneral.toLocaleString()} 円</strong>
                  </div>
                </div>
              </div>

              <div className="breakdown-divider"><i className="fa-solid fa-arrow-down"></i></div>

              <div className="breakdown-row type-b-row">
                <div className="bd-head"><span className="badge blue">B型活用</span></div>
                <div className="bd-content">
                  <div className="bd-item">
                    <span>工賃 ({personCount}名)</span>
                    <span>{costWageB.toLocaleString()} 円</span>
                  </div>
                  <div className="bd-item">
                    <span>管理者 ({adminRatio}名)</span>
                    <span>+ {costAdmin.toLocaleString()} 円</span>
                  </div>
                  <div className="bd-item subsidy">
                    <span>助成金</span>
                    <span className="text-green">- {totalSubsidy.toLocaleString()} 円</span>
                  </div>
                  <div className="bd-total">
                    <span>実質負担</span>
                    <strong className="text-blue">{costNetB.toLocaleString()} 円</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右側：グラフ */}
        <div className="s8-right-panel">
          <div className="s8-card graph-card">
            <h3><i className="fa-solid fa-chart-pie"></i> 実質月額コスト比較</h3>

            <div className="s8-chart-area">
              {/* 一般雇用バー */}
              <div className="bar-column">
                <div className="bar-top-val">¥{costGeneral.toLocaleString()}</div>
                <div className="bar-track">
                  <div className="chart-bar bar-general" style={{ height: '100%' }}></div>
                </div>
                <div className="bar-label">一般雇用</div>
              </div>

              {/* B型バー（スタック） */}
              <div className="bar-column">
                <div className="bar-top-val text-blue">¥{costNetB.toLocaleString()}</div>
                <div className="bar-track">
                  {/* 実質負担分 (下) */}
                  <div className="chart-bar bar-net" style={{ height: `${pctNet}%` }}></div>

                  {/* 助成金による圧縮効果 (上) */}
                  <div className="subsidy-reduction-area"
                    style={{
                      bottom: `${pctNet}%`,
                      height: `${pctSubsidy}%`
                    }}>
                    <div className="subsidy-label">
                      助成金<br />
                      -¥{totalSubsidy.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="bar-label">B型実質</div>
              </div>
            </div>

            <div className="s8-result-box">
              <div className="result-row">
                月額削減効果 <span className="highlight-price">¥{costDiff.toLocaleString()}</span>
              </div>
              <div className="result-badge">
                コスト削減率 約<strong>{reductionRate}%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide8;