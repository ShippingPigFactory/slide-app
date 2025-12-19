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
                    </div>
                    <div className="value-info">
                        <span className="label">初回監査前に弊社監査部による<br />模擬検査実施</span>
                    </div>
                    <div className="period-info">
                        <span className="label">福祉関連法規変更への随時対応</span>
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
                            <p>業務ルールを設計し、専任コンサルタントによる利用者への直接指導を実施。<br />サービスの質を早期に安定化させます。</p>
                        </div>
                    </div>

                    <div className="service-item">
                        {/* アイコンを募集向けに変更 */}
                        <div className="icon-box premium-icon"><i className="fa-solid fa-bullhorn"></i></div>
                        <div className="text-box">
                            <h4>パートナー企業からの委託業務を斡旋</h4>
                            <p>提携している外部パートナー企業からの業務を斡旋することにより、繁忙期以外の利用者さんの作業を安定して提供します。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide17;