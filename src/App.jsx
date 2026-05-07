import { useState } from 'react';
import AppShell from './components/AppShell.jsx';
import CVImprovementPage from './pages/CVImprovementPage.jsx';
import CareerPreferencesQuizPage from './pages/CareerPreferencesQuizPage.jsx';
import CareerPassportPage from './pages/CareerPassportPage.jsx';
import HRDashboard from './pages/HRDashboard.jsx';
import JobMatchingPage from './pages/JobMatchingPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import MockInterviewPage from './pages/MockInterviewPage.jsx';
import PremiumFeaturesPage from './pages/PremiumFeaturesPage.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import UniversityAdminPage from './pages/UniversityAdminPage.jsx';

const pages = {
  landing: LandingPage,
  student: StudentDashboard,
  jobs: JobMatchingPage,
  quiz: CareerPreferencesQuizPage,
  cv: CVImprovementPage,
  interview: MockInterviewPage,
  hr: HRDashboard,
  university: UniversityAdminPage,
  passport: CareerPassportPage,
  premium: PremiumFeaturesPage
};

export default function App() {
  // Simple state-based routing is enough for this clickable student-project prototype.
  const [currentPage, setCurrentPage] = useState('landing');
  const Page = pages[currentPage] || LandingPage;
  return (
    <AppShell currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <Page setCurrentPage={setCurrentPage} />
    </AppShell>
  );
}
