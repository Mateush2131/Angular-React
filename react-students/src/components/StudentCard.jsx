import Badge from './Badge';
import SkillsList from './SkillsList';

// Это САМЫЙ важный компонент.

function StudentCard({ student }) {
  const { name, age, course, city, gpa, skills } = student;

  // Функция для отображения «звёздочек» по GPA.
  function renderStars(rating) {
    const fullStars = Math.round(rating);
    const emptyStars = 5 - fullStars;
    return '⭐'.repeat(fullStars) + '☆'.repeat(emptyStars);
  }

  // Цвет бейджа курса
  const courseColor = course >= 3 ? '#28a745' : '#ffc107';

  // Аватар через ui-avatars.com (упражнение уровня 2)
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=64`;

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '20px',
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {/* Шапка карточки: аватар + имя + курс */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 12,
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={avatarUrl}
            alt={name}
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <div>
            <h3 style={{ margin: 0, fontSize: '18px' }}>{name}</h3>
            {/* Условный рендер: отличник (упражнение уровня 1) */}
            {gpa >= 4.5 && (
              <span style={{ fontSize: '13px', color: '#b45309' }}>
                🏆 Отличник
              </span>
            )}
          </div>
        </div>

        <Badge text={`${course} курс`} color={courseColor} />
      </div>

      <p style={{ margin: '6px 0', color: '#555' }}>
        <strong>Возраст:</strong> {age} лет
      </p>
      <p style={{ margin: '6px 0', color: '#555' }}>
        <strong>Город:</strong> {city}
      </p>

      <p style={{ margin: '6px 0', color: '#555' }}>
        <strong>Средний балл:</strong> {gpa} {renderStars(gpa)}
      </p>

      <SkillsList skills={skills} />
    </div>
  );
}

export default StudentCard;
