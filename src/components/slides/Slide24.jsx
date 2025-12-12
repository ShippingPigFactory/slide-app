import React from 'react';
import './Slide24.css';

const Slide24 = () => {
    return (
        <div className="slide24-wrapper">
            <div className="s24-header">
                <h2>導入後のビジョン</h2>
                <p className="s24-sub-text">就労支援スキームがもたらす3年間の変革</p>
            </div>

            <div className="s24-vision-compare">
                <div className="v-card current">
                    <h3><i className="fa-solid fa-triangle-exclamation"></i> 現在の課題</h3>
                    <ul>
                        <li><i className="fa-solid fa-minus"></i> 人件費の高騰が利益を圧迫</li>
                        <li><i className="fa-solid fa-minus"></i> 慢性的な人手不足で事業拡大困難</li>
                        <li><i className="fa-solid fa-minus"></i> 採用・教育コストの増加</li>
                    </ul>
                </div>

                <div className="v-arrow"><i className="fa-solid fa-arrow-right"></i></div>

                <div className="v-card ideal">
                    <h3><i className="fa-regular fa-star"></i> 導入後の理想像</h3>
                    <ul>
                        <li><i className="fa-solid fa-check"></i> コスト構造を抜本改革し利益率向上</li>
                        <li><i className="fa-solid fa-check"></i> 安定的な労働力確保で事業拡大</li>
                        <li><i className="fa-solid fa-check"></i> 社会貢献と収益性の両立</li>
                    </ul>
                </div>
            </div>

            <div className="s24-future-image">
                <h3>3年後の成長イメージ</h3>
                <div className="s24-chart-placeholder">
                    {/* 簡易的な右肩上がりチャート */}
                    <svg viewBox="0 0 500 150" className="future-chart">
                        <path d="M 10 140 Q 250 120, 490 10" fill="none" stroke="#00A0E9" strokeWidth="5" />
                        <circle cx="10" cy="140" r="6" fill="#00A0E9" />
                        <circle cx="250" cy="80" r="6" fill="#00A0E9" />
                        <circle cx="490" cy="10" r="6" fill="#00A0E9" />
                    </svg>
                    <div className="chart-labels">
                        <span>導入時</span>
                        <span>3年後</span>
                    </div>
                </div>
                <div className="s24-result-box">
                    想定される成果：<span className="highlight">人件費20-30%削減</span>
                </div>
            </div>
        </div>
    );
};

export default Slide24;