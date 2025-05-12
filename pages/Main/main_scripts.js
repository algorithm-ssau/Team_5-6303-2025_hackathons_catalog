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

        function showImage(index) {
            if (index >= images.length) index = 0;
            else if (index < 0) index = images.length - 1;
            images[currentIndex].classList.remove('active');
            images[index].classList.add('active');
            currentIndex = index;
        }

        if (images.length <= 1) {
            if (prevButton) prevButton.style.display = 'none';
            if (nextButton) nextButton.style.display = 'none';
            slider.setAttribute('data-single-image', 'true');
        } else {
            if(nextButton) nextButton.addEventListener('click', () => showImage(currentIndex + 1));
            if(prevButton) prevButton.addEventListener('click', () => showImage(currentIndex - 1));
        }
    });

    const newsItems = document.querySelectorAll('.news-item');
    const maxChars = 130;

    newsItems.forEach(item => {
        const descriptionDiv = item.querySelector('.news-description');
        const readMoreBtn = item.querySelector('.read-more-btn');

        if (!descriptionDiv || !readMoreBtn) {
            if (readMoreBtn) readMoreBtn.style.display = 'none';
            return;
        }

        //Работаем с innerHTML и текстом для проверки длины
        const fullHtml = descriptionDiv.innerHTML;
        const fullTextForCheck = descriptionDiv.textContent.trim();

        if (fullTextForCheck.length > maxChars) {
            let shortHtml = '';
            let currentLength = 0;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = fullHtml;

             // Функция для обхода узлов и сборки короткого HTML
            function buildShortHtml(node) {
                if (currentLength >= maxChars) return;

                if (node.nodeType === Node.TEXT_NODE) {
                    const remainingChars = maxChars - currentLength;
                    const textToAdd = node.textContent.substring(0, remainingChars);
                    shortHtml += textToAdd;
                    currentLength += textToAdd.length;
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    // Копируем тег и его атрибуты
                    const tag = node.tagName.toLowerCase();
                    shortHtml += `<${tag}`;
                    for (const attr of node.attributes) {
                        shortHtml += ` ${attr.name}="${attr.value}"`;
                    }
                    shortHtml += '>';

                    // Рекурсивно обходим дочерние узлы
                    node.childNodes.forEach(child => buildShortHtml(child));


                     if (currentLength < maxChars || node.childNodes.length === 0) {
                         shortHtml += `</${tag}>`;
                     }
                }
            }

            tempDiv.childNodes.forEach(child => buildShortHtml(child));

            // Добавляем многоточие, если текст был обрезан
            if (currentLength >= maxChars) {
                 shortHtml += "...";
            }


            // Сохраняем HTML и состояние
            descriptionDiv.dataset.fullHtml = fullHtml;
            descriptionDiv.dataset.shortHtml = shortHtml;
            descriptionDiv.dataset.expanded = 'false';

            descriptionDiv.innerHTML = shortHtml;
            readMoreBtn.style.display = 'inline';

            // Обработчик клика
            readMoreBtn.addEventListener('click', (event) => {
                event.preventDefault();
                const isExpanded = descriptionDiv.dataset.expanded === 'true';

                if (isExpanded) {
                    descriptionDiv.innerHTML = descriptionDiv.dataset.shortHtml;
                    readMoreBtn.textContent = 'Читать далее';
                    descriptionDiv.dataset.expanded = 'false';
                } else {
                    descriptionDiv.innerHTML = descriptionDiv.dataset.fullHtml;
                    readMoreBtn.textContent = 'Свернуть';
                    descriptionDiv.dataset.expanded = 'true';
                }
            });
        } else {
            readMoreBtn.style.display = 'none';
        }
    });
});