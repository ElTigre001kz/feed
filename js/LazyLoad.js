// Инициализация LazyLoad
const lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy", // Выбираем элементы с классом "lazy"
  threshold: 0, // Загружаем элементы, когда они полностью видимы на экране
  callback_enter: function(element) {
    // Колбэк, вызываемый при появлении элемента на экране
    element.classList.add("loaded"); // Добавляем класс "loaded" для анимации или других стилей
  },
  callback_exit: function(element) {
    // Колбэк, вызываемый при скрытии элемента за пределами экрана
    element.classList.remove("loaded"); // Удаляем класс "loaded"
  }
});

// // Обработчик события прокрутки страницы
// window.addEventListener('scroll', function () {
//   // Загружаем контейнеры, когда они видимы на экране
//   lazyLoadInstance.update();
// });

// var lazyLoadInstance = new LazyLoad({
//   window.addEventListener('scroll', function () {
//     // Загружаем контейнеры, когда они видимы на экране
//     lazyLoadInstance.update();
// });
// });


// Инициализация LazyLoad.js
// const lazyLoadInstance = new LazyLoadInstance();

// // Обработчик события прокрутки страницы
// window.addEventListener('scroll', function () {
//     // Загружаем контейнеры, когда они видимы на экране
//     lazyLoadInstance.update();
// });
