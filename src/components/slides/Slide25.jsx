import React from 'react';
import './Slide25.css';

const Slide25 = () => {
  return (
    <div className="slide25-wrapper">
      <div className="s25-header">
        <h2>お問い合わせ・次のステップ</h2>
        <p className="s25-sub-text">シンプル4ステップで導入を開始</p>
      </div>

      <div className="s25-steps-grid">
        <div className="s25-step-card">
          <div className="num-circle">1</div>
          <h3>無料相談</h3>
          <p>オンラインまたは対面で、課題をヒアリング。</p>
          <span className="time-badge">30～60分</span>
        </div>
        <div className="s25-step-card">
          <div className="num-circle">2</div>
          <h3>適合性診断</h3>
          <p>コスト削減シミュレーションを作成。</p>
          <span className="time-badge">1週間</span>
        </div>
        <div className="s25-step-card">
          <div className="num-circle">3</div>
          <h3>提案・見積</h3>
          <p>カスタム導入プランをご提案。</p>
          <span className="time-badge">1〜2週間</span>
        </div>
        <div className="s25-step-card active">
          <div className="num-circle">4</div>
          <h3>契約開始</h3>
          <p>専任コンサルタントが伴走サポート。</p>
          <span className="time-badge">2〜3ヶ月</span>
        </div>
      </div>

      <div className="s25-footer-area">
        <div className="contact-info">
          <h3>stera star株式会社 (stera rehope株式会社)</h3>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <span>所在地: </span><p>〒779-3303<br />徳島県吉野川市川島町山田字芝生106</p></div>
          <p>営業時間: 平日 9:00〜17:00</p>
          <p>対応エリア: 徳島県内（他県は順次拡大予定）</p>
          <div className="cta-phone">
            <i className="fa-solid fa-phone"></i> 0883-36-1804
            <span className="mail"><i className="fa-solid fa-envelope"></i> info@sterastar.jp</span>
          </div>
        </div>

        <div className="cta-message">
          <h3>コスト削減と<br />社会貢献の両立</h3>
          <p>低初期費用・低ロイヤリティ</p>
          <p>持続可能な事業構造へ</p>
          <button className="cta-button">無料相談を予約する <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Slide25;