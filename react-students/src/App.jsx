import Header from './components/Header';
import StatCard from './components/StatCard';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import { students } from './data/students';

function App() {
  // ---- Вычисления для статистики ----
  const totalStudents = students.length;

  const avgGpa =
    students.reduce((sum, s) => sum + s.gpa, 0) / totalStudents;

  const youngestAge = Math.min(...students.map((s) => s.age));

  const uniqueCities = new Set(students.map((s) => s.city)).size;

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      {/* 1. Шапка */}
      <Header />

      {/* 2. Блок статистики */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          marginBottom: 24,
          flexWrap: 'wrap',
        }}
      >
        <StatCard
          label="Всего студентов"
          value={totalStudents}
          color="#e0f2fe"
          icon="👥"
        />
        <StatCard
          label="Средний балл"
          value={avgGpa.toFixed(2)}
          color="#dcfce7"
          icon="📊"
        />
        <StatCard
          label="Младший возраст"
          value={`${youngestAge} лет`}
          color="#fef3c7"
          icon="🎂"
        />
        <StatCard
          label="Городов"
          value={uniqueCities}
          color="#fce7f3"
          icon="🏙"
        />
      </div>

      {/* 3. Заголовок раздела */}
      <h2 style={{ marginBottom: 16 }}>Список студентов</h2>

      {/* 4. Список карточек */}
      <StudentList students={students} />

      {/* 5. Футер */}
      <Footer />
    </div>
  );
}

export default App;
