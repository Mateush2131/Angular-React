interface EmptyStateProps {
  title: string;
  hint?: string;
}

export default function EmptyState({ title, hint }: EmptyStateProps) {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: '#6b7280',
        background: '#f9fafb',
        borderRadius: 12,
        marginTop: 20,
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>{title}</p>
      {hint && <p style={{ fontSize: 14, marginTop: 8, marginBottom: 0 }}>{hint}</p>}
    </div>
  );
}
