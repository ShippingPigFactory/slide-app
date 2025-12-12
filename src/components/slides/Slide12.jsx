import React from 'react';
import './Slide12.css';

const Slide12 = () => {
  return (
    <div className="slide12-wrapper">
      <div className="s12-header">
        <h2>母体事業との連携フロー</h2>
        <p className="s12-sub-text">3者連携による円滑な業務プロセスと品質保証</p>
        <div className="s12-accent-line"></div>
      </div>

      <div className="s12-triangle-container">
        {/* 背景の接続矢印 (SVG) */}
        <svg className="s12-arrows-svg" viewBox="0 0 800 500">
          <defs>
            <marker id="arrow-head-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#0044CC" />
            </marker>
            <marker id="arrow-head-cyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#00A0E9" />
            </marker>
          </defs>

          {/* 1. 母体 <-> 施設 (双方向) */}
          <path d="M 280 400 L 520 400" stroke="#00A0E9" strokeWidth="4"
            markerEnd="url(#arrow-head-cyan)" markerStart="url(#arrow-head-cyan)" strokeDasharray="10,5" />
          <text x="400" y="390" textAnchor="middle" fill="#00A0E9" fontSize="14" fontWeight="bold">発注・連携</text>

          {/* 2. 母体 -> 取引相手 (一方向) */}
          <path d="M 150 280 L 350 100" stroke="#0044CC" strokeWidth="4" markerEnd="url(#arrow-head-blue)" />

          {/* 3. 施設 -> 取引相手 (一方向：納品) */}
          <path d="M 650 280 L 450 100" stroke="#0044CC" strokeWidth="4" markerEnd="url(#arrow-head-blue)" />
          <text x="600" y="180" textAnchor="middle" fill="#0044CC" fontSize="14" fontWeight="bold" transform="rotate(-40 600,180)">納品・発送</text>
        </svg>

        {/* --- エリア配置 --- */}

        {/* 1. 取引相手 (Top) */}
        <div className="area-card area-customer">
          <div className="area-title"><i className="fa-solid fa-handshake"></i> 取引相手</div>
          <div className="task-container single">
            <div className="flow-step-mini">
              <div className="icon"><i className="fa-solid fa-box-open"></i></div>
              <span>商品受取・支払</span>
            </div>
          </div>
        </div>

        {/* 2. 母体事業 (Bottom Left) */}
        <div className="area-card area-company">
          <div className="area-title blue"><i className="fa-solid fa-building"></i> 母体事業</div>
          <div className="task-container">
            <div className="flow-step-mini">
              <div className="icon"><i className="fa-solid fa-cart-shopping"></i></div>
              <span>受注</span>
            </div>
            <div className="arrow-mini">→</div>
            <div className="flow-step-mini">
              <div className="icon"><i className="fa-solid fa-right-left"></i></div>
              <span>データ連携</span>
            </div>
            <div className="arrow-mini">→</div>
            <div className="flow-step-mini">
              <div className="icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
              <span>請求</span>
            </div>
          </div>
        </div>

        {/* 3. 就労支援施設 (Bottom Right) */}
        <div className="area-card area-facility">
          <div className="area-title cyan"><i className="fa-solid fa-users"></i> 就労支援施設</div>
          <div className="task-container">
            <div className="flow-step-mini with-gate">
              <div className="icon"><i className="fa-solid fa-box-open"></i></div>
              <span>ピッキング</span>
              <div className="gate-tag">Gate1</div>
            </div>
            <div className="arrow-mini">→</div>
            <div className="flow-step-mini with-gate">
              <div className="icon"><i className="fa-solid fa-box"></i></div>
              <span>梱包</span>
              <div className="gate-tag">Gate2</div>
            </div>
            <div className="arrow-mini">→</div>
            <div className="flow-step-mini with-gate">
              <div className="icon"><i className="fa-solid fa-truck-fast"></i></div>
              <span>発送</span>
              <div className="gate-tag">Gate3</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slide12;