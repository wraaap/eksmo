function shuffleBook() {
    const booksWrapper = document.querySelector('.books__wrapper');
    const shuffleBtn = document.getElementById('shuffle-books');

    function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }

    function shuffleBooks() {
    const allCards = Array.from(booksWrapper.querySelectorAll('.book-card'));

    // Группируем по сортировке
    const grouped = allCards.reduce((acc, card) => {
        const sort = card.dataset.sort;
        if (!acc[sort]) acc[sort] = [];
        acc[sort].push(card);
        return acc;
    }, {});

    // Очищаем контейнер
    booksWrapper.innerHTML = '';

    // Перемешиваем внутри группы и добавляем обратно
    Object.keys(grouped).sort().forEach(sort => {
        const shuffled = shuffle(grouped[sort]);
        shuffled.forEach(card => booksWrapper.appendChild(card));
    });
    }

    // Привязываем к кнопке
    shuffleBtn.addEventListener('click', shuffleBooks);
}

export default shuffleBook;