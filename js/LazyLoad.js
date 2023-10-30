var lazyLoadInstance = new LazyLoad({
  window.addEventListener('scroll', function () {
    // Загружаем контейнеры, когда они видимы на экране
    lazyLoadInstance.update();
});


// Инициализация LazyLoad.js
// const lazyLoadInstance = new LazyLoadInstance();

// // Обработчик события прокрутки страницы
// window.addEventListener('scroll', function () {
//     // Загружаем контейнеры, когда они видимы на экране
//     lazyLoadInstance.update();
// });
