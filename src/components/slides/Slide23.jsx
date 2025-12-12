import React from 'react';
import './Slide23.css';

const Slide23 = () => {
    return (
        <div className="slide23-wrapper">
            <div className="s23-header">
                <h2>よくあるご質問</h2>
                <p className="s23-sub-text">導入前に解決したい疑問点にお答えします</p>
                <div className="s23-accent-line"></div>
            </div>

            <div className="s23-qa-container">
                <div className="qa-item">
                    <div className="qa-q">
                        <span className="icon-q">Q</span>
                        <h3>EC以外の業種でも導入可能ですか？</h3>
                    </div>
                    <div className="qa-a">
                        <span className="icon-a">A</span>
                        <p>可能です。お客様の事業特性に合わせてノンコア業務の切り出し設計をサポートします。</p>
                    </div>
                </div>

                <div className="qa-item">
                    <div className="qa-q">
                        <span className="icon-q">Q</span>
                        <h3>福祉事業の経験がなくても始められますか？</h3>
                    </div>
                    <div className="qa-a">
                        <span className="icon-a">A</span>
                        <p>経験がなくても問題ありません。初心者向けマニュアル、段階的な研修プログラム、実地指導を通じて必要なスキルを着実に習得いただけます。</p>
                    </div>
                </div>

                <div className="qa-item">
                    <div className="qa-q">
                        <span className="icon-q">Q</span>
                        <h3>投資回収の目安はどのくらいですか？</h3>
                    </div>
                    <div className="qa-a">
                        <span className="icon-a">A</span>
                        <p>平均して1〜2年程度での回収を見込んでいます。既存の人件費削減効果と助成金収入のダブル効果により、早期の黒字化が可能なモデルとなっています。</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide23;