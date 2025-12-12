import React from 'react';
import './Slide19.css';

const Slide19 = () => {
    return (
        <div className="slide19-wrapper">
            <div className="s19-header">
                <h2>料金体系とROI</h2>
                <p className="s19-sub-text">明確な費用対効果で安心導入</p>
                <div className="s19-accent-line"></div>
            </div>

            <div className="s19-container">
                {/* 左側：料金カード */}
                <div className="s19-plans-area">
                    <div className="s19-plan-card basic">
                        <h4>ベーシック</h4>
                        <div className="price-box">
                            <span className="label">初期費用</span>
                            <span className="val">100<span className="unit">万円</span></span>
                        </div>
                        <div className="roi-box">
                            <span className="label">月額ロイヤリティ</span>
                            <span className="val-small">3〜5%</span>
                        </div>
                    </div>

                    <div className="s19-plan-card standard">
                        <h4>スタンダード</h4>
                        <div className="price-box">
                            <span className="label">初期費用</span>
                            <span className="val">100<span className="unit">万円</span></span>
                        </div>
                        <div className="roi-box">
                            <span className="label">月額ロイヤリティ</span>
                            <span className="val-small">5〜7%</span>
                        </div>
                    </div>

                    <div className="s19-plan-card premium">
                        <h4>プレミアム</h4>
                        <div className="price-box">
                            <span className="label">初期費用</span>
                            <span className="val">100<span className="unit">万円</span></span>
                        </div>
                        <div className="roi-box">
                            <span className="label">月額ロイヤリティ</span>
                            <span className="val-small">7〜10%</span>
                        </div>
                    </div>
                </div>

                {/* 右側：投資回収（ROI） */}
                <div className="s19-roi-area">
                    <h3><i className="fa-solid fa-chart-line"></i> 投資回収</h3>

                    <div className="s19-roi-card">
                        <div className="roi-header">
                            回収期間：<span className="highlight">1〜2年</span>
                        </div>

                        <div className="roi-timeline">
                            <div className="line-bar">
                                <div className="fill-bar"></div>
                            </div>
                            <div className="points">
                                <span className="point p-start">導入</span>
                                <span className="point p-1y">1年</span>
                                <span className="point p-2y">2年</span>
                                <span className="point p-3y">3年</span>
                            </div>
                        </div>

                        <p className="roi-msg">導入効果で費用を短期回収</p>
                    </div>

                    <div className="s19-calc-box">
                        <i className="fa-solid fa-calculator"></i> ROI計算式公開中
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide19;