import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
