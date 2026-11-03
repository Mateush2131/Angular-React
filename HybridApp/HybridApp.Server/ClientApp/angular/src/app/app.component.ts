import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>Angular Client (Hybrid App)</h1>
      <p>This is the Angular frontend of the hybrid ASP.NET Core + React + Angular application.</p>
      
      <h2>Weather Forecast from API</h2>
      <ul>
        <li *ngFor="let f of forecast">
          {{ f.date }}: {{ f.temperatureC }}°C - {{ f.summary }}
        </li>
      </ul>

      <p>
        <a href="/">Go to React app</a>
      </p>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'angular';
  forecast: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/api/WeatherForecast').subscribe({
      next: (data) => this.forecast = data,
      error: (err) => console.error('API error:', err)
    });
  }
}
