// Footer — футер с копирайтом (упражнение уровня 1)

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: 40,
        padding: '20px 0',
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '14px',
      }}
    >
      <p style={{ margin: 0 }}>
        © {year} Каталог студентов · Учебный проект по React
      </p>
    </footer>
  );
}

export default Footer;
