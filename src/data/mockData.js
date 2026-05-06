// Central mock dataset for the POC. Keeping all demo data here makes the app easy
// for a student team to understand without introducing backend complexity.
export const pocSprints = [
  { sprint: 'Sprint 1', focus: 'CV upload mock flow and student profile foundation', status: 'MVP' },
  { sprint: 'Sprint 2', focus: 'AI job matching, match reasons, and saved-job actions', status: 'MVP' },
  { sprint: 'Sprint 3', focus: 'CV improvement, skill gaps, and mock interview feedback', status: 'MVP' },
  { sprint: 'Sprint 4', focus: 'HR shortlist, university dashboard, and premium future-release preview', status: 'POC demo' }
];

export const mvpFeatures = [
  'CV upload mock flow',
  'AI job matching',
  'CV improvement suggestions',
  'Skill gap analysis',
  'Mock interview with feedback',
  'HR candidate shortlist'
];

export const studentProfile = {
  name: 'Mario Rossi',
  degree: 'Market and Strategy Business',
  university: 'Università Cattolica del Sacro Cuore',
  faculty: 'Faculty of Economics',
  graduation: 'July 2026',
  location: 'Milan, Italy',
  gpa: '28.1 / 30',
  readiness: 82,
  verifiedCredits: 108,
  profileType: 'Final-year student / recent graduate',
  targetRoles: ['Marketing Analyst', 'Business Analyst', 'Strategy Intern', 'Brand Management Trainee', 'Consulting Intern'],
  skills: [
    { name: 'Market Research', level: 86 },
    { name: 'Business Strategy', level: 82 },
    { name: 'Brand Positioning', level: 78 },
    { name: 'Excel and Reporting', level: 74 },
    { name: 'Presentation Skills', level: 72 }
  ]
};

export const demoUsers = {
  recruiter: 'HR_001',
  recruiterBackup: 'HR_002',
  universityAdmin: 'Admin_001'
};

export const partnerCompanies = [
  { name: 'NovaBank', industry: 'Financial services', hiringGoal: 'Graduate analytics program', openRoles: 7 },
  { name: 'HelioApps', industry: 'B2B SaaS', hiringGoal: 'Product and growth analytics', openRoles: 4 },
  { name: 'Aurea Advisory', industry: 'Management consulting', hiringGoal: 'AI transformation interns', openRoles: 5 },
  { name: 'MarketPulse', industry: 'Consumer insights', hiringGoal: 'Marketing analytics associates', openRoles: 3 }
];

export const jobs = [
  {
    id: 1,
    title: 'Marketing Analyst Graduate',
    company: 'MarketPulse',
    location: 'Milan',
    type: 'Hybrid',
    match: 94,
    salary: '30K-36K EUR',
    tags: ['Market Research', 'Excel', 'Customer Insights'],
    why: 'Strong alignment with Mario Rossi market research coursework, segmentation project, and interest in insight-driven growth roles.',
    status: 'Recommended'
  },
  {
    id: 2,
    title: 'Business Analyst Graduate',
    company: 'NovaBank',
    location: 'Remote EU',
    type: 'Remote',
    match: 89,
    salary: '32K-40K EUR',
    tags: ['Business Cases', 'Financial Analysis', 'Stakeholder Reporting'],
    why: 'Matches Mario Rossi strategy background, business modeling experience, and ability to translate market signals into recommendations.',
    status: 'Saved'
  },
  {
    id: 3,
    title: 'Strategy Consulting Intern',
    company: 'Aurea Advisory',
    location: 'Rome',
    type: 'On-site',
    match: 84,
    salary: 'Paid internship',
    tags: ['Market Entry', 'Consulting', 'Presentation'],
    why: 'Good fit for Mario Rossi market and strategy training, case interview interest, and client presentation experience.',
    status: 'Apply later'
  },
  {
    id: 4,
    title: 'Brand Management Trainee',
    company: 'HelioApps',
    location: 'Turin',
    type: 'Hybrid',
    match: 78,
    salary: '29K-35K EUR',
    tags: ['Brand Positioning', 'Campaign Planning', 'Go-to-Market'],
    why: 'Relevant brand strategy coursework and consumer behavior project; needs stronger campaign measurement examples.',
    status: 'New'
  },
  {
    id: 5,
    title: 'Go-to-Market Strategy Intern',
    company: 'EuroSure',
    location: 'Bologna',
    type: 'Hybrid',
    match: 73,
    salary: 'Paid internship',
    tags: ['Market Sizing', 'Competitive Analysis', 'Launch Planning'],
    why: 'Strategy interests are relevant, but role expects more structured market sizing and launch planning practice.',
    status: 'New'
  }
];

export const cvSuggestions = [
  {
    title: 'Quantify business project outcomes',
    impact: 'High',
    detail: 'Add measurable results to Mario Rossi market segmentation project, such as target segment size, revenue potential, or campaign impact.'
  },
  {
    title: 'Align keywords to target role',
    impact: 'High',
    detail: 'For marketing, business, and strategy roles, include market research, competitive analysis, brand positioning, go-to-market, and stakeholder reporting.'
  },
  {
    title: 'Strengthen leadership evidence',
    impact: 'Medium',
    detail: 'Move team project leadership from activities into experience with scope, team size, recommendations, and presentation deliverables.'
  }
];

export const skillGaps = [
  { skill: 'Market sizing', gap: 34, recommendation: 'Practice TAM, SAM, and SOM estimation for two business cases' },
  { skill: 'Executive storytelling', gap: 28, recommendation: 'Practice a 5-slide strategy recommendation narrative' },
  { skill: 'Campaign analytics', gap: 22, recommendation: 'Build a simple KPI dashboard for a mock launch campaign' },
  { skill: 'Case interview structure', gap: 18, recommendation: 'Run two mock consulting and market-entry cases' }
];

export const interviewQuestions = {
  Marketing: [
    'Mario Rossi, tell me about a market research project and the recommendation you made.',
    'How would you evaluate whether a new brand campaign is working?',
    'How would you segment customers for a new student banking product?',
    'Which KPIs would you track after a go-to-market launch?'
  ],
  Consulting: [
    'Mario Rossi, how would you estimate the market size for premium coffee subscriptions in Italy?',
    'A retail client is losing market share. How would you structure the diagnosis?',
    'Walk me through a time you influenced a team without authority.',
    'How would you prioritize three growth initiatives for a mid-sized company?'
  ],
  Strategy: [
    'Mario Rossi, how would you compare two possible market entry strategies?',
    'How would you assess whether a brand should launch a lower-price product line?',
    'Tell me about a tradeoff between user value and business value.',
    'What would you do if sales increased but brand perception declined?'
  ]
};

export const candidates = [
  { id: 1, name: 'Mario Rossi', role: 'Marketing Analyst', match: 94, gpa: 28.1, readiness: 82, skills: ['Market Research', 'Strategy', 'Excel'], stage: 'Shortlisted', reviewer: 'HR_001' },
  { id: 2, name: 'Student_001', role: 'Business Analyst', match: 88, gpa: 27.9, readiness: 77, skills: ['Excel', 'SQL', 'Strategy'], stage: 'Review', reviewer: 'HR_001' },
  { id: 3, name: 'Student_002', role: 'Brand Management Trainee', match: 86, gpa: 29.1, readiness: 79, skills: ['Research', 'Branding', 'Campaigns'], stage: 'Interview', reviewer: 'HR_002' },
  { id: 4, name: 'Student_003', role: 'Consulting Intern', match: 81, gpa: 28.2, readiness: 72, skills: ['Consulting', 'Market Sizing', 'Presentation'], stage: 'Review', reviewer: 'HR_001' },
  { id: 5, name: 'Student_004', role: 'Strategy Intern', match: 76, gpa: 27.4, readiness: 69, skills: ['Competitive Analysis', 'Excel', 'Finance'], stage: 'New', reviewer: 'HR_002' }
];

export const aggregateSkillGaps = [
  { skill: 'Campaign analytics', value: 68 },
  { skill: 'Storytelling', value: 54 },
  { skill: 'Market sizing', value: 47 },
  { skill: 'Financial modeling', value: 38 }
];

export const universityMetrics = {
  admin: 'Admin_001',
  cohortReadiness: 76,
  activeStudents: 428,
  partnerCompanies: 36,
  interviewsBooked: 91,
  placementPipeline: [
    { label: 'Profile completed', value: 86 },
    { label: 'CV reviewed', value: 71 },
    { label: 'Matched to roles', value: 64 },
    { label: 'Interview scheduled', value: 38 }
  ],
  employerDemand: [
    { skill: 'Market research', value: 82 },
    { skill: 'Business analysis', value: 76 },
    { skill: 'Consulting cases', value: 58 },
    { skill: 'Stakeholder reporting', value: 52 }
  ]
};
