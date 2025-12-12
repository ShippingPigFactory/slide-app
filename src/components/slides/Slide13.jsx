import React from 'react';
import './Slide13.css';

const Slide13 = () => {
    return (
        <div className="slide13-wrapper">
            <div className="s13-header">
                <h2>成功事例：工賃5万円で事業成長</h2>
                <p className="s13-sub-text">高工賃でも事業伸長する就労支援モデル</p>
                <div className="s13-accent-line"></div>
            </div>

            <div className="s13-grid">
                {/* Card 1: 工賃実績 */}
                <div className="s13-card">
                    <div className="card-header-blue">
                        <i className="fa-solid fa-hand-holding-dollar"></i> B型工賃50,000円
                    </div>
                    <div className="s13-content-box">
                        <div className="big-number text-blue">
                            2.17<span className="unit">倍</span>
                        </div>
                        <p className="desc-small">全国平均工賃比</p>

                        {/* 棒グラフ */}
                        <div className="chart-bar-area">
                            <div className="bar-group">
                                <div className="bar gray" style={{ height: '40%' }}></div>
                                <span className="label">全国平均<br />23,053円</span>
                            </div>
                            <div className="bar-group">
                                <div className="bar blue" style={{ height: '90%' }}></div>
                                <span className="label">弊社実績<br />50,000円</span>
                            </div>
                        </div>
                    </div>
                    <div className="s13-footer-tag blue">福祉貢献と収益の両立</div>
                </div>

                {/* Card 2: 業務効率 */}
                <div className="s13-card">
                    <div className="card-header-green">
                        <i className="fa-solid fa-chart-line"></i> 業務効率の大幅向上
                    </div>
                    <div className="s13-content-box">
                        <div className="big-number text-green">
                            +35<span className="unit">%</span>
                        </div>
                        <p className="desc-small">1年後の処理量増加</p>

                        {/* 折れ線グラフイメージ */}
                        <div className="chart-line-area">
                            <svg viewBox="0 0 200 100" className="simple-line-chart">
                                <polyline points="10,90 190,10" fill="none" stroke="#00C853" strokeWidth="4" />
                                <circle cx="10" cy="90" r="4" fill="#00C853" />
                                <circle cx="190" cy="10" r="4" fill="#00C853" />
                            </svg>
                            <div className="chart-labels">
                                <span>導入前</span>
                                <span>12ヶ月後</span>
                            </div>
                        </div>
                    </div>
                    <div className="s13-footer-tag green">高工賃でも成長を実現</div>
                </div>

                {/* Card 3: 母体貢献 */}
                <div className="s13-card">
                    <div className="card-header-purple">
                        <i className="fa-solid fa-building"></i> 母体事業への貢献
                    </div>
                    <div className="s13-content-box">
                        <div className="big-number text-purple">
                            30<span className="unit">%</span>
                        </div>
                        <p className="desc-small">業務コスト削減率</p>

                        {/* 円グラフイメージ */}
                        <div className="chart-donut-area">
                            <div className="donut-chart" style={{ background: 'conic-gradient(#7E57C2 0% 30%, #eee 30% 100%)' }}>
                                <div className="donut-hole"></div>
                            </div>
                        </div>
                        <div className="donut-legend">
                            <span className="dot purple"></span> コスト削減
                        </div>
                    </div>
                    <div className="s13-footer-tag purple">本業との相乗効果</div>
                </div>
            </div>
        </div>
    );
};

export default Slide13;