import React from 'react';
import './Slide20.css';

const Slide20 = () => {
  return (
    <div className="slide20-wrapper">
      <div className="s20-header">
        <h2>導入フロー</h2>
        <p className="s20-sub-text">並行作業により最短5ヶ月で収益化を実現</p>
        <div className="s20-accent-line"></div>
      </div>

      <div className="s20-flow-chart">
        {/* Phase 1: 診断 */}
        <div className="flow-column">
          <div className="phase-label">Phase 1</div>
          <div className="phase-box">
            <div className="s20-step-card">
              <div className="step-icon-box cyan"><i className="fa-solid fa-magnifying-glass-dollar"></i></div>
              <h3>診断</h3>
              <span className="step-time">0-1ヶ月</span>
              <div className="step-desc">
                <p><i className="fa-regular fa-comments"></i> 無料相談</p>
                <p><i className="fa-solid fa-calculator"></i> コスト試算</p>
              </div>
            </div>
          </div>
        </div>

        {/* 矢印 1 */}
        <div className="flow-arrow-thick">
          <div className="arrow-line"></div>
          <div className="arrow-head"></div>
        </div>

        {/* Phase 2: 設立 & 準備 (並行) */}
        <div className="flow-column phase2-column">
          <div className="phase-label">Phase 2 (並行)</div>
          <div className="phase-box">
            {/* 上段: 設立 */}
            <div className="s20-step-card">
              <div className="step-icon-box cyan"><i className="fa-solid fa-file-signature"></i></div>
              <h3>設立</h3>
              <span className="step-time">2-4ヶ月</span>
              <div className="step-desc">
                <p><i className="fa-solid fa-building"></i> 法人設立支援</p>
                <p><i className="fa-solid fa-stamp"></i> 許認可取得</p>
              </div>
            </div>

            {/* 下段: 準備 */}
            <div className="s20-step-card">
              <div className="step-icon-box blue"><i className="fa-solid fa-users-gear"></i></div>
              <h3>準備</h3>
              <span className="step-time">2-4ヶ月</span>
              <div className="step-desc">
                <p><i className="fa-solid fa-user-plus"></i> スタッフ採用</p>
                <p><i className="fa-solid fa-handshake"></i> 利用者募集</p>
              </div>
            </div>
          </div>
        </div>

        {/* 矢印 2 */}
        <div className="flow-arrow-thick">
          <div className="arrow-line"></div>
          <div className="arrow-head"></div>
        </div>

        {/* Phase 3: 運用 */}
        <div className="flow-column">
          <div className="phase-label">Phase 3</div>
          <div className="phase-box">
            <div className="s20-step-card highlight">
              <div className="step-icon-box navy"><i className="fa-solid fa-rocket"></i></div>
              <h3>運用</h3>
              <span className="step-time">5ヶ月目〜</span>
              <div className="step-desc">
                <p><i className="fa-solid fa-list-check"></i> 業務開始</p>
                <p><i className="fa-solid fa-chart-line"></i> 収益化実現</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="s20-bottom-note">
        <div className="note-icon"><i className="fa-regular fa-lightbulb"></i></div>
        <div className="note-text">
          <strong>導入のポイント</strong>
          <p>「設立手続き」と「人材・利用者確保」を同時並行で進めることで、リードタイムを短縮し早期の黒字化を目指します。</p>
        </div>
      </div>
    </div>
  );
};

export default Slide20;