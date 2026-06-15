# 📝 Todo React App

![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript)
![Sass](https://img.shields.io/badge/Sass-1.100-CC6699?logo=sass)
![ESLint](https://img.shields.io/badge/ESLint-10.3-4B32C3?logo=eslint)
![JSON Server](https://img.shields.io/badge/JSON_Server-1.0-5E5E5E?logo=json)

Простое, но функциональное веб-приложение для управления задачами, построенное на React с использованием методологии Feature-Sliced Design.  
Позволяет создавать, отслеживать и удалять задачи.

👉 Живая демонстрация:  
https://superpnz.github.io/todo-react/

---

# 🚀 Возможности

- Управление задачами: создание, просмотр, удаление задач
- Отметка о выполнении задач (isDone)
- Умный поиск задач в реальном времени
- Детальная страница задачи
- SPA-навигация без перезагрузки
- Статистика выполненных задач
- Адаптивный UI с микро-анимациями

---

# 🛠️ Технологии и инструменты

## Ядро

- **React 19.2** — UI библиотека
- **Vite** — быстрая сборка и dev server

---

## Архитектура и стилизация

- **Feature-Sliced Design (FSD)** — масштабируемая архитектура
- **Sass (SCSS)** — стилизация
- **CSS Modules** — изоляция стилей

---

## Дополнительно

- **React Router** — маршрутизация SPA
- **ESLint** — контроль качества кода
- **gh-pages** — деплой на GitHub Pages

---

# 📁 Структура проекта (FSD)

Кодовая база организована в соответствии с методологией Feature-Sliced Design, что делает её легко масштабируемой и поддерживаемой.

```text
src/
├── app/
│   ├── routing/
│   ├── styles/
│   └── App.jsx
├── pages/
│   ├── TaskPage/
│   └── TasksPage/
├── features/
│   ├── add-task/
│   ├── search-task/
│   └── stats/
├── entities/
│   └── todo/
├── widgets/
│   └── Todo/
└── shared/
    ├── api/
    ├── assets/
    ├── constants/
    ├── hooks/
    ├── ui/
    └── utils/
