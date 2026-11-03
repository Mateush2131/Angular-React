# HybridApp: ASP.NET Core + React + Angular

Гибридное приложение с одним backend (ASP.NET Core) и двумя frontend: React (корень) и Angular (/angular).

## Структура

```
HybridApp.Server/
├── ClientApp/
│   ├── react/          # React + Vite (TypeScript)
│   └── angular/        # Angular
├── Controllers/        # API контроллеры
├── Program.cs
└── HybridApp.Server.csproj
```

## Требования

- .NET 8 SDK
- Node.js LTS (для фронтендов)

### Установка Node.js (Windows)

```powershell
winget install -e --id OpenJS.NodeJS.LTS
```

После установки добавьте путь к Node.js в переменные среды системы (Системные параметры → Переменные среды → Path → Создать → полный путь до папки Node.js).

## Создание проекта (уже выполнено)

```bash
dotnet new webapi -n HybridApp.Server
cd HybridApp.Server

# React
npm create vite@latest ClientApp/react -- --template react-ts
cd ClientApp/react && npm install && cd ../..

# Angular
npx @angular/cli new ClientApp/angular --routing --style=css
cd ClientApp/angular && npm install && cd ../..
```

## Запуск в режиме разработки

### 1. Backend (ASP.NET Core)

```bash
cd HybridApp.Server
dotnet run
```

Обычно слушает на `https://localhost:7xxx` (смотрите `Properties/launchSettings.json`).

### 2. React (Vite)

```bash
cd ClientApp/react
npm run dev
```

Vite proxy перенаправляет `/api` на backend.

### 3. Angular

```bash
cd ClientApp/angular
npm start -- --proxy-config proxy.conf.json
```

Или через `ng serve` (proxy уже прописан в angular.json).

## Production сборка

При `dotnet publish` автоматически:

1. Собирается React (`npm run build`) → копируется в `wwwroot/react`
2. Собирается Angular (`ng build --configuration production`) → копируется в `wwwroot/angular`

## Маршрутизация

- `/` и всё кроме `/angular` и `/api` → React
- `/angular/*` → Angular
- `/api/*` → ASP.NET Controllers

## Аутентификация

Используется Cookie Authentication с именем куки `SharedAuth` и путём `/`, чтобы кука была доступна обоим фронтендам.

## API

Пример: `GET /api/WeatherForecast`
