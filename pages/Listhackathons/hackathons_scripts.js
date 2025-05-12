// Ожидание полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {

    // Получение ссылок на элементы DOM 
    const detailsModal = document.getElementById('details-modal');
    const closeDetailsBtn = document.getElementById('close-details-modal');


    const openDetailsBtns = document.querySelectorAll('.open-details-btn'); 

    // Открытие модального окна деталей
    openDetailsBtns.forEach(btn => { 
        btn.addEventListener('click', (event) => {
            const card = event.target.closest('.hackathon-card');
            if (!card) return;

            const title = card.dataset.title;
            const organizer = card.dataset.organizer;
            const dateDisplay = card.dataset.date;
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

            detailsModal.style.display = 'block';
        });
    });

    // Закрытие модального окна деталей
    closeDetailsBtn.addEventListener('click', () => {
        detailsModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) {
            detailsModal.style.display = 'none';
        }

    });
});