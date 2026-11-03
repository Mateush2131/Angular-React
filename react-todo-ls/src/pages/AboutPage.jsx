function AboutPage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>О проекте</h1>
      <p>
        Учебный мини-проект по <strong>Части 7–8</strong>:
      </p>
      <ul>
        <li>
          <code>useLocalStorage</code> — кастомный хук с ленивой инициализацией
        </li>
        <li>Todo переживает перезагрузку страницы</li>
        <li>React Router: несколько страниц без перезагрузки</li>
        <li>
          <code>NavLink</code> + <code>Outlet</code> + Layout
        </li>
      </ul>
      <p style={{ color: '#64748b', fontSize: 14 }}>
        Открой DevTools → Application → Local Storage — там лежит JSON задач.
      </p>
    </div>
  );
}

export default AboutPage;
