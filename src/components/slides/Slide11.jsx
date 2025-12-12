import React from 'react';
import './Slide11.css';

const Slide11 = () => {
  return (
    <div className="slide11-wrapper">
      <div className="s11-header">
        <h2>A型・B型ハイブリッド組織</h2>
        <p className="s11-sub-text">シンプルでわかりやすい組織構造</p>
        <div className="s11-accent-line"></div>
      </div>

      <div className="s11-content">
        {/* 左側：組織図 */}
        <div className="s11-org-chart">
          <div className="org-label">組織図</div>

          <div className="org-node manager">
            <span className="role">管理者</span>
            <span className="desc">事業所の運営責任者</span>
          </div>

          <div className="org-line-vertical"></div>

          <div className="org-node staff">
            <span className="role">支援員</span>
            <span className="desc">日常支援の担当</span>
          </div>

          <div className="org-line-branch"></div>

          <div className="org-row">
            <div className="org-node user-a">
              <span className="role">A型利用者</span>
              <span className="desc">雇用契約あり</span>
            </div>
            <div className="org-node user-b">
              <span className="role">B型利用者</span>
              <span className="desc">雇用契約なし</span>
            </div>
          </div>

          {/* サビ管（横に配置） */}
          <div className="org-node sub-manager">
            <span className="role">サビ管</span>
            <span className="desc">支援計画作成</span>
            <div className="connector-line"></div>
          </div>
        </div>

        {/* 右側：説明テキスト */}
        <div className="s11-details">
          <div className="detail-card">
            <h3><i className="fa-solid fa-user-tie"></i> サビ管の主な役割</h3>
            <ul>
              <li><i className="fa-solid fa-check"></i> 個別支援計画の作成と管理</li>
              <li><i className="fa-solid fa-check"></i> 支援員への指導・助言</li>
              <li className="note">※管理者と兼務も可能</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3><i className="fa-solid fa-users"></i> 必要なスタッフ配置</h3>
            <ul>
              <li><strong>管理者:</strong> 1名</li>
              <li><strong>サビ管:</strong> 1名以上</li>
              <li><strong>職業指導員・生活支援員:</strong> 利用者数に応じた人数</li>
            </ul>
          </div>

          <div className="detail-card highlight">
            <h3><i className="fa-solid fa-star"></i> 運営の要点</h3>
            <div className="points">
              <span><i className="fa-solid fa-arrow-right"></i> 法人格が必要</span>
              <span><i className="fa-solid fa-arrow-right"></i> 行政指定事業</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide11;