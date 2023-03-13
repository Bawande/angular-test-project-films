## Задание

Ознако

Верстка карточек с фильмами: https://bawande.github.io/angular-test-project-films/

**Этап 1**

- [x] Верстка по макету, без инпутов и диалогового окна;

- [x] Данные импортируются из data.json;

- [x] При клике на кнопку лайка, фильм попадает в «Самый лучший фильм»;

- [x] Для выбранного фильма иконка закрашена;

- [x] При клике на кнопку лайка, уже выбранного фильма, фильм пропадает из «Самый лучший фильм»;

- [x] Можно выбрать только один фильм;

- [x] При выборе фильма, фильм сохраняется в localStorage;

- [x] При отмене выбора фильма, фильм удаляется из localStorage;

- [x] В папке images находятся постеры к фильмам, название файла соответствует id фильма;

- [x] Папка images должна подтягиваться к сборке, и быть не внутри assets

- [x] Каждый фильм имеет жанр, который представлен в виде массива чисел. Список жанров указан внизу файла.

- [x] При загрузке страницы проверяется localStorage на наличие фильма, если фильм есть он должен отобразиться в «Самый лучший фильм»;

**Этап 2**

Диалоговое окно с фильмом:

- [x] Использовать диалоговое окно material;

- [x] Верстка диалогового окна;

- [x] При клике на карточку с фильмом, открывается диалоговое окно;

- [x] Кнопки представлены из material, дополнительная стилизация не требуется;

- [x] При нажатии на кнопку «Выбрать лучшим», фильм попадает в «Самый лучший фильм»;

- [x] При нажатии на кнопку «Убрать из лучшего», фильм пропадает из «Самый лучший фильм», localStorage очищается;

- [x] При нажатии на кнопку «Закрыть», закрывается диалоговое окно;

- [x] Закрытие диалогового окна, при клике на затемненную область;

**Этап 3**

Фильтр:

- [x] Фильтр по одному из жанров в виде выпадающего списка;

- [x] При выборе «Все» фильтр сбрасывается;

- [x] Поиск по названию фильма, в виде отдельного инпута;

- [x] Если список отфильтрован по жанрам, поиск по названию происходит по уже отфильтрованному списку;

- [x] Если список отфильтрован по названию, то фильтр по жанрам происходит уже по отфильтрованному списку;

- [x] Фильтры в виде инпутов material. Для жанров select с одним выбором, для поиска фильтр в виде input type="text"

**Список жанров:**

1 – драма;

2 – биография;

3 – история;

4 – фэнтези;

5 – приключения;

6 – боевик;

7 – мультфильм;

8 – комедия;

9 – триллер;

10 – детектив;

11 – фантастика;

# TestProjectAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
