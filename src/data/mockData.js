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

export const studentProfiles = [
  {
    id: 'Mario Rossi',
    university: 'Università Cattolica del Sacro Cuore',
    degree: 'Market and Strategy Business',
    profileType: 'Final-year student / recent graduate',
    fit: 'Strong fit for marketing, strategy, business analysis'
  },
  { id: 'Student_002', degree: 'Business and Management', fit: 'Strong fit for consulting and business analysis' },
  { id: 'Student_003', degree: 'Market and Strategy Business', fit: 'Strong fit for digital marketing and communication' },
  { id: 'Student_004', degree: 'Economics and Analytics', fit: 'Strong fit for business analysis, reporting, operations' },
  { id: 'Student_005', degree: 'HR and Communication', fit: 'Strong fit for HR and talent acquisition' },
  { id: 'Student_006', degree: 'Strategy and Market Research', fit: 'Strong fit for strategy and market intelligence' }
];

export const partnerCompanies = [
  { name: 'Nexa Consulting', industry: 'Management consulting', hiringGoal: 'Junior strategy talent', openRoles: 1 },
  { name: 'BrandWave Srl', industry: 'Brand and marketing services', hiringGoal: 'Marketing analysis support', openRoles: 1 },
  { name: 'TalentBridge', industry: 'HR technology and recruitment', hiringGoal: 'Talent acquisition support', openRoles: 1 },
  { name: 'DataRetail Spa', industry: 'Retail analytics', hiringGoal: 'Business analysis and reporting', openRoles: 1 },
  { name: 'SocialSpark', industry: 'Digital marketing agency', hiringGoal: 'Campaign and content support', openRoles: 1 },
  { name: 'InsightCorp', industry: 'Market intelligence', hiringGoal: 'Research and strategic synthesis', openRoles: 1 }
];

export const jobs = [
  {
    id: 1,
    title: 'Junior Strategy Intern',
    company: 'Nexa Consulting',
    location: 'Milan',
    type: 'Hybrid',
    match: 92,
    rank: 3,
    rankLabel: 'Rank #3 for this role',
    salary: 'Paid internship',
    tags: ['Strategic Thinking', 'Business Analysis', 'Excel', 'Research'],
    requirements: ['Strategic thinking', 'Business analysis', 'Presentations', 'Excel', 'Research'],
    why: 'Strong fit with Mario Rossi strategy coursework, business case experience, and presentation strengths.',
    status: 'Top 3 candidate'
  },
  {
    id: 2,
    title: 'Marketing Analyst Intern',
    company: 'BrandWave Srl',
    location: 'Milan',
    type: 'Hybrid',
    match: 95,
    rank: 1,
    rankLabel: 'Rank #1 for this role',
    salary: 'Paid internship',
    tags: ['Marketing Analysis', 'Competitor Analysis', 'Excel', 'Reporting'],
    requirements: ['Marketing analysis', 'Competitor analysis', 'Excel', 'Reporting', 'Campaign support'],
    why: 'Best match for Mario Rossi Market and Strategy Business profile, competitor analysis interests, and brand positioning skills.',
    status: 'Best match'
  },
  {
    id: 3,
    title: 'HR & Talent Acquisition Intern',
    company: 'TalentBridge',
    location: 'Rome',
    type: 'Hybrid',
    match: 61,
    rank: 4,
    rankLabel: 'Rank #4 for this role',
    salary: 'Paid internship',
    tags: ['Communication', 'Organisation', 'Screening', 'Employer Branding'],
    requirements: ['Communication', 'Organisation', 'Screening', 'Stakeholder interaction', 'Employer branding mindset'],
    why: 'Some communication and stakeholder overlap, but the role is less aligned with Mario Rossi marketing and strategy goals.',
    status: 'Lower fit'
  },
  {
    id: 4,
    title: 'Business Analyst Intern',
    company: 'DataRetail Spa',
    location: 'Turin',
    type: 'Hybrid',
    match: 83,
    rank: 3,
    rankLabel: 'Rank #3 for this role',
    salary: 'Paid internship',
    tags: ['Excel', 'Problem Solving', 'Reporting', 'Process Analysis'],
    requirements: ['Excel', 'Problem solving', 'Reporting', 'Process analysis', 'Analytical mindset'],
    why: 'Relevant to Mario Rossi business analysis goals, with room to strengthen operations and process analysis examples.',
    status: 'Recommended'
  },
  {
    id: 5,
    title: 'Digital Marketing Intern',
    company: 'SocialSpark',
    location: 'Bologna',
    type: 'Remote',
    match: 74,
    rank: 2,
    rankLabel: 'Rank #2 for this role',
    salary: 'Paid internship',
    tags: ['Social Media', 'Communication', 'Content Planning', 'Engagement Analysis'],
    requirements: ['Social media', 'Communication', 'Campaign support', 'Content planning', 'Engagement analysis'],
    why: 'Good secondary option for Mario Rossi, especially if he wants to connect strategy work with digital campaign execution.',
    status: 'Top 3 candidate'
  },
  {
    id: 6,
    title: 'Market Intelligence Intern',
    company: 'InsightCorp',
    location: 'Milan',
    type: 'Hybrid',
    match: 90,
    rank: 2,
    rankLabel: 'Rank #2 for this role',
    salary: 'Paid internship',
    tags: ['Market Research', 'Competitor Analysis', 'Strategic Analysis', 'Synthesis'],
    requirements: ['Market research', 'Competitor analysis', 'Strategic analysis', 'Presentation', 'Synthesis skills'],
    why: 'Strong alignment with Mario Rossi research, strategy, and synthesis skills from Market and Strategy Business coursework.',
    status: 'Top 3 candidate'
  }
];

export const careerQuiz = {
  title: 'Career Preferences Quiz',
  subtitle: 'Answer 6 short questions to refine your job matches based on your interests, goals, and work preferences.',
  privacyLabel: 'Current User preferences only',
  questions: [
    {
      id: 'sectors',
      question: 'What sectors are you most interested in?',
      options: ['Marketing & Brand', 'Consulting & Strategy', 'Business Analysis', 'HR & Talent Acquisition', 'Digital Marketing', 'Market Intelligence']
    },
    {
      id: 'role',
      question: 'Which type of role would you most like to start with?',
      options: ['Marketing Analyst Intern', 'Junior Strategy Intern', 'Business Analyst Intern', 'Digital Marketing Intern', 'HR & Talent Acquisition Intern', 'Market Intelligence Intern']
    },
    {
      id: 'careerGoal',
      question: 'What is your long-term career goal?',
      options: ['Become a marketing manager', 'Build a career in consulting', 'Specialize in business analytics', 'Work in HR and talent development', 'Grow in digital communication and branding', 'Work in strategy and market intelligence']
    },
    {
      id: 'relocation',
      question: 'Are you willing to relocate for the right opportunity?',
      options: ['Yes, definitely', 'Yes, within Italy', 'Only near my current city', 'No, I prefer to stay local']
    },
    {
      id: 'travel',
      question: 'Are you open to business travel?',
      options: ['Yes', 'Occasionally', 'Rarely', 'No']
    },
    {
      id: 'workModel',
      question: 'What work model do you prefer?',
      options: ['On-site', 'Hybrid', 'Remote', 'No strong preference']
    }
  ],
  defaultAnswers: {
    sectors: 'Marketing & Brand',
    role: 'Marketing Analyst Intern',
    careerGoal: 'Become a marketing manager',
    relocation: 'Yes, within Italy',
    travel: 'Occasionally',
    workModel: 'Hybrid'
  },
  refinedMatches: [
    {
      role: 'Marketing Analyst Intern',
      company: 'BrandWave Srl',
      before: 88,
      after: 95,
      reasons: ['aligned with preferred sector', 'aligned with career goal', 'aligned with work model preference']
    },
    {
      role: 'Junior Strategy Intern',
      company: 'Nexa Consulting',
      before: 89,
      after: 92,
      reasons: ['aligned with career goal', 'aligned with mobility preference', 'aligned with business travel openness']
    },
    {
      role: 'Market Intelligence Intern',
      company: 'InsightCorp',
      before: 84,
      after: 90,
      reasons: ['aligned with preferred sector', 'aligned with career goal', 'aligned with mobility preference']
    }
  ]
};

export const companyRankings = [
  {
    company: 'Nexa Consulting',
    role: 'Junior Strategy Intern',
    requirements: ['Strategic thinking', 'Business analysis', 'Presentations', 'Excel', 'Research'],
    ranking: [
      { rank: 1, candidate: 'Student_002', match: 94, strengths: ['Consulting cases', 'Business analysis'], gaps: ['Executive polish'] },
      { rank: 2, candidate: 'Student_006', match: 93, strengths: ['Market research', 'Strategy synthesis'], gaps: ['Excel speed'] },
      { rank: 3, candidate: 'Mario Rossi', match: 92, strengths: ['Strategic thinking', 'Presentations'], gaps: ['Advanced Excel modeling'] },
      { rank: 4, candidate: 'Student_004', match: 78, strengths: ['Reporting', 'Analytical mindset'], gaps: ['Client storytelling'] },
      { rank: 5, candidate: 'Student_003', match: 64, strengths: ['Communication'], gaps: ['Business analysis depth'] },
      { rank: 6, candidate: 'Student_005', match: 57, strengths: ['Stakeholder interaction'], gaps: ['Strategy cases'] }
    ]
  },
  {
    company: 'BrandWave Srl',
    role: 'Marketing Analyst Intern',
    requirements: ['Marketing analysis', 'Competitor analysis', 'Excel', 'Reporting', 'Campaign support'],
    ranking: [
      { rank: 1, candidate: 'Mario Rossi', match: 95, strengths: ['Market research', 'Brand positioning'], gaps: ['Campaign dashboarding'] },
      { rank: 2, candidate: 'Student_003', match: 84, strengths: ['Digital marketing', 'Communication'], gaps: ['Excel reporting'] },
      { rank: 3, candidate: 'Student_006', match: 80, strengths: ['Competitor analysis', 'Synthesis'], gaps: ['Campaign operations'] },
      { rank: 4, candidate: 'Student_002', match: 72, strengths: ['Business analysis'], gaps: ['Marketing depth'] },
      { rank: 5, candidate: 'Student_005', match: 66, strengths: ['Employer branding'], gaps: ['Competitor analysis'] },
      { rank: 6, candidate: 'Student_004', match: 60, strengths: ['Reporting'], gaps: ['Brand strategy'] }
    ]
  },
  {
    company: 'TalentBridge',
    role: 'HR & Talent Acquisition Intern',
    requirements: ['Communication', 'Organisation', 'Screening', 'Stakeholder interaction', 'Employer branding mindset'],
    ranking: [
      { rank: 1, candidate: 'Student_005', match: 95, strengths: ['Employer branding', 'Screening'], gaps: ['Data reporting'] },
      { rank: 2, candidate: 'Student_003', match: 76, strengths: ['Communication', 'Content planning'], gaps: ['Screening process'] },
      { rank: 3, candidate: 'Student_002', match: 63, strengths: ['Organisation'], gaps: ['HR motivation'] },
      { rank: 4, candidate: 'Mario Rossi', match: 61, strengths: ['Stakeholder communication'], gaps: ['Talent acquisition exposure'] },
      { rank: 5, candidate: 'Student_006', match: 58, strengths: ['Research'], gaps: ['Employer branding'] },
      { rank: 6, candidate: 'Student_004', match: 52, strengths: ['Process analysis'], gaps: ['Candidate communication'] }
    ]
  },
  {
    company: 'DataRetail Spa',
    role: 'Business Analyst Intern',
    requirements: ['Excel', 'Problem solving', 'Reporting', 'Process analysis', 'Analytical mindset'],
    ranking: [
      { rank: 1, candidate: 'Student_004', match: 94, strengths: ['Reporting', 'Operations analysis'], gaps: ['Presentation confidence'] },
      { rank: 2, candidate: 'Student_002', match: 91, strengths: ['Business analysis', 'Excel'], gaps: ['Retail domain'] },
      { rank: 3, candidate: 'Mario Rossi', match: 83, strengths: ['Business strategy', 'Stakeholder reporting'], gaps: ['Process analysis depth'] },
      { rank: 4, candidate: 'Student_006', match: 79, strengths: ['Market intelligence'], gaps: ['Operations reporting'] },
      { rank: 5, candidate: 'Student_003', match: 58, strengths: ['Communication'], gaps: ['Analytical tooling'] },
      { rank: 6, candidate: 'Student_005', match: 54, strengths: ['Organisation'], gaps: ['Problem solving cases'] }
    ]
  },
  {
    company: 'SocialSpark',
    role: 'Digital Marketing Intern',
    requirements: ['Social media', 'Communication', 'Campaign support', 'Content planning', 'Engagement analysis'],
    ranking: [
      { rank: 1, candidate: 'Student_003', match: 96, strengths: ['Digital marketing', 'Content planning'], gaps: ['Advanced analytics'] },
      { rank: 2, candidate: 'Mario Rossi', match: 74, strengths: ['Brand positioning', 'Communication'], gaps: ['Hands-on social media tools'] },
      { rank: 3, candidate: 'Student_005', match: 73, strengths: ['Employer branding', 'Communication'], gaps: ['Campaign analysis'] },
      { rank: 4, candidate: 'Student_006', match: 62, strengths: ['Research'], gaps: ['Content operations'] },
      { rank: 5, candidate: 'Student_002', match: 55, strengths: ['Business analysis'], gaps: ['Social media fluency'] },
      { rank: 6, candidate: 'Student_004', match: 49, strengths: ['Reporting'], gaps: ['Creative campaign work'] }
    ]
  },
  {
    company: 'InsightCorp',
    role: 'Market Intelligence Intern',
    requirements: ['Market research', 'Competitor analysis', 'Strategic analysis', 'Presentation', 'Synthesis skills'],
    ranking: [
      { rank: 1, candidate: 'Student_006', match: 92, strengths: ['Market research', 'Strategic analysis'], gaps: ['Client presentation pace'] },
      { rank: 2, candidate: 'Mario Rossi', match: 90, strengths: ['Competitor analysis', 'Synthesis'], gaps: ['Advanced research databases'] },
      { rank: 3, candidate: 'Student_002', match: 88, strengths: ['Business analysis', 'Problem solving'], gaps: ['Market intelligence tools'] },
      { rank: 4, candidate: 'Student_004', match: 81, strengths: ['Analytical mindset'], gaps: ['Strategic storytelling'] },
      { rank: 5, candidate: 'Student_003', match: 70, strengths: ['Communication'], gaps: ['Research depth'] },
      { rank: 6, candidate: 'Student_005', match: 59, strengths: ['Stakeholder interaction'], gaps: ['Competitor analysis'] }
    ]
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
  { id: 1, name: 'Mario Rossi', role: 'Marketing Analyst', match: 95, gpa: 28.1, readiness: 82, skills: ['Market Research', 'Strategy', 'Excel'], stage: 'Shortlisted', reviewer: 'HR_001' },
  { id: 2, name: 'Student_002', role: 'Business Analyst', match: 91, gpa: 27.9, readiness: 77, skills: ['Excel', 'Business Analysis', 'Strategy'], stage: 'Review', reviewer: 'HR_001' },
  { id: 3, name: 'Student_003', role: 'Digital Marketing Intern', match: 96, gpa: 29.1, readiness: 79, skills: ['Communication', 'Campaigns', 'Content Planning'], stage: 'Interview', reviewer: 'HR_002' },
  { id: 4, name: 'Student_004', role: 'Business Analyst Intern', match: 94, gpa: 28.2, readiness: 72, skills: ['Reporting', 'Operations', 'Excel'], stage: 'Review', reviewer: 'HR_001' },
  { id: 5, name: 'Student_005', role: 'HR & Talent Acquisition Intern', match: 95, gpa: 27.4, readiness: 69, skills: ['Communication', 'Screening', 'Employer Branding'], stage: 'New', reviewer: 'HR_002' },
  { id: 6, name: 'Student_006', role: 'Market Intelligence Intern', match: 92, gpa: 28.8, readiness: 80, skills: ['Market Research', 'Strategy', 'Synthesis'], stage: 'Shortlisted', reviewer: 'HR_001' }
];

export const aggregateSkillGaps = [
  { skill: 'Campaign analytics', value: 68 },
  { skill: 'Storytelling', value: 54 },
  { skill: 'Market sizing', value: 47 },
  { skill: 'Financial modeling', value: 38 }
];

export const universityMetrics = {
  admin: 'Admin_001',
  totalActiveStudents: 156,
  cvsUploaded: 142,
  mockInterviewsCompleted: 97,
  averageCareerReadiness: 74,
  totalMatchesGenerated: 1284,
  averageMatchScore: 79,
  activePartnerCompanies: 18,
  publishedJobOffers: 34,
  cvImprovementUsageRate: 81,
  mockInterviewCompletionRate: 62,
  averageStudentSatisfaction: 4.4,
  nps: 28,
  placementPipeline: [
    { label: 'Profile completed', value: 86 },
    { label: 'CVs uploaded', value: 91 },
    { label: 'Mock interviews completed', value: 62 },
    { label: 'Matched to roles', value: 79 }
  ],
  topCareerInterests: [
    { skill: 'Marketing & Brand', value: 34 },
    { skill: 'Consulting & Strategy', value: 29 },
    { skill: 'Business Analysis', value: 24 }
  ],
  mostCommonSkillGaps: [
    { skill: 'Advanced Excel', value: 68 },
    { skill: 'Presentation skills', value: 61 },
    { skill: 'Data storytelling', value: 56 },
    { skill: 'SQL / data tools', value: 44 },
    { skill: 'Interview confidence', value: 39 }
  ],
  companyAnalytics: [
    { skill: 'Active partner companies', value: 18 },
    { skill: 'Published job offers', value: 34 },
    { skill: 'Average match score', value: 79 }
  ]
};
