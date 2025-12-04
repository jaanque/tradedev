import React from 'react';
import { TrendingUp, User } from 'lucide-react';

const UserStockCard: React.FC = () => {
  return (
    <div className="stock-card">
      <div className="stock-card-header">
        <div className="user-info">
          <div className="avatar">
            <img src="https://ui-avatars.com/api/?name=Alex+Dev&background=2563eb&color=fff" alt="Avatar" style={{borderRadius: '50%', width: '100%', height: '100%'}}/>
          </div>
          <div>
            <div style={{fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)'}}>AlexDev</div>
            <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>@alex_codes</div>
          </div>
        </div>
        <div className="stock-price">
          <span className="price-value">$142.50</span>
          <div className="price-change">
            <TrendingUp size={14} />
            <span>+12.4%</span>
          </div>
        </div>
      </div>

      <div className="stock-graph">
        {/* Simple SVG Graph simulation */}
        <svg viewBox="0 0 300 60" preserveAspectRatio="none">
          <path d="M0,50 Q50,45 100,30 T200,20 T300,5" fill="none" stroke="#10b981" strokeWidth="2" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q50,45 100,30 T200,20 T300,5 V60 H0 Z" fill="url(#gradient)" />
        </svg>
      </div>

      <div className="floating-badge badge-1">
        <User size={16} color="var(--primary)" />
        <span>New Investor</span>
      </div>

      <div className="floating-badge badge-2">
        <span>🎉 Challenge Completed</span>
      </div>
    </div>
  );
};

export default UserStockCard;
