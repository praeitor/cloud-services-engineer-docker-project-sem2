# Проект по дисциплине "Docker-контейнеризация и хранение данных"

## Состав проекта

- **Backend:** приложение на Go (директория `backend`)
- **Frontend:** приложение на Vue.js (директория `frontend`)
- **Docker Compose:** управление сервисами (`docker-compose.yml`)
- **CI/CD:** автоматическая сборка и публикация образов через GitHub Actions

---

## Команды для запуска (после клонирования репозитория)

```bash
# Сборка и запуск всех сервисов
docker-compose up --build -d

# Проверка состояния контейнеров
docker ps

# Остановка и удаление
docker-compose down

# Если двруг понадобится собрать по отедельности
# front
docker build -t docker-project-frontend:latest frontend/

# back
docker build -t docker-project-backend:latest backend/
```

---

## Доступ к приложениям

| Компонент | URL                   | Порт хоста → контейнер |
|-----------|------------------------|-------------------------|
| Backend   | http://localhost:80    | 80 → 8081               |
| Frontend  | http://localhost:8081  | 8081 → 80
---

## Безопасность

- ❌ Не используется root
- ✅ Пользователь `appuser` (UID 1001)
- ✅ Минимальные образы
- ✅ Ограничения CPU/памяти
- ✅ Отсутствие dev-пакетов в финальных образах
- ✅ Проверка состояния приложения через healthcheck
- ✅ Есть проверка образов послеб сборки средствами trivy

---

## CI/CD

- GitHub Actions: `.github/workflows/deploy.yaml`
- Сборка и push в DockerHub: backend и frontend
- Проверка backend и frontend средствами trivy
- Секреты: `DOCKER_USER`, `DOCKER_PASSWORD`

---

## Выполнены требования

- Контейнеризация обоих компонентов
- Multi-stage сборки и минимизация образов
- Настройка через ENV
- `docker-compose.yml` корректен
- Масштабирование пока вручную (можно добавить)
- Безопасность реализована
- Секреты через GitHub Secrets
- CI/CD работает через GitHub Actions
- Проверка trivy

---

## Автор

Проект подготовлен в рамках курса "Распределённые вычисления в DevOps" Денис Булгаков Май 2025