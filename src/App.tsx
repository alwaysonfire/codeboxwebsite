import LandingPage from './LandingPage';
import StartPage from './StartPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
