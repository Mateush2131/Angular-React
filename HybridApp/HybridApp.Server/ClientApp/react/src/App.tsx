import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [forecast, setForecast] = useState<any[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/WeatherForecast')
      .then(res => res.json())
      .then(data => setForecast(data))
      .catch(err => console.error('API error:', err))
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Client (Hybrid App)</h1>
      <p>This is the React frontend of the hybrid ASP.NET Core + React + Angular application.</p>
      
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>

      <h2>Weather Forecast from API</h2>
      <ul>
        {forecast.map((f, i) => (
          <li key={i}>
            {f.date}: {f.temperatureC}°C - {f.summary}
          </li>
        ))}
      </ul>

      <p>
        <a href="/angular/">Go to Angular app</a>
      </p>
    </div>
  )
}

export default App
