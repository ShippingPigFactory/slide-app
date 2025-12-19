import React from 'react';
import './Slide13.css';

const Slide13 = () => {
    return (
        <div className="slide13-wrapper">
            <div className="s13-header">
                <h2>提供サービスのご紹介</h2>
                <p className="s13-sub-text">立ち上げから運営定着まで、3つの柱で徹底サポート</p>
                <div className="s13-accent-line"></div>
            </div>

            <div className="s13-service-container">

                {/* Service 1: 申請・許認可 */}
                <div className="s13-service-card">
                    <div className="s13-icon-box color-cyan">
                        <i className="fa-solid fa-file-contract"></i>
                    </div>
                    <h3 className="s13-card-title">
                        <span className="num">01</span>
                        申請・許認可関連<br />サポート
                    </h3>
                    <p className="s13-card-desc">
                        許認可関連の煩雑な手続きを指導。<br />
                        書類作成のポイントを抑え、スムーズな事業認可取得をバックアップします。
                    </p>
                </div>

                {/* Service 2: 事業所運営 */}
                <div className="s13-service-card">
                    <div className="s13-icon-box color-blue">
                        <i className="fa-solid fa-store"></i>
                    </div>
                    <h3 className="s13-card-title">
                        <span className="num">02</span>
                        事業所運営に関する<br />不安を解消
                    </h3>
                    <p className="s13-card-desc">
                        事業所施設開設の最適な立地や物件のご提案から、毎月の給付金申請業務（レセプト）等の実務指導まで行います。
                    </p>
                </div>

                {/* Service 3: コンサル指導 */}
                <div className="s13-service-card">
                    <div className="s13-icon-box color-navy">
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <h3 className="s13-card-title">
                        <span className="num">03</span>
                        コンサルによる<br />運営指導
                    </h3>
                    <p className="s13-card-desc">
                        利用者さんとのかかわり方や支援計画の作成、スタッフの労務管理など、現場運営に必要なノウハウを提供します。
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Slide13;