import React from 'react';
import './Slide21.css';

const Slide21 = () => {
    return (
        <div className="slide21-wrapper">
            <div className="s21-header">
                <h2>充実したサポート体制</h2>
                <p className="s21-sub-text">お客様の成功を4つのフェーズでバックアップ</p>
                <div className="s21-accent-line"></div>
            </div>

            <div className="s21-grid">
                {/* Phase 1 */}
                <div className="s21-card">
                    <div className="s21-icon-box"><i className="fa-solid fa-comments-dollar"></i></div>
                    <h3>導入前</h3>
                    <ul className="s21-list">
                        <li><i className="fa-regular fa-circle-check"></i> 無料相談・診断</li>
                        <li><i className="fa-regular fa-circle-check"></i> コスト削減提案</li>
                    </ul>
                </div>

                {/* Phase 2 */}
                <div className="s21-card">
                    <div className="s21-icon-box"><i className="fa-solid fa-shuttle-space"></i></div>
                    <h3>立ち上げ</h3>
                    <ul className="s21-list">
                        <li><i className="fa-regular fa-circle-check"></i> 会社設立支援</li>
                        <li><i className="fa-regular fa-circle-check"></i> 行政申請サポート</li>
                    </ul>
                </div>

                {/* Phase 3 */}
                <div className="s21-card">
                    <div className="s21-icon-box"><i className="fa-solid fa-gears"></i></div>
                    <h3>運営</h3>
                    <ul className="s21-list">
                        <li><i className="fa-regular fa-circle-check"></i> 利用者募集</li>
                        <li><i className="fa-regular fa-circle-check"></i> スタッフ研修</li>
                    </ul>
                </div>

                {/* Phase 4 */}
                <div className="s21-card">
                    <div className="s21-icon-box"><i className="fa-solid fa-chart-line"></i></div>
                    <h3>成長</h3>
                    <ul className="s21-list">
                        <li><i className="fa-regular fa-circle-check"></i> 業務斡旋</li>
                        <li><i className="fa-regular fa-circle-check"></i> 経営改善</li>
                    </ul>
                </div>
            </div>

            <div className="s21-footer-bar">
                <div className="consultant-icon"><i className="fa-solid fa-user-tie"></i></div>
                <span>専任コンサルタントが一貫してサポート</span>
            </div>
        </div>
    );
};

export default Slide21;