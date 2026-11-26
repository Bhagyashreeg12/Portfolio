import { useMemo, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi2';
import { LuActivity, LuClock, LuEye, LuMousePointerClick, LuUsers } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import {
  analyticsByPeriod,
  type AnalyticsPeriod,
  type AnalyticsPoint,
  topPages,
  topReferrers,
} from '../../data/analytics';
import './AnalyticsLayout.css';

export default function AnalyticsLayout() {
  const [period, setPeriod] = useState<AnalyticsPeriod>('7d');
  const [hoveredPoint, setHoveredPoint] = useState<AnalyticsPoint | null>(null);

  const data = analyticsByPeriod[period];

  // SVG dimensions for responsive chart
  const width = 640;
  const height = 220;
  const paddingX = 40;
  const paddingY = 30;

  const maxVal = useMemo(() => {
    return Math.max(...data.points.map((p) => p.pageviews)) * 1.15 || 100;
  }, [data.points]);

  const chartData = useMemo(() => {
    const usableW = width - paddingX * 2;
    const usableH = height - paddingY * 2;
    const stepX = usableW / (data.points.length - 1 || 1);

    const pvCoords = data.points.map((p, i) => {
      const x = paddingX + i * stepX;
      const y = height - paddingY - (p.pageviews / maxVal) * usableH;
      return { x, y, point: p };
    });

    const vCoords = data.points.map((p, i) => {
      const x = paddingX + i * stepX;
      const y = height - paddingY - (p.visitors / maxVal) * usableH;
      return { x, y, point: p };
    });

    const createPath = (coords: { x: number; y: number }[]) => {
      if (coords.length === 0) return '';
      return coords.reduce((acc, curr, idx) => {
        return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
      }, '');
    };

    const pvPath = createPath(pvCoords);
    const vPath = createPath(vCoords);

    const pvArea = pvPath
      ? `${pvPath} L ${pvCoords[pvCoords.length - 1].x} ${height - paddingY} L ${pvCoords[0].x} ${
          height - paddingY
        } Z`
      : '';

    return { pvCoords, vCoords, pvPath, vPath, pvArea };
  }, [data.points, maxVal]);

  return (
    <section className="analytics-page">
      <div className="analytics-top-nav">
        <Link to="/" className="mx-btn-secondary">
          <HiArrowLeft aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="analytics-header-row">
        <SectionTitle>Traffic Analytics</SectionTitle>

        <div className="analytics-live-status">
          <span className="live-dot" />
          <span>4 Active Visitors Now</span>
        </div>
      </div>

      {/* Period Selection Tabs */}
      <div className="analytics-period-bar">
        {(['24h', '7d', '30d'] as AnalyticsPeriod[]).map((p) => (
          <button
            key={p}
            type="button"
            className={`period-btn${period === p ? ' active' : ''}`}
            onClick={() => setPeriod(p)}
          >
            {p === '24h' ? 'Last 24 Hours' : p === '7d' ? 'Last 7 Days' : 'Last 30 Days'}
          </button>
        ))}
      </div>

      {/* 4 Stat Cards */}
      <div className="analytics-stats-grid">
        <div className="analytics-metric-card">
          <div className="metric-header">
            <span className="metric-title">Total Pageviews</span>
            <LuEye className="metric-icon" />
          </div>
          <div className="metric-value-row">
            <span className="metric-value">{data.totalPageviews.toLocaleString()}</span>
            <span className="metric-change positive">{data.pageviewsChange}</span>
          </div>
          <span className="metric-sub">vs previous {period}</span>
        </div>

        <div className="analytics-metric-card">
          <div className="metric-header">
            <span className="metric-title">Unique Visitors</span>
            <LuUsers className="metric-icon" />
          </div>
          <div className="metric-value-row">
            <span className="metric-value">{data.totalVisitors.toLocaleString()}</span>
            <span className="metric-change positive">{data.visitorsChange}</span>
          </div>
          <span className="metric-sub">verified IP sessions</span>
        </div>

        <div className="analytics-metric-card">
          <div className="metric-header">
            <span className="metric-title">Avg Session</span>
            <LuClock className="metric-icon" />
          </div>
          <div className="metric-value-row">
            <span className="metric-value">{data.avgDuration}</span>
          </div>
          <span className="metric-sub">engaged reading time</span>
        </div>

        <div className="analytics-metric-card">
          <div className="metric-header">
            <span className="metric-title">Bounce Rate</span>
            <LuMousePointerClick className="metric-icon" />
          </div>
          <div className="metric-value-row">
            <span className="metric-value">{data.bounceRate}</span>
            <span className="metric-change positive">-3.2%</span>
          </div>
          <span className="metric-sub">healthy reader retention</span>
        </div>
      </div>

      {/* SVG Interactive Chart Box */}
      <div className="analytics-chart-box">
        <div className="chart-header">
          <div className="chart-title-wrap">
            <LuActivity className="chart-icon" />
            <span className="chart-title">Visitor Volume Over Time</span>
          </div>
          <div className="chart-legend">
            <span className="legend-item">
              <span className="legend-line pv-color" />
              <span>Pageviews</span>
            </span>
            <span className="legend-item">
              <span className="legend-line v-color" />
              <span>Visitors</span>
            </span>
          </div>
        </div>

        {/* Chart Canvas */}
        <div className="chart-svg-container">
          <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg">
            <defs>
              <linearGradient id="pvGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            <line
              x1={paddingX}
              y1={height - paddingY}
              x2={width - paddingX}
              y2={height - paddingY}
              stroke="#222329"
              strokeDasharray="4 4"
            />
            <line
              x1={paddingX}
              y1={height / 2}
              x2={width - paddingX}
              y2={height / 2}
              stroke="#222329"
              strokeDasharray="4 4"
            />
            <line
              x1={paddingX}
              y1={paddingY}
              x2={width - paddingX}
              y2={paddingY}
              stroke="#222329"
              strokeDasharray="4 4"
            />

            {/* Area Fill */}
            {chartData.pvArea && (
              <path d={chartData.pvArea} fill="url(#pvGradient)" />
            )}

            {/* Pageviews Line */}
            {chartData.pvPath && (
              <path
                d={chartData.pvPath}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Visitors Line */}
            {chartData.vPath && (
              <path
                d={chartData.vPath}
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Data Point Dots & Labels */}
            {chartData.pvCoords.map((c, i) => (
              <g key={i}>
                <text
                  x={c.x}
                  y={height - 8}
                  fill="#71717a"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {c.point.label}
                </text>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={hoveredPoint === c.point ? 6 : 4}
                  fill="#38bdf8"
                  stroke="#0b0d0e"
                  strokeWidth="2"
                  style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
                  onMouseEnter={() => setHoveredPoint(c.point)}
                />
              </g>
            ))}
          </svg>

          {/* Hover Tooltip Overlay */}
          {hoveredPoint && (
            <div className="chart-tooltip-bubble">
              <span className="tooltip-label">{hoveredPoint.label}</span>
              <div className="tooltip-row">
                <span className="tooltip-dot pv" />
                <span>Pageviews: <strong>{hoveredPoint.pageviews}</strong></span>
              </div>
              <div className="tooltip-row">
                <span className="tooltip-dot v" />
                <span>Visitors: <strong>{hoveredPoint.visitors}</strong></span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Breakdown Grids: Top Referrers & Top Pages */}
      <div className="analytics-breakdown-grid">
        {/* Top Referrers */}
        <div className="breakdown-card">
          <h3 className="breakdown-title">Top Traffic Referrers</h3>
          <div className="referrers-list">
            {topReferrers.map((ref) => (
              <div key={ref.source} className="referrer-item">
                <div className="referrer-meta">
                  <span className="referrer-name">{ref.source}</span>
                  <span className="referrer-count">{ref.visitors} views ({ref.percentage}%)</span>
                </div>
                <div className="referrer-bar-track">
                  <div
                    className="referrer-bar-fill"
                    style={{ width: `${ref.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Visited Pages */}
        <div className="breakdown-card">
          <h3 className="breakdown-title">Most Visited Pages</h3>
          <div className="pages-list">
            {topPages.map((page) => (
              <div key={page.path} className="page-item">
                <div className="page-info">
                  <span className="page-path">{page.path}</span>
                  <span className="page-name">{page.name}</span>
                </div>
                <span className="page-views-badge">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
