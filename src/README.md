# Проектная работа номер 9 "Место". Сделана на курсе по веб-разработке от Яндекс.Практикума.

## Описание сайта.

* Это одностраничный адаптивный сайт про путешествия, созданный по 4 макетам, которые заранее были отрисованны дизайнером в графическом редакторе Фигма, под десктопные устройства от 320px и выше. Ипользовалась методология БЭМ и файловая структура Nested БЭМ. Сайт адекватно отображается в Яндекс.Браузере, Google Chrome Canary, Firefox. С помощью языка программирования Java Script при изменении данных о пользователе открывается и закрывается Pop-up. Так же, с помощью JS можно изменить и сохранить данные пользователя, и добавить новую фотографию. Осуществляется валидация профиля и на добавление фотографий. Созданы два класса Card и FormValidator, которые имеют приватные и публичные данные, и которые подключены через дерективы export и import. Проект собирается через Webpack. Сайт подключен и обращается к серверу, куда можно отправлять и получать фотографии, данные, удалять, а так же стоит счетчик лайков.

## На этом одностраничном сайте применялись:

* Позиционирование элементов.
* Флексбокс.
* Grid.
* Git.
* Фигма.
* Медиазапросы.
* Трансформации ссылок при наведении реализовано с помощью CSS.
* Подключен шрифт 'Inter', если у пользователя такой шрифт отсутствует, то он заменится на стандартный и похожий на этот шрифт 'Helvetica'.
* Pop-up, изменение и сохранение данных о пользователе, добавление через попап-форму и удаление фотографий, попап на просмотр фотографии в крупном плане, активное "сердечко"реализованно с помощью JS.
* Валидация форм.
* Закрытие попапа кликом на оверлей и на кнопку Escape.
* ООП.
* Атрибут "module".
* Webpack.
* Node_modules.
* Promise.
* Ассинхронность.
* Api.
* JSON.

## Инструкция по установке:


Ссылка на git хостинг - [git хостинг](https://alinaonly.github.io/mesto/index.html)


Запуск локального HTTP сервера у себя на компьютере - [Как настроить локальный сервер для тестирования?](https://developer.mozilla.org/ru/docs/Learn/Common_questions/set_up_a_local_testing_server)