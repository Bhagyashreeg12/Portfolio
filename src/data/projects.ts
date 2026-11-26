import { userImages } from './images';

export type ProjectCategory =
  | 'Automation & MIS'
  | 'Machine Learning'
  | 'Clustering & Analytics'
  | 'Time Series & DL'
  | 'BI & Spatial Analytics'
  | 'Healthcare ML';

export interface ProjectData {
  id: string;
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  stats?: string;
  category: ProjectCategory;
  fallbackVariant?: 'ev' | 'crime' | 'heart';
  isProtected?: boolean;
}

export const featuredProjects: ProjectData[] = [
  {
    id: 'branchpulse',
    banner: userImages.projects.branchpulse,
    name: 'BranchPulse',
    desc: 'Automated Monday-morning MIS reporting for 12 insurance branches with dynamic Excel formulas, automated Data Quality Gate (76 audit issues handled), and one-click executive HTML email digests.',
    tech: ['Python', 'SQLite', 'Advanced Excel', 'Openpyxl', 'HTML Digest'],
    github: 'https://github.com/bhagyashreeghosh004-hub/BranchPluse-MIS',
    stats: '12 Branches | Automated',
    category: 'Automation & MIS',
    isProtected: true,
  },
  {
    id: 'fraud-detection',
    banner: userImages.projects.fraudDetection,
    name: 'Card Fraud Detection',
    desc: 'Trained Random Forest & Gradient Boosting models on a 1.5% imbalanced fraud dataset with leakage-free SMOTE and threshold sweep optimization to achieve 85% recall, 89% precision, and 0.810 PR-AUC.',
    tech: ['Python', 'Scikit-Learn', 'Random Forest', 'SMOTE', 'Threshold Sweep'],
    github: 'https://github.com/bhagyashreeghosh004-hub/Fraud_Detection_System',
    stats: '85% Recall | 89% Precision',
    category: 'Machine Learning',
  },
  {
    id: 'customer-segmentation',
    banner: userImages.projects.customerSegmentation,
    name: 'Customer Segmentation',
    desc: 'Segmented 3,000 customers into 4 commercial personas using K-Means clustering, PCA dimensionality reduction, and hierarchical validation (Silhouette: 0.62) to guide targeted retention.',
    tech: ['Python', 'K-Means', 'PCA', 'Hierarchical', 'Seaborn'],
    github: 'https://github.com/bhagyashreeghosh004-hub/Customer_Segmentation',
    stats: '3,000 Customers | 4 Personas',
    category: 'Clustering & Analytics',
  },
  {
    id: 'ev-charging',
    banner: '',
    name: 'EV Demand Forecasting',
    desc: 'Spatial-temporal demand forecasting across 4 grid zones over 365 days. Engineered rolling and lag features to benchmark SARIMA, Random Forest, XGBoost, and LSTM neural networks.',
    tech: ['Python', 'SARIMA', 'LSTM', 'XGBoost', 'Lag Engineering'],
    github: 'https://github.com/Bhagyashreeg12',
    stats: '4 Grid Zones | 365 Days',
    category: 'Time Series & DL',
    fallbackVariant: 'ev',
  },
];

export const additionalProjects: ProjectData[] = [
  {
    id: 'chicago-crime',
    banner: '',
    name: 'Chicago Crime Prediction',
    desc: 'Capstone BI platform analyzing historical municipal crime incidents with spatial risk heatmaps and an interactive multi-view Power BI dashboard for proactive patrol allocation.',
    tech: ['Power BI', 'DAX', 'Tableau', 'Python', 'Spatial Analytics'],
    github: 'https://github.com/Bhagyashreeg12',
    stats: 'Power BI | Spatial Analytics',
    category: 'BI & Spatial Analytics',
    fallbackVariant: 'crime',
  },
  {
    id: 'heart-disease',
    banner: '',
    name: 'Heart Disease Clinical Risk',
    desc: 'Logistic Regression scoring model trained on 319,795 CDC BRFSS records across 18 lifestyle and clinical predictors with interpretable odds-ratio analysis and ROC-AUC evaluation.',
    tech: ['Python', 'Logistic Regression', 'ROC-AUC', 'Feature Importance'],
    github: 'https://github.com/Bhagyashreeg12',
    stats: '319,795 Records | ROC-AUC',
    category: 'Healthcare ML',
    fallbackVariant: 'heart',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
