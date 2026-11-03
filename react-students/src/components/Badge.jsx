// Универсальный цветной бейдж (упражнение уровня 1)

function Badge({ text, color = '#667eea' }) {
  return (
    <span
      style={{
        background: color,
        color: 'white',
        padding: '3px 10px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
  );
}

export default Badge;
