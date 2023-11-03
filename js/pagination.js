// Получаем все контейнеры с классом "post"
const containers = document.querySelectorAll('.post');

// Количество контейнеров, которые нужно отобразить одновременно
const batchSize = 50;

// Переменная для хранения текущей позиции партии контейнеров
let currentBatchIndex = 0;

// Функция для отображения контейнеров
function showContainers(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex && i < containers.length; i++) {
    containers[i].style.display = 'block';
  }
}

// Функция для скрытия контейнеров
function hideContainers(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex && i < containers.length; i++) {
    containers[i].style.display = 'none';
  }
} 
        
function updateButtons() {
  const backButton = document.getElementById('backButton');
  const showMoreButton = document.getElementById('showMoreButton');

  if (currentBatchIndex === 0) {
    backButton.style.display = 'none';
  } else {
    backButton.style.display = 'block';
    backButton.style.boxShadow: '0px 0px 20px 0px rgb(255, 217, 0)';
  }

   if (currentBatchIndex === Math.ceil(containers.length / batchSize) - 1) {
    showMoreButton.style.display = 'none';
  } else {
    showMoreButton.style.display = 'block';
    showMoreButton.style.boxShadow: '0px 0px 20px 0px rgb(255, 217, 0)';
  }
}

// Функция для плавной прокрутки страницы вверх
function scrollToTop() {
  const scrollDuration = 300; // Длительность прокрутки в миллисекундах
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  let scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
    
// Функция для обработки нажатия кнопки "Назад"
function handleBackButtonClick() {
  if (currentBatchIndex > 0) {
    currentBatchIndex--;
    const startIndex = currentBatchIndex * batchSize;
    const endIndex = startIndex + batchSize;
scrollToTop()
    showContainers(startIndex, endIndex);
    hideContainers(endIndex, containers.length);
    updateButtons();
      
  }
}

// Функция для обработки нажатия кнопки "Показать ещё"
function handleShowMoreButtonClick() {
  if (currentBatchIndex < Math.ceil(containers.length / batchSize) - 1) {
    const startIndex = (currentBatchIndex + 1) * batchSize;
    const endIndex = startIndex + batchSize;
scrollToTop()
    showContainers(startIndex, endIndex);
    hideContainers(0, startIndex);
    currentBatchIndex++;
    updateButtons();
      
  }
}

// // Создаем кнопки
// const backButton = document.createElement('button');
// backButton.id = 'backButton';
// backButton.textContent = 'Назад';
// backButton.style.display = 'none';
// backButton.addEventListener('click', handleBackButtonClick);

// const showMoreButton = document.createElement('button');
// showMoreButton.id = 'showMoreButton';
// showMoreButton.textContent = 'Далее';
// showMoreButton.addEventListener('click', handleShowMoreButtonClick);

// // Вставляем кнопки после последнего контейнера
// const lastContainer = containers[containers.length - 1];
// lastContainer.parentNode.appendChild(backButton);
// lastContainer.parentNode.appendChild(showMoreButton);

// Создаем контейнер <div class="nav_btn">
const buttonContainer = document.createElement('div');
buttonContainer.className = 'nav_btn';
buttonContainer.style.textAlign = 'center';
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
  
// Создаем кнопки
const backButton = document.createElement('button');
backButton.id = 'backButton';
backButton.textContent = 'Назад';
backButton.style.display = 'none';
backButton.addEventListener('click', handleBackButtonClick);

const showMoreButton = document.createElement('button');
showMoreButton.id = 'showMoreButton';
showMoreButton.textContent = 'Далее';
showMoreButton.addEventListener('click', handleShowMoreButtonClick);

// Добавляем кнопки в контейнер
buttonContainer.appendChild(backButton);
buttonContainer.appendChild(showMoreButton);

// Получаем родительский элемент последнего контейнера
const parentElement = containers[containers.length - 1].parentNode;

// Вставляем контейнер с кнопками после последнего контейнера
parentElement.insertAdjacentElement('afterend', buttonContainer);

// Инициализация: скрываем все контейнеры, кроме первых batchSize
hideContainers(batchSize, containers.length);

// Отображаем первую партию контейнеров
showContainers(0, batchSize);

// Обновляем видимость кнопок
updateButtons();
