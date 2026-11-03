// Универсальная карточка для отображения одного показателя.
// Принимает три пропса:
//   - label: подпись (строка)
//   - value: значение (строка или число)
//   - color: цвет фона (строка), по умолчанию '#f0f0f0'
//   - icon: опциональная иконка (упражнение уровня 2)

function StatCard({ label, value, color = '#f0f0f0', icon }) {
  return (
    <div
      style={{
        background: color,
        padding: '16px 20px',
        borderRadius: '10px',
        textAlign: 'center',
        flex: 1,
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {icon && <span style={{ marginRight: 6 }}>{icon}</span>}
        {value}
      </div>
      <div style={{ fontSize: '13px', color: '#555', marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}

export default StatCard;
