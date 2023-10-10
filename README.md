[![Tests](../../actions/workflows/tests-14-sprint.yml/badge.svg)](../../actions/workflows/tests-14-sprint.yml)
<h1 align="center">Учебный backend-проект: "Место"</h1>

<div align="center">
      <img width="550" alt="Фрагмент кода проектной работы (контроллер users)" src="https://user-images.githubusercontent.com/108838349/220487446-4c5c0fe8-e62c-46e8-a2ab-f56c9ae60468.png">
 </div>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории, эксплуатация</a></li>
      <li><a href="#establishing">Процесс создания</a></li>
      <li><a href="#functionality">Функционал</a></li>
      <li><a href="#enhancement">Статус проекта</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Данная проектная работа выполнена в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой написание серверной логики для последующего объединения с частью <a href="https://github.com/Are-new-ta/react-mesto-auth">frontendа</a>, сделанной на "React"

<h4>
Ссылка на проект: https://github.com/Are-new-ta/express-mesto-gha
<br>
<br>
Чеклисты:
<br>
https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_14.pdf
<br>
https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_13.pdf
</h4>

<i>* - проект прошел код-ревью</i>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <a href=""><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Иконка 'Express'"></a>
  <a href=""><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Иконка 'Node JS'"></a>
  <a href=""><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="Иконка 'MongoDB'"></a>
  <a href=""><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="Иконка 'Postman'"></a>
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории</h2></a>
1. `git clone https://github.com/Are-new-ta/express-mesto-gha` - клонировать репозиторий (с использованием HTTPS) на свое устройство
2. `npm i` - установить зависимости
3. `npm run dev` - запустить сервер в режиме разработчика с hot-reload (в браузере ввести ссылку `http://localhost:3000/`, где `3000` - рабочий порт)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>4. Процесс создания</h2></a>
Работа выполнена в <b>2 этапа</b>:
<br>
1. Написание схем, контроллеров и моделей (users & cards), подключение запросов с методами api (см. <a href="#functionality">ниже</a>), добавление кодов и текстов ошибок при неуспешных запросах (400, 404, 500)
2. Расширение схем и контроллеров (users & cards), добавление функций регистрации и авторизации пользователей, добавление предварительного этапа валидации данных (celebrate & joi), обработка новых ошибок в едином обработчике (401, 403 и 409), обеспечение безопасности приложения (хэширование паролей пользователей, защита от DoS-атак, настройка заголовков HTTP)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>5. Функционал</h2></a>
- Регистрация пользователя
- Авторизация пользователя
- Получение данных о всех пользователях, об одном и о текущем авторизованном
- Редактирование данных пользователя

- Создание карточки
- Получение карточек
- Переключение лайка карточки
- Удаление карточки

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>6. Статус проекта</h2></a>
Проект завершен

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<div align="center">
    <img width="550" alt="Фрагмент кода проектной работы (контроллер users)" src="https://user-images.githubusercontent.com/108838349/220487941-b23d0c23-e119-4169-9fce-55cb3ac13a9f.png">
</div>


