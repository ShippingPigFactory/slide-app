import React from 'react';
import './Slide16.css';

const Slide16 = () => {
    return (
        <div className="slide16-wrapper">
            <div className="s16-header">
                <h2>スタンダードプラン詳細</h2>
                <p className="s16-sub-text">運用安定化に特化した伴走支援パッケージ</p>
                <div className="s16-accent-line"></div>
            </div>

            <div className="s16-container">
                {/* 左サイド */}
                <div className="s16-left-box standard-theme">
                    <h3 className="plan-name">スタンダードプラン</h3>
                    <p className="plan-concept">事業を軌道に乗せる</p>

                    <div className="price-info">
                        <span className="label">初期費用</span>
                        <span className="price">100万円</span>
                    </div>
                    <div className="royalty-info">
                        <span className="label">月額ロイヤリティ</span>
                        <span className="rate">5〜7%</span>
                        <span className="note">(最低月額：8万円〜)</span>
                    </div>
                    <div className="period-info">
                        <span className="label">想定期間</span>
                        <span className="val">3〜6か月</span>
                    </div>
                </div>

                {/* 右サイド */}
                <div className="s16-right-list">
                    <h3 className="list-title text-standard">提供内容のハイライト</h3>

                    <div className="service-item">
                        <div className="icon-box standard-icon"><i className="fa-solid fa-user-gear"></i></div>
                        <div className="text-box">
                            <h4>管理者へのOJT</h4>
                            <p>現場責任者への実践的な指導で、運営スキルを確実に習得できます</p>
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="icon-box standard-icon"><i className="fa-solid fa-network-wired"></i></div>
                        <div className="text-box">
                            <h4>業務フロー構築支援</h4>
                            <p>母体ビジネスからの最適な業務切り出しと効率的なフロー設計をサポート</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide16;