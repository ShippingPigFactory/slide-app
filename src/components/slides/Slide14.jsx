import React from 'react';
import './Slide14.css';

const Slide14 = () => {
    return (
        <div className="slide14-wrapper">
            <div className="s14-header">
                <h2>ご提供する2つのプラン比較</h2>
                <p className="s14-sub-text">導入目的に合わせた最適なプランをお選びいただけます</p>
            </div>

            <div className="s14-table-container">
                <table className="s14-table">
                    <thead>
                        <tr>
                            <th className="th-header">提供価値</th>
                            <th className="th-plan plan-basic">ベーシックプラン</th>
                            {/* <th className="th-plan plan-standard">スタンダードプラン</th> */}
                            <th className="th-plan plan-premium">プレミアムプラン</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td-label">初期費用</td>
                            <td className="td-val">110万円</td>
                            {/* <td className="td-val">100万円</td> */}
                            <td className="td-val">210万円</td>
                        </tr>
                        <tr>
                            <td className="td-label">月額ロイヤリティ</td>
                            <td className="td-val">3%</td>
                            {/* <td className="td-val highlight">5〜7%<br /><span className="small">(最低8万円〜)</span></td> */}
                            <td className="td-val">10%</td>
                        </tr>
                        <tr>
                            <td className="td-label">ゴール</td>
                            <td className="td-val bold">設立・開設</td>
                            {/* <td className="td-val bold">安定稼働</td> */}
                            <td className="td-val bold">価値最大化</td>
                        </tr>
                        <tr className="tr-divider"><td colSpan="4">提供サービス内容</td></tr>
                        <tr>
                            <td className="td-label">設立・許認可サポート</td>
                            <td className="td-check"><div className="circle-check"></div></td>
                            {/* <td className="td-check"><div className="circle-check"></div></td> */}
                            <td className="td-check"><div className="circle-check"></div></td>
                        </tr>
                        <tr>
                            <td className="td-label">マニュアル・雛形提供</td>
                            <td className="td-check"><div className="circle-check"></div></td>
                            {/* <td className="td-check"><div className="circle-check"></div></td> */}
                            <td className="td-check"><div className="circle-check"></div></td>
                        </tr>
                        <tr>
                            <td className="td-label">スタッフ研修・OJT</td>
                            <td className="td-check"></td>
                            {/* <td className="td-check"><div className="circle-check"></div></td> */}
                            <td className="td-check"><div className="circle-check"></div></td>
                        </tr>
                        <tr>
                            <td className="td-label">利用者募集の伴走支援</td>
                            <td className="td-check"></td>
                            {/* <td className="td-check"><div className="circle-check"></div></td> */}
                            <td className="td-check"><div className="circle-check"></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Slide14;