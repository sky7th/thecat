export default class Card {
    constructor({ $target, data }) {
        this.data = data;
        this.card = document.createElement('article');
        this.card.className = 'cat-card';
        this.card.dataset.id = data.id;

        $target.appendChild(this.card);

        this.render();
    }

    render() {
        const cardImage = document.createElement('img');
        cardImage.className = 'card-image';
        cardImage.classList.add('lazy');
        cardImage.dataset.src = this.data.url;

        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';

        this.card.appendChild(cardImage);
        this.card.appendChild(cardInfo);
    }
}