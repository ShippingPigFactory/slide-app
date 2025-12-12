import React from 'react';
import './Slide7.css';

const Slide7 = () => {
  return (
    <div className="slide7-wrapper">
      <div className="s7-header">
        <h2>2つの収益効果</h2>
        <p className="s7-sub-text">二重の効果で投資回収を加速</p>
        <div className="s7-accent-line"></div>
      </div>

      <div className="s7-container">
        {/* 効果1：コスト削減 (青テーマ) */}
        <div className="s7-card card-blue">
          <div className="s7-icon-circle blue-icon">
            <i className="fa-solid fa-dollar-sign"></i>
          </div>
          <h3 className="s7-card-title text-blue">
            効果①<br />人件費・工賃の省コスト化
          </h3>

          <ul className="s7-list">
            <li><i className="fa-solid fa-check-circle text-blue"></i>ノンコア業務の人手不足を解消</li>
            <li><i className="fa-solid fa-check-circle text-blue"></i>助成金収益で実質コストダウン</li>
          </ul>

          {/* <div className="s7-stats-box bg-blue-light">
            <div className="stat-row">
              <span className="label">人件費削減率</span>
              <span className="value text-blue">約30〜50%</span>
            </div>
            <div className="stat-row">
              <span className="label">年間効果</span>
              <span className="value text-blue large">数百万円〜</span>
            </div>
          </div> */}
        </div>

        {/* 効果2：収入増 (緑/ミントテーマ) */}
        <div className="s7-card card-green">
          <div className="s7-icon-circle green-icon">
            <i className="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <h3 className="s7-card-title text-green">
            効果②<br />助成金・給付費収入
          </h3>

          <ul className="s7-list">
            <li><i className="fa-solid fa-check-circle text-green"></i> 訓練等給付費（国保連から毎月入金）</li>
            <li><i className="fa-solid fa-check-circle text-green"></i> 特定加算と自治体助成で安定収益</li>
          </ul>

          {/* <div className="s7-stats-box bg-green-light">
            <div className="stat-row">
              <span className="label">月額給付費<small>(一人当たり)</small></span>
              <span className="value text-green">7〜12万円</span>
            </div>
            <div className="stat-row">
              <span className="label">収益特性</span>
              <span className="value text-green large">安定継続収入</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slide7;