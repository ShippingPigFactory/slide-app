import React from 'react';
import './Slide17.css';

const Slide17 = () => {
    return (
        <div className="slide17-wrapper">
            <div className="s17-header">
                <h2>プレミアムプラン詳細</h2>
                <p className="s17-sub-text">事業価値最大化に特化した最上位パッケージ</p>
                <div className="s17-accent-line"></div>
            </div>

            <div className="s17-container">
                {/* 左サイド */}
                <div className="s17-left-box premium-theme">
                    <h3 className="plan-name">プレミアムプラン</h3>
                    <p className="plan-concept">事業を"利益"に変える</p>

                    <div className="price-info">
                        <span className="label">初期費用</span>
                        <span className="price">210万円</span>
                    </div>
                    <div className="royalty-info">
                        <span className="label">月額ロイヤリティ</span>
                        <span className="rate">10%</span>
                        {/* <span className="note">(最低月額：12万円〜)</span> */}
                    </div>
                    <div className="value-info">
                        <span className="label">初回監査前に弊社監査部による<br />模擬検査付随</span>
                        {/* <span className="val-text">グループ全体の<br />収益構造改革</span> */}
                    </div>
                </div>

                {/* 右サイド */}
                <div className="s17-right-list">
                    <h3 className="list-title text-premium">提供内容 <span className="title-note">※ベーシックプランの全内容に加えて</span></h3>

                    <div className="service-item">
                        {/* アイコンを研修向けに変更 */}
                        <div className="icon-box premium-icon"><i className="fa-solid fa-chalkboard-user"></i></div>
                        <div className="text-box">
                            <h4>スタッフ研修・OJT</h4>
                            <p>専任コンサルタントによる現場スタッフへの直接指導や、管理者向けの運営ノウハウ研修を実施し、サービスの質を早期に安定化させます。</p>
                        </div>
                    </div>

                    <div className="service-item">
                        {/* アイコンを募集向けに変更 */}
                        <div className="icon-box premium-icon"><i className="fa-solid fa-bullhorn"></i></div>
                        <div className="text-box">
                            <h4>利用者募集の伴走支援</h4>
                            <p>行政機関や相談支援事業所との関係構築を主導し、安定的な利用者確保に向けた広報戦略の立案と実行をサポートします。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide17;