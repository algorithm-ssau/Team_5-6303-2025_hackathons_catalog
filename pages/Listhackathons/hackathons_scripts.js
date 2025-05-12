// Ожидание полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {

    // Получение ссылок на элементы DOM
    const detailsModal = document.getElementById('details-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeDetailsBtn = document.getElementById('close-details-modal');
    const closeSignupBtn = document.getElementById('close-signup-modal');
    const openSignupFormBtn = document.getElementById('open-signup-form-btn');
    const signupForm = document.getElementById('signup-form');
    const signupMessage = document.getElementById('signup-message');
    const signupHackathonTitle = document.getElementById('signup-hackathon-title');

    const hackathonCards = document.querySelectorAll('.hackathon-card');
    const openModalBtns = document.querySelectorAll('.open-modal-btn'); // Кнопки "Записаться" на карточках

    const filterDateFromInput = document.getElementById('filter-date-from');
    const filterDateToInput = document.getElementById('filter-date-to');
    const filterSpecSelect = document.getElementById('filter-spec');
    const filterOrganizerSelect = document.getElementById('filter-organizer');
    const applyFiltersBtn = document.getElementById('apply-filters-btn');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');

    // Открытие модального окна деталей
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const card = event.target.closest('.hackathon-card');
            if (!card) return;

            const title = card.dataset.title;
            const organizer = card.dataset.organizer;
            const dateDisplay = card.dataset.date; // Для отображения (e.g., "15-17 Июля 2025")
            const specs = JSON.parse(card.dataset.specs || '[]');
            const imgSrc = card.dataset.imgSrc;
            const description = card.dataset.fullDescription;

            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-organizer').textContent = organizer;
            document.getElementById('modal-date').textContent = dateDisplay;
            document.getElementById('modal-img').src = imgSrc;
            document.getElementById('modal-img').alt = title;
            document.getElementById('modal-description').textContent = description;

            const specsContainer = document.getElementById('modal-specs');
            while (specsContainer.children.length > 1) {
                specsContainer.removeChild(specsContainer.lastChild);
            }
            specs.forEach(spec => {
                const span = document.createElement('span');
                span.className = 'spec-tag';
                span.textContent = spec;
                specsContainer.appendChild(span);
            });

            openSignupFormBtn.dataset.hackathonTitle = title; 
            detailsModal.style.display = 'block';
        });
    });

    // Закрытие модального окна деталей
    closeDetailsBtn.addEventListener('click', () => {
        detailsModal.style.display = 'none';
    });

    // Открытие модального окна формы записи из деталей
    openSignupFormBtn.addEventListener('click', () => {
        const title = openSignupFormBtn.dataset.hackathonTitle || 'Выбранный хакатон';
        signupHackathonTitle.textContent = title;
        signupForm.reset(); 
        signupMessage.style.display = 'none'; 
        signupMessage.className = 'message-area'; 
        detailsModal.style.display = 'none'; 
        signupModal.style.display = 'block'; 
    });

    // Закрытие модального окна формы записи
    closeSignupBtn.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    // Обработка отправки формы записи
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const telegram = document.getElementById('signup-telegram').value.trim();
        const hackathonTitle = signupHackathonTitle.textContent;

        console.log('--- Попытка записи ---');
        console.log('Хакатон:', hackathonTitle);
        console.log('ФИО:', name);
        console.log('Email:', email);
        console.log('Telegram:', telegram);

        // Симуляция проверки email
        const SIMULATED_EXISTING_EMAILS = ['test@example.com', 'duplicate@mail.ru'];
        if (SIMULATED_EXISTING_EMAILS.includes(email)) {
            showMessage('Ошибка: Этот email уже зарегистрирован на данный хакатон.', 'error');
            console.log('Результат: Ошибка (Email уже существует)');
        } else {
            const dataToSave = `${name} - ${email} - ${telegram} (Хакатон: ${hackathonTitle})\n`;
            console.log('Результат: Успешно');
            console.log('СИМУЛЯЦИЯ СОХРАНЕНИЯ В ФАЙЛ:', dataToSave); 
            showMessage('Вы успешно записаны на хакатон!', 'success');
            signupForm.reset();

        }
    });

    // Функция для отображения сообщений в форме
    function showMessage(message, type) {
        signupMessage.textContent = message;
        signupMessage.className = `message-area ${type}`;
        signupMessage.style.display = 'block';
    }

    // Применение фильтров
    applyFiltersBtn.addEventListener('click', () => {
        const dateFromFilterStr = filterDateFromInput.value;
        const dateToFilterStr = filterDateToInput.value;

        const dateFromFilter = dateFromFilterStr ? new Date(dateFromFilterStr + "T00:00:00") : null;
        const dateToFilter = dateToFilterStr ? new Date(dateToFilterStr + "T23:59:59") : null;

        const specFilter = filterSpecSelect.value;
        const organizerFilter = filterOrganizerSelect.value;

        hackathonCards.forEach(card => {
            const cardStartDateStr = card.dataset.startDate; 
            const cardEndDateStr = card.dataset.endDate;     

            const cardStartDate = cardStartDateStr ? new Date(cardStartDateStr + "T00:00:00") : null;
            const cardEndDate = cardEndDateStr ? new Date(cardEndDateStr + "T23:59:59") : null;

            const cardOrganizer = card.querySelector('.organizer').textContent;
            const cardSpecTags = Array.from(card.querySelectorAll('.spec-tag')).map(tag => tag.textContent);

            let dateMatch = true;
            if (cardStartDate && cardEndDate) { 
                if (dateFromFilter && cardEndDate < dateFromFilter) {
                    dateMatch = false;
                }
                if (dateToFilter && cardStartDate > dateToFilter) {
                    dateMatch = false;
                }
            } else {
                
                if (dateFromFilter || dateToFilter) {
                    dateMatch = false;
                }
            }

            const organizerMatch = organizerFilter === 'all' || cardOrganizer === organizerFilter;
            const specMatch = specFilter === 'all' || cardSpecTags.some(tag => tag === specFilter);

            if (dateMatch && organizerMatch && specMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Сброс фильтров
    resetFiltersBtn.addEventListener('click', () => {
        filterDateFromInput.value = '';
        filterDateToInput.value = '';
        filterSpecSelect.value = 'all';
        filterOrganizerSelect.value = 'all';
        hackathonCards.forEach(card => {
            card.style.display = 'flex';
        });
    });

    // Закрытие модальных окон при клике вне их содержимого
    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) {
            detailsModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });
});