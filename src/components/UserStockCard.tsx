import React from 'react';
import { TrendingUp, Activity, BarChart2, Globe } from 'lucide-react';

const UserStockCard: React.FC = () => {
  return (
    <div className="market-widget">
      <div className="widget-header">
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div style={{width: '32px', height: '32px', background: '#0f172a', color: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px'}}>AD</div>
            <div>
                <div style={{fontSize: '0.9rem', fontWeight: '700', color: '#0f172a'}}>ALEX DEV</div>
                <div style={{fontSize: '0.75rem', color: '#64748b'}}>NASDAQ: ADE</div>
            </div>
        </div>
        <div className="metric-change">
          <TrendingUp size={16} />
          <span>+12.4%</span>
        </div>
      </div>

      <div className="widget-body">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
            <div className="widget-metric">
            <div className="metric-label">Market Cap</div>
            <div className="metric-value">$1.4M</div>
            </div>
            <div className="widget-metric">
            <div className="metric-label">Volume (24h)</div>
            <div className="metric-value">452K</div>
            </div>
        </div>

        <div className="widget-metric">
            <div className="metric-label" style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between'}}>
                <span>Performance</span>
                <span style={{color: '#059669'}}>Strong Buy</span>
            </div>
            {/* Minimalist chart representation */}
            <div style={{height: '80px', width: '100%', display: 'flex', alignItems: 'flex-end', gap: '4px'}}>
                {[40, 55, 45, 60, 75, 65, 80, 70, 85, 95, 90, 100].map((h, i) => (
                    <div key={i} style={{
                        flex: 1,
                        height: `${h}%`,
                        background: i > 8 ? '#059669' : '#e2e8f0',
                        borderRadius: '2px 2px 0 0'
                    }}></div>
                ))}
            </div>
        </div>

        <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Activity size={14} />
                <span>High Activity</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Globe size={14} />
                <span>Global Access</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserStockCard;
