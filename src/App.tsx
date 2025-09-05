import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Editor } from './components/Editor';
import { LandingPage } from './components/LandingPage';
import { TemplatePage } from './components/TemplatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
