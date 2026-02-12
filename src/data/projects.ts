import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '9',
    title: 'Cross-Lingual Legal Document Processor (Transformer-Based NLP)',
    description: 'Architected an end-to-end multilingual legal document processing pipeline integrating OCR (Tesseract with image preprocessing), layout-aware clause segmentation (IndicNLP), transformer-based NMT (IndicTrans2, InLegalTrans), domain-specific glossary enforcement, COMET-based quality evaluation (0.81–0.89 semantic scores), and structured DOCX/HTML reconstruction. Built a Streamlit web app for upload, side-by-side translation review, and export.',
    category: 'Academic Project',
    technologies: ['Python', 'Tesseract', 'IndicNLP', 'IndicTrans2', 'InLegalTrans', 'COMET', 'Streamlit', 'DOCX', 'HTML', 'OCR', 'NMT'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Old_Supreme_Court_Chambers.JPG/1280px-Old_Supreme_Court_Chambers.JPG',
    projectUrl: '',
    githubUrl: ''
  },
  {
    id: '1',
    title: 'Futures & Options Stock Market Prediction System',
    description: 'Developed an ensemble-based predictive model for F&O trading signals, calculating strike, option and stoploss prices using technical indicators by integrating stock market data from Yahoo Finance and created a user interface using React for easy visualization.',
    category: 'Machine Learning / FinTech',
    technologies: ['Python', 'XGBoost', 'Yahoo Finance', 'React'],
    imageUrl: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: '',
    demoUrl: 'https://ml-fno-prediction.vercel.app'
  },
  {
    id: '8',
    title: 'Investor Recommendation System',
    description: 'An advanced AI-driven intraday stock, mutual fund, and gold trading recommendation platform that uses real-time market data, technical indicators, and ensemble machine learning models (Random Forest + XGBoost) to identify high-probability buy/sell opportunities. The system provides trade recommendations with entry/exit points, stop-loss, risk/reward ratios, and confidence scores, along with interactive candlestick charts showing buy/sell markers.',
    category: 'Machine Learning + Web Development',
    technologies: ['React.js', 'FastAPI', 'Python', 'XGBoost', 'scikit-learn', 'PostgreSQL', 'Tailwind CSS', 'Plotly.js', 'Yahoo Finance', 'Celery'],
    imageUrl: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: ''
  },
  {
    id: '2',
    title: 'Sentiment Analysis for Stock Predictions',
    description: 'Implemented an NLP-based sentiment analysis system to classify market-relevant news and predict stock trends using ensemble models.',
    category: 'Machine Learning / NLP',
    technologies: ['NLP', 'Random Forest', 'XGBoost', 'LightGBM'],
    imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: ''
  },
  {
    id: '3',
    title: 'College Timetable Generator',
    description: 'Designed an automated scheduling system using graph-based conflict resolution, optimizing faculty and student schedules.',
    category: 'Web Development / Optimization',
    technologies: ['Vite', 'React'],
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: ''
  },
  {
    id: '4',
    title: 'E-commerce Product Recommendation System',
    description: 'Developed a real-time product search engine using pattern matching (KMP) and shortest path algorithms (Dijkstra’s) for personalized recommendations.',
    category: 'Software Development / Algorithms',
    technologies: ['Java Swing', 'KMP', 'Merge Sort', 'Dijkstra’s Algorithm'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: ''
  },
  {
    id: '5',
    title: 'Stay with Us – Hotel Management System',
    description: 'Built a hotel reservation system with a relational database, featuring real-time availability tracking and automated booking management.',
    category: 'Software Development',
    technologies: ['Python', 'MySQL'],
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: ''
  },
  {
    id: '6',
    title: 'Swork – Social Work Platform',
    description: 'Developed a CSR internship platform that matches students with social projects, integrating user authentication and tracking.',
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: ''
  },
  {
    id: '7',
    title: 'Keep In Touch – Online Contact Manager',
    description: 'Created a contact management system in C that enables users to browse, add, search, and drop contacts efficiently.',
    category: 'Software Development',
    technologies: ['C'],
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '',
    githubUrl: ''
  }
  
  
];