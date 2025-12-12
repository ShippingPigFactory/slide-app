import React from 'react';
import './Slide2.css';

const Slide2 = () => {
  return (
    <div className="slide2-wrapper">
      <div className="s2-header">
        <h2>御社のこんな課題、ありませんか？</h2>
        <p className="s2-sub-text">企業が直面する人材・コスト・雇用の構造的課題</p>
        <div className="s2-accent-line"></div>
      </div>

      <div className="s2-grid">
        {/* Card 1 */}
        <div className="s2-card">
          <div className="s2-icon"><i className="fa-solid fa-chart-line"></i></div>
          <h3>人件費の高騰</h3>
          {/* <p>最低賃金の上昇で利益率が低下</p> */}
        </div>

        {/* Card 2 */}
        <div className="s2-card">
          <div className="s2-icon"><i className="fa-solid fa-user-clock"></i></div>
          <h3>慢性的な人手不足</h3>
          {/* <p>ノンコア業務の人員確保困難</p> */}
        </div>

        {/* Card 3 */}
        <div className="s2-card">
          <div className="s2-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
          <h3>外注費上昇</h3>
          {/* <p>コスト増でも品質は不安定</p> */}
        </div>

        {/* Card 4 */}
        <div className="s2-card">
          <div className="s2-icon"><i className="fa-solid fa-user-graduate"></i></div>
          <h3>採用・教育コストの増加</h3>
          {/* <p>若手の早期離職が経営課題に</p> */}
        </div>

        {/* Card 5 */}
        <div className="s2-card">
          <div className="s2-icon"><i className="fa-solid fa-robot"></i></div>
          <h3>自動化の難しさ</h3>
          {/* <p>初期投資額が大きく回収困難</p> */}
        </div>

        {/* Card 6 (追加: 障がい者雇用) */}
        <div className="s2-card">
          <div className="s2-icon"><i className="fa-solid fa-universal-access"></i></div>
          <h3>障がい者雇用の難しさ</h3>
          {/* <p>法定雇用率の達成や、業務切り出し・定着支援のノウハウ不足</p> */}
        </div>
      </div>

      <div className="s2-banner">
        これらの課題を同時に解決する新たな選択肢があります
      </div>
    </div>
  );
};

export default Slide2;