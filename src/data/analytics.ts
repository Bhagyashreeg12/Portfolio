export type AnalyticsPeriod = '24h' | '7d' | '30d';

export interface AnalyticsPoint {
  label: string;
  pageviews: number;
  visitors: number;
}

export interface AnalyticsData {
  period: AnalyticsPeriod;
  totalPageviews: number;
  totalVisitors: number;
  avgDuration: string;
  bounceRate: string;
  pageviewsChange: string;
  visitorsChange: string;
  points: AnalyticsPoint[];
}

export const analyticsByPeriod: Record<AnalyticsPeriod, AnalyticsData> = {
  '24h': {
    period: '24h',
    totalPageviews: 1240,
    totalVisitors: 418,
    avgDuration: '2m 14s',
    bounceRate: '27.4%',
    pageviewsChange: '+14.2%',
    visitorsChange: '+9.8%',
    points: [
      { label: '00:00', pageviews: 28, visitors: 12 },
      { label: '03:00', pageviews: 14, visitors: 6 },
      { label: '06:00', pageviews: 45, visitors: 18 },
      { label: '09:00', pageviews: 180, visitors: 62 },
      { label: '12:00', pageviews: 260, visitors: 94 },
      { label: '15:00', pageviews: 310, visitors: 110 },
      { label: '18:00', pageviews: 240, visitors: 78 },
      { label: '21:00', pageviews: 163, visitors: 38 },
    ],
  },
  '7d': {
    period: '7d',
    totalPageviews: 8940,
    totalVisitors: 2860,
    avgDuration: '2m 38s',
    bounceRate: '26.1%',
    pageviewsChange: '+22.5%',
    visitorsChange: '+17.4%',
    points: [
      { label: 'Thu', pageviews: 980, visitors: 340 },
      { label: 'Fri', pageviews: 1120, visitors: 410 },
      { label: 'Sat', pageviews: 890, visitors: 280 },
      { label: 'Sun', pageviews: 740, visitors: 230 },
      { label: 'Mon', pageviews: 1540, visitors: 560 },
      { label: 'Tue', pageviews: 1890, visitors: 620 },
      { label: 'Wed', pageviews: 1780, visitors: 580 },
    ],
  },
  '30d': {
    period: '30d',
    totalPageviews: 34200,
    totalVisitors: 11450,
    avgDuration: '2m 45s',
    bounceRate: '24.8%',
    pageviewsChange: '+31.2%',
    visitorsChange: '+24.6%',
    points: [
      { label: 'Week 1', pageviews: 6800, visitors: 2240 },
      { label: 'Week 2', pageviews: 8400, visitors: 2890 },
      { label: 'Week 3', pageviews: 9600, visitors: 3120 },
      { label: 'Week 4', pageviews: 9400, visitors: 3200 },
    ],
  },
};

export interface ReferrerSource {
  source: string;
  visitors: number;
  percentage: number;
}

export const topReferrers: ReferrerSource[] = [
  { source: 'LinkedIn', visitors: 1420, percentage: 48 },
  { source: 'GitHub', visitors: 890, percentage: 30 },
  { source: 'Direct / Bookmark', visitors: 420, percentage: 14 },
  { source: 'Google Search', visitors: 240, percentage: 8 },
];

export interface PageStat {
  path: string;
  name: string;
  views: number;
}

export const topPages: PageStat[] = [
  { path: '/', name: 'Home — Portfolio', views: 5680 },
  { path: '/projects', name: 'Projects Directory', views: 3410 },
  { path: '/resume', name: 'Interactive Resume', views: 1980 },
  { path: '/analytics', name: 'Traffic & Metrics', views: 820 },
];
