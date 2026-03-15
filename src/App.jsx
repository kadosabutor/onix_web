import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import CRM from './pages/CRM';
import Team from './pages/Team';
import Warehouse from './pages/Warehouse';
import AI from './pages/AI';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/team" element={<Team />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/ai" element={<AI />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;