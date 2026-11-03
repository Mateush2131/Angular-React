function Filters({ current, onChange, counts, priorityFilter, onPriorityChange }) {
  const statusFilters = [
    { key: 'all', label: 'Все', count: counts.all },
    { key: 'active', label: 'Активные', count: counts.active },
    { key: 'done', label: 'Выполненные', count: counts.done },
  ];

  const priorityFilters = [
    { key: 'all', label: 'Любой' },
    { key: 'high', label: '🔴 Высокий' },
    { key: 'medium', label: '🟡 Средний' },
    { key: 'low', label: '🟢 Низкий' },
  ];

  const btnStyle = (active) => ({
    padding: '6px 14px',
    borderRadius: 20,
    border: active ? 'none' : '1px solid #cbd5e1',
    background: active ? '#667eea' : 'white',
    color: active ? 'white' : '#475569',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: active ? 600 : 400,
  });

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
        {statusFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            style={btnStyle(current === f.key)}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: '#64748b' }}>Приоритет:</span>
        {priorityFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => onPriorityChange(f.key)}
            style={btnStyle(priorityFilter === f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
