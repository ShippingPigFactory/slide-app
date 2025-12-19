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
                            <p>専任コンサルタントによる現場スタッフへの直接指導や、管理者向けの運営ノウハウ研修を実施し、サービスの質を早期に安定化させます。</p>
                        </div>
                    </div>

                    <div className="service-item">
                        {/* アイコンを募集向けに変更 */}
                        <div className="icon-box premium-icon"><i className="fa-solid fa-bullhorn"></i></div>
                        <div className="text-box">
                            <h4>高度な業務切り出し・工程設計（ジョブデザイン）</h4>
                            <p>母体事業の複雑な業務を、障がい特性に合わせて遂行可能なレベルまで細分化・構造化（マニュアル化）し、現場が自走できる業務フローを構築・提供します。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide17;