document.addEventListener('DOMContentLoaded', () => {
    // --- Существующий код для слайдера новостей ---
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

            if (images[currentIndex]) images[currentIndex].classList.remove('active'); // Проверка на существование
            if (images[index]) images[index].classList.add('active'); // Проверка на существование
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
        
        let activeImageExists = false;
        images.forEach(img => {
            if (img.classList.contains('active')) activeImageExists = true;
        });
        if (images.length > 0 && !activeImageExists) {
            images[0].classList.add('active');
        }
    });

    // --- Существующий код для "Читать далее" ---
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
                let nodeTextContent = "";
                let nodeHTML = "";

                if (node.nodeType === Node.TEXT_NODE) {
                    nodeTextContent = node.textContent;
                    nodeHTML = node.textContent;
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    nodeTextContent = node.textContent || node.innerText || "";
                    nodeHTML = node.outerHTML;
                }

                if (currentLength + nodeTextContent.length > maxChars) {
                    const remainingChars = maxChars - currentLength;
                    if (node.nodeType === Node.TEXT_NODE) {
                        shortContentHTML += nodeTextContent.substring(0, remainingChars) + "...";
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        // Упрощенная логика для элементов: если текст внутри слишком длинный, добавляем многоточие
                        // и не добавляем сам элемент, чтобы не ломать теги.
                        // Для более точной обрезки HTML потребовался бы сложный парсер.
                        shortContentHTML += "...";
                    }
                    break; 
                } else {
                    shortContentHTML += nodeHTML;
                    currentLength += nodeTextContent.length;
                }
                 if (currentLength >= maxChars) { // Если уже набрали или превысили
                    if(!shortContentHTML.endsWith("...") && shortContentHTML !== fullContentHTML) shortContentHTML += "...";
                    break;
                }
            }
             // Если после цикла многоточие не добавлено, а текст реально длиннее
            if (!shortContentHTML.endsWith("...") && fullTextContent.length > maxChars && shortContentHTML.length >= maxChars ) {
                 shortContentHTML = shortContentHTML.substring(0, maxChars -3) + "...";
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

    // --- Telegram Login ---
    const userInfoContainer = document.getElementById('user-info-container');
    const myHackathonsLink = document.getElementById('my-hackathons-link');

    window.onTelegramAuth = function(user) {
        console.log('Logged in as ' + user.first_name + ' ' + (user.last_name || '') + ' (' + (user.username || 'N/A') + ', ID: ' + user.id + ')');
        
        if (userInfoContainer) {
            userInfoContainer.innerHTML = `
                <div class="user-greeting">Привет, ${user.first_name}!</div>
                <button id="logout-button" class="telegram-logout-button">Выйти</button>
            `;
            
            if (myHackathonsLink) {
                myHackathonsLink.style.display = 'list-item'; 
            }

            const logoutButton = document.getElementById('logout-button');
            if (logoutButton) {
                logoutButton.addEventListener('click', () => {
                    // Очищаем информацию о пользователе
                    userInfoContainer.innerHTML = ''; 
                    // Скрываем ссылку "Мои хакатоны"
                    if (myHackathonsLink) {
                        myHackathonsLink.style.display = 'none';
                    }
                    // Удаляем данные пользователя из localStorage
                    localStorage.removeItem('telegramUser');
                    console.log('User logged out');
                    // После выхода, Telegram виджет должен автоматически (или после перезагрузки страницы)
                    // снова отобразить кнопку логина в #user-info-container,
                    // так как он ищет этот элемент и атрибуты в своем скрипте в <head>.
                    // Явный вызов renderTelegramLoginButton() здесь может быть не нужен,
                    // но если кнопка не появляется сама, можно раскомментировать.
                    // renderTelegramLoginButton(); // <-- Убедимся, что она не пытается создать новый <script> тег
                });
            }
        }
        localStorage.setItem('telegramUser', JSON.stringify(user));
    }

    // Эта функция больше не должна создавать скрипт,
    // так как мы полагаемся на скрипт в <head> для инициализации виджета.
    // Она может использоваться для каких-то других целей, если нужно, или ее можно удалить,
    // если она не делает ничего другого.
    function renderTelegramLoginButton() {
        if (userInfoContainer) {
            // Если контейнер пуст и Telegram сам не вставил кнопку,
            // это может указывать на проблему с конфигурацией скрипта в <head>
            // или с тем, как Telegram Widget API взаимодействует с DOM.
            // На данном этапе, если скрипт в <head> настроен правильно,
            // он должен автоматически поместить кнопку в #user-info-container.
            // Мы можем просто убедиться, что контейнер пуст.
            if (userInfoContainer.innerHTML.trim() === '' && !userInfoContainer.querySelector('iframe[id^="telegram-login"]')) {
                console.log("#user-info-container is empty, Telegram widget should initialize here.");
                // НЕ создаем скрипт здесь, так как это делает скрипт в <head>
            }
        }
    }

    // Проверяем, есть ли сохраненный пользователь при загрузке страницы
    const storedUserJSON = localStorage.getItem('telegramUser');
    if (storedUserJSON) {
        try {
            const storedUser = JSON.parse(storedUserJSON);
            window.onTelegramAuth(storedUser); 
        } catch (e) {
            console.error("Error parsing stored user data:", e);
            localStorage.removeItem('telegramUser'); 
            // Если данные некорректны, очищаем контейнер, чтобы Telegram мог снова вставить кнопку
            if(userInfoContainer) userInfoContainer.innerHTML = '';
            // renderTelegramLoginButton(); // Вызов здесь не нужен, если Telegram Widget API в <head> все делает сам
        }
    } else {
        // Если пользователя нет в localStorage, Telegram Widget API,
        // подключенный в <head>, должен сам найти div#user-info-container и вставить туда кнопку.
        // Убедимся, что контейнер пуст для него.
        if(userInfoContainer) userInfoContainer.innerHTML = '';
        // renderTelegramLoginButton(); // Вызов здесь не нужен
    }
});