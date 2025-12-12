import React from 'react';
import './Slide22.css';

const Slide22 = () => {
  return (
    <div className="slide22-wrapper">
      <div className="s22-header">
        <h2>他社との違い（競合優位性）</h2>
        <p className="s22-sub-text">実績に基づいた確かな優位性</p>
        <div className="s22-accent-line"></div>
      </div>

      <div className="s22-table-wrapper">
        <table className="s22-table">
          <thead>
            <tr>
              <th className="th-item">比較項目</th>
              <th className="th-us">当社の強み</th>
              <th className="th-others">一般的な他社</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-head">ノウハウの実証性</td>
              <td className="td-good">
                <strong>全国平均の2.17倍工賃を実現</strong><br />利用者の技能・生産性向上をサポート
              </td>
              <td className="td-bad">
                <div className="td-wrapper">
                  <i className="fa-solid fa-xmark"></i>
                  実績開示が曖昧<br />理論やコンセプトのみで実績が乏しい
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-head">事業成長との両立</td>
              <td className="td-good">
                <strong>高工賃でもなお事業伸長</strong><br />弊社スキームで実証済み
              </td>
              <td className="td-bad">
                <div className="td-wrapper">
                  <i className="fa-solid fa-xmark"></i>
                  コスト削減か品質維持かの二者択一
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-head">導入コスト</td>
              <td className="td-good">
                <strong>低初期費用110万円</strong><br />低ロイヤリティ設計<br />貴社に合った透明性のあるコストをご提案
              </td>
              <td className="td-bad">
                <div className="td-wrapper">
                  <i className="fa-solid fa-xmark"></i>
                  高額な導入費用や固定ロイヤリティ
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-head">支援スタイル</td>
              <td className="td-good">
                <strong>課題に寄り添う伴走型支援</strong><br />グループ会社としてともに成長を目指す
              </td>
              <td className="td-bad">
                <div className="td-wrapper">
                  <i className="fa-solid fa-xmark"></i>
                  標準パッケージ”志向で個別支援の柔軟性が弱い
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Slide22;