import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodosPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
