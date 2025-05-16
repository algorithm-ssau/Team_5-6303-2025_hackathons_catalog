document.addEventListener('DOMContentLoaded', () => {
    // --- Код для слайдера новостей ---
    const newsSliders = document.querySelectorAll('.news-slider');
    newsSliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        const prevButton = slider.querySelector('.slider-control.prev');
        const nextButton = slider.querySelector('.slider-control.next');
        let currentIndex = 0;

        if (images.length === 0) {
            if(slider) slider.style.display = 'none';
            return;
        }

        function showImage(index) {
            if (index >= images.length) index = 0;
            else if (index < 0) index = images.length - 1;

            if (images[currentIndex]) images[currentIndex].classList.remove('active');
            if (images[index]) images[index].classList.add('active');
            currentIndex = index;
        }

        if (images.length <= 1) {
            if (prevButton) prevButton.style.display = 'none';
            if (nextButton) nextButton.style.display = 'none';
            if (slider) slider.setAttribute('data-single-image', 'true');
        } else {
            if (nextButton) nextButton.addEventListener('click', () => showImage(currentIndex + 1));
            if (prevButton) prevButton.addEventListener('click', () => showImage(currentIndex - 1));
        }
        
        // Показываем первое изображение, если оно есть и еще не активно
        if (images.length > 0 && !slider.querySelector('.slider-image.active')) {
             if(images[0]) images[0].classList.add('active');
        }
    });

    // --- Код для "Читать далее" ---
    const newsItems = document.querySelectorAll('.news-item');
    const maxChars = 130; 

    newsItems.forEach(item => {
        const descriptionElement = item.querySelector('.news-description');
        const readMoreBtn = item.querySelector('.read-more-btn');

        if (!descriptionElement || !readMoreBtn) {
            if (readMoreBtn) readMoreBtn.style.display = 'none';
            return;
        }
        
        const fullContentHTML = descriptionElement.innerHTML;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = fullContentHTML;
        const fullTextContent = tempDiv.textContent || tempDiv.innerText || "";

        if (fullTextContent.length > maxChars) {
            let shortContentHTML = "";
            let currentLength = 0;
            const nodes = Array.from(descriptionElement.childNodes);

            for (const node of nodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    if (currentLength + node.textContent.length > maxChars) {
                        shortContentHTML += node.textContent.substring(0, maxChars - currentLength) + "...";
                        break;
                    } else {
                        shortContentHTML += node.textContent;
                        currentLength += node.textContent.length;
                    }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const outerHTML = node.outerHTML;
                    const textContentOfNode = node.textContent || node.innerText || "";
                    if (currentLength + textContentOfNode.length > maxChars && currentLength < maxChars) {
                        let partialText = textContentOfNode.substring(0, maxChars - currentLength);
                        let tempNode = node.cloneNode(false); 
                        tempNode.textContent = partialText + "...";
                        shortContentHTML += tempNode.outerHTML;
                        break;
                    } else if (currentLength + textContentOfNode.length <= maxChars) {
                        shortContentHTML += outerHTML;
                        currentLength += textContentOfNode.length;
                    } else {
                        if(!shortContentHTML.endsWith("...")) shortContentHTML += "...";
                        break;
                    }
                }
                 if (currentLength >= maxChars) {
                    if(!shortContentHTML.endsWith("...")) shortContentHTML += "...";
                    break;
                }
            }
            if (!shortContentHTML.endsWith("...") && fullTextContent.length > maxChars && currentLength < maxChars) {
                 shortContentHTML = shortContentHTML.substring(0, maxChars) + "...";
            }

            descriptionElement.dataset.fullContentHTML = fullContentHTML;
            descriptionElement.dataset.shortContentHTML = shortContentHTML;
            descriptionElement.dataset.expanded = 'false';

            descriptionElement.innerHTML = shortContentHTML;
            readMoreBtn.style.display = 'inline';

            readMoreBtn.addEventListener('click', (event) => {
                event.preventDefault();
                const isExpanded = descriptionElement.dataset.expanded === 'true';
                if (isExpanded) {
                    descriptionElement.innerHTML = descriptionElement.dataset.shortContentHTML;
                    readMoreBtn.textContent = 'Читать далее';
                    descriptionElement.dataset.expanded = 'false';
                } else {
                    descriptionElement.innerHTML = descriptionElement.dataset.fullContentHTML;
                    readMoreBtn.textContent = 'Свернуть';
                    descriptionElement.dataset.expanded = 'true';
                }
            });
        } else {
            readMoreBtn.style.display = 'none';
        }
    });

    // --- Код для Фактов о котах ---
 const catFactImageElement = document.getElementById('cat-fact-image');
    const catFactTextElement = document.getElementById('cat-fact-text');
    const newCatFactBtn = document.getElementById('new-cat-fact-btn');

    const catImageUrls = [
        '/static/images/images_main/cat1.jpg', 
        '/static/images/images_main/cat2.jpg',
        '/static/images/images_main/cat3.jpg',
        '/static/images/images_main/cat4.jpg',
        '/static/images/images_main/cat5.jpg'
    ];

    let lastCatImageIndex = -1; // Переменная для хранения индекса последнего показанного изображения

    function getRandomCatImage() {
        if (catImageUrls.length === 0) return ""; 
        if (catImageUrls.length === 1) return catImageUrls[0]; // Если всего одно фото, всегда его показываем

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * catImageUrls.length);
        } while (randomIndex === lastCatImageIndex); // Повторяем, пока новый индекс не будет отличаться от старого

        lastCatImageIndex = randomIndex; // Запоминаем новый индекс
        return catImageUrls[randomIndex];
    }

    async function fetchAndDisplayNewCatFact() {
        if (catFactImageElement) {
            const newImageSrc = getRandomCatImage();
            if (newImageSrc) { 
                 catFactImageElement.src = newImageSrc;
            }
        }
        if (catFactTextElement) {
            catFactTextElement.textContent = 'Загрузка факта...'; 
            try {
                const response = await fetch('/get-new-cat-fact'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                catFactTextElement.textContent = data.fact;
            } catch (error) {
                console.error("Ошибка при загрузке факта о коте:", error);
                catFactTextElement.textContent = 'Не удалось загрузить факт. Попробуйте еще раз!';
            }
        }
    }

    if (newCatFactBtn) {
        newCatFactBtn.addEventListener('click', fetchAndDisplayNewCatFact);
    }

    // Первоначальная загрузка фото кота 
    if (catFactImageElement && catFactTextElement && catFactTextElement.textContent.trim() !== '' && catFactTextElement.textContent !== 'Загрузка факта...') {
        const initialImageSrc = getRandomCatImage();
        if(initialImageSrc) {
            catFactImageElement.src = initialImageSrc;
        }
    } else if (catFactImageElement) { 
         fetchAndDisplayNewCatFact();
    }
});