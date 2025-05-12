// Инициализация слайдеров после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const newsSliders = document.querySelectorAll('.news-slider');

    // Настройка каждого слайдера
    newsSliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        const prevButton = slider.querySelector('.slider-control.prev');
        const nextButton = slider.querySelector('.slider-control.next');
        let currentIndex = 0;

        if (images.length === 0) {
            slider.style.display = 'none';
            return;
        }

        // Функция показа изображения по индексу
        function showImage(index) {
            if (index >= images.length) {
                index = 0;
            } else if (index < 0) {
                index = images.length - 1;
            }

            images[currentIndex].classList.remove('active');
            images[index].classList.add('active');
            currentIndex = index;
        }

        // Скрытие кнопок для слайдера с одним изображением
        if (images.length <= 1) {
            if (prevButton) prevButton.style.display = 'none';
            if (nextButton) nextButton.style.display = 'none';
            slider.setAttribute('data-single-image', 'true');
        } else {
            // Назначение событий кнопкам
            if(nextButton) {
                nextButton.addEventListener('click', () => {
                    showImage(currentIndex + 1);
                });
             }
             if(prevButton) {
                prevButton.addEventListener('click', () => {
                    showImage(currentIndex - 1);
                });
             }
        }
    });
});