import React from 'react';
import './Slide4.css';

const Slide4 = () => {
  return (
    <div className="slide4-wrapper">
      <div className="s4-header">
        <h2>従来の解決策の限界</h2>
        <p className="s4-sub-text">多くの企業が試みている対策とその課題点</p>
        <div className="s4-accent-line"></div>
      </div>

      <div className="s4-grid">
        {/* カード1: 派遣・パート */}
        <div className="s4-card">
          <div className="s4-icon-circle"><i className="fa-solid fa-user"></i></div>
          <h3>派遣・パート</h3>
          <ul className="s4-list">
            <li><strong>メリット:</strong> 即戦力として投入可能</li>
            <li><strong>デメリット:</strong> 人件費の上昇と高い離職率によりコスト効率が悪化</li>
          </ul>
          <div className="s4-alert-box">
            最低賃金上昇に伴い年々コスト増加。教育投資が流出するリスクも高く、長期的な解決策になりにくい。
          </div>
        </div>

        {/* カード2: 外注 */}
        <div className="s4-card">
          <div className="s4-icon-circle"><i className="fa-solid fa-handshake"></i></div>
          <h3>外注</h3>
          <ul className="s4-list">
            <li><strong>メリット:</strong> リソース変動に柔軟に対応可能</li>
            <li><strong>デメリット:</strong> 単価上昇と品質コントロールの難しさ</li>
          </ul>
          <div className="s4-alert-box">
            労働市場の逼迫により外注単価も上昇傾向。社外リソースへの依存で品質管理が難しく、顧客満足度に影響する。
          </div>
        </div>

        {/* カード3: 自動化 */}
        <div className="s4-card">
          <div className="s4-icon-circle"><i className="fa-solid fa-robot"></i></div>
          <h3>自動化</h3>
          <ul className="s4-list">
            <li><strong>メリット:</strong> 人件費削減と安定した品質</li>
            <li><strong>デメリット:</strong> 初期投資が大きく回収期間が長い</li>
          </ul>
          <div className="s4-alert-box">
            ロボット・AI導入には高額な初期投資が必要。業務変更に対応しづらく、中小企業にとっては投資回収リスクが大きい。
          </div>
        </div>
      </div>

      <div className="s4-footer-banner">
        <h3>既存の解決策だけでは乗り越えられない壁があります</h3>
        <p>人件費削減と品質維持、柔軟性と安定性を同時に実現する新たなアプローチが必要です</p>
      </div>
    </div>
  );
};

export default Slide4;